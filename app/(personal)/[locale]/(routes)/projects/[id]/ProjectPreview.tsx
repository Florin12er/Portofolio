import { Switch } from "@/components/ui/switch";
import { FaLock } from "react-icons/fa";
import EnlargeableImage from "@/components/ZoomebleImage";

type ProjectPreviewProps = {
  previewType: "image" | "live";
  setPreviewType: (type: "image" | "live") => void;
  projectImageUrl: string;
  livePreviewUrl?: string;
  projectName: string;
  isMobile: boolean;
  t: (key: string) => string;
};

const ProjectPreview = ({
  previewType,
  setPreviewType,
  projectImageUrl,
  livePreviewUrl,
  projectName,
  isMobile,
  t,
}: ProjectPreviewProps) => {
  return (
    <div>
      <div className="flex items-center justify-center space-x-2 mb-4">
        <Switch
          checked={previewType === "live"}
          onCheckedChange={(checked) =>
            setPreviewType(checked ? "live" : "image")
          }
        />
        <span className="text-sm font-medium">
          {previewType === "live" ? t("livePreview") : t("imagePreview")}
        </span>
      </div>

      <div
        className="mb-8 relative overflow-hidden shadow-lg mx-auto"
        style={{
          height: isMobile ? "400px" : "670px",
          maxWidth: "1200px",
        }}
      >
        {previewType === "image" && !isMobile ? (
          <EnlargeableImage
            src={projectImageUrl}
            width={1200}
            height={670}
            isZoomed={false}
            alt={t("projectScreenshot")}
          />
        ) : livePreviewUrl ? (
          <iframe
            src={livePreviewUrl}
            className="w-full h-full border-0"
            title={t("livePreviewTitle")}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="text-center">
              <FaLock className="mx-auto text-4xl mb-4 text-gray-400" />
              <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
                {t("livePreviewNotAvailable")}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {t("livePreviewNotAvailableDescription")}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
