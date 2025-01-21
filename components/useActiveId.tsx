import { useState, useEffect, useCallback } from "react";

export function useActiveId(itemIds: string[]) {
  const [activeId, setActiveId] = useState("");

  const handleScroll = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      rootMargin: "-20% 0px -80% 0px",
    });

    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds, handleScroll]);

  // Handle click events on table of contents links
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        const clickedId = target.getAttribute("href")?.slice(1);
        if (clickedId && itemIds.includes(clickedId)) {
          setActiveId(clickedId);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [itemIds]);

  return activeId;
}
