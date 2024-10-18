import { useState } from "react";
import Image from "next/image";

interface EnlargeableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  isZoomed?: boolean;
}

const EnlargeableImage: React.FC<EnlargeableImageProps> = ({
  src,
  alt,
  width,
  height,
  isZoomed = true,
}) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleEnlarge = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <>
      <div className="inline-block">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onClick={toggleEnlarge}
          className={`cursor-zoom-in ${
            isZoomed ? "transition-transform hover:scale-105" : ""
          }`}
        />
      </div>
      {isEnlarged && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={toggleEnlarge}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <Image src={src} alt={alt} layout="fill" objectFit="contain" />
          </div>
        </div>
      )}
    </>
  );
};

export default EnlargeableImage;
