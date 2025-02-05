import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

type ProjectLinksProps = {
  liveUrl?: string;
  githubUrl: string;
  t: (key: string) => string;
};

const ProjectLinks = ({ liveUrl, githubUrl, t }: ProjectLinksProps) => {
  return (
    <section className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      {liveUrl && (
        <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
          <Button className="w-full sm:w-auto">
            <FaExternalLinkAlt className="mr-2 h-4 w-4" />
            {t("viewLiveProject")}
          </Button>
        </Link>
      )}
      <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="w-full sm:w-auto">
          <FaGithub className="mr-2 h-5 w-5" />
          {t("viewOnGitHub")}
        </Button>
      </Link>
    </section>
  );
};

export default ProjectLinks;
