import ProjectCard from "@/components/ui/ProjectCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchProjects } from "@/redux/projectSlice";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const { items: projects, loading: pageLoading, error } = useSelector(
    (state) => state.projects
  );

  // ✅ Fetch only once when the page first mounts
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 min-h-[calc(100vh-200px)] flex flex-col justify-start">
      {!pageLoading && (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl mb-6 text-center md:text-start"
        >
          My Projects
        </motion.h1>
      )}

      {error && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6"
          role="alert"
        >
          <p>Failed to load projects: {error}</p>
        </div>
      )}

      {/* Always render the grid structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pageLoading ? (
          // ✅ You can place skeletons here if needed
          <p className="col-span-full text-center text-gray-500">
            Loading projects...
          </p>
        ) : projects.length > 0 ? (
          <motion.div
            className="contents"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard projectData={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="md:col-span-2 lg:col-span-3 text-center py-10 flex-grow flex items-center justify-center">
            <p className="text-gray-500">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
