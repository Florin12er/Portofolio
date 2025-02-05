type ProjectDescriptionProps = {
  description: string;
  t: (key: string) => string;
};

const ProjectDescription = ({ description, t }: ProjectDescriptionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">{t("projectDescription")}</h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </section>
  );
};

export default ProjectDescription;
