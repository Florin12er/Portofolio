import { motion } from "framer-motion";
import { Skill } from "@/data/technologies";
import { IconType } from "react-icons";
type ProjectTechnologiesProps = {
  projectTechnologies: Skill[];
};

const TechnologiesUsed = ({
  projectTechnologies,
}: ProjectTechnologiesProps) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {projectTechnologies.map((tech, index) => {
          const Icon: IconType = tech.icon; // Ensure Icon is defined here
          return (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
            >
              <Icon
                className={`text-4xl mb-2 mx-auto ${tech.color} transition-all duration-300`}
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default TechnologiesUsed;
