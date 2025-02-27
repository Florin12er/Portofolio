type ProjectDescriptionProps = {
  description: string;
  t: (key: string) => string;
};
const ProjectDescription = ({ description, t }: ProjectDescriptionProps) => {
    const paragraphs = description.split(/\n\n+/).map((para, index) => (
        <p key={index} className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed p-4">
            {para}
        </p>
    ));

    return (
        <section className="mb-8">
            <h2 className="text-3xl font-semibold mb-4">{t("projectDescription")}</h2>
            {paragraphs}
        </section>
    );
};
export default ProjectDescription;