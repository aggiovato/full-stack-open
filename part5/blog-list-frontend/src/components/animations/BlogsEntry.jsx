import { motion } from "framer-motion";
import { BlogContainer } from "@styles/CBlog.styles";

const BlogsEntryContainer = motion.create(BlogContainer);

const BlogsEntry = ({ children, delay = 0.1, globalDelay = 0.5 }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: globalDelay,
        staggerChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { x: "-50vh", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <BlogsEntryContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </BlogsEntryContainer>
  );
};

export default BlogsEntry;
