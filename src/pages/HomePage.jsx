import { Button } from "@/components/ui/button";
import profileImage from "../assets/pf.svg";
import React from "react";
import { FaArrowRightLong, FaDiscord, FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";
import { TbBrandPython, TbAi } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";

const HomePage = () => {
  const iconsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Time between each icon animating in
        delayChildren: 0.2, // Optional: delay before the first child starts
      },
    },
  };

  // Renamed for clarity, this will be for each individual icon
  const iconItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Shorter duration for icons
        ease: "easeOut",
      },
    },
  };

  // Variants for the container of the "About Me" paragraphs
  const aboutMeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each paragraph animating in
        delayChildren: 0.1, // Optional: delay before the first child starts
      },
    },
  };

  // Variants for each individual "About Me" paragraph
  const paragraphItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Variants for the container of the action buttons
  const buttonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Time between each button animating in
        delayChildren: 0.3, // Delay after personal info text, before buttons start
      },
    },
  };

  // Variants for each individual action button
  const buttonItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Variants for the profile image
  const profileImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9], // Corrected the third value from -0.01 to 0.01
        delay: 0.1, // Slight delay to let text start appearing
      },
    },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
          {/* Profile Image */}

          <motion.div
            className="relative flex justify-center md:order-2"
            variants={profileImageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Fixed-size wrapper */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              {/* Profile Image */}
              <div className="overflow-hidden rounded-full w-full h-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] z-10">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="h-full w-full bg-main-foreground rounded-full object-cover transform transition-all duration-500 ease-in-out scale-155"
                />
              </div>

              {/* Floating Icons */}
              <div className="absolute top-1 left-16 animate-float-fast z-20 text-main ">
                <SiGithub size={28} />
              </div>
              <motion.div
                className="absolute bottom-4 left-4 z-20"
                animate={{
                  rotate: [0, 360],
                  y: [0, -20, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              >
                <TbBrandPython size={28} />
              </motion.div>

              <div className="absolute bottom-8 right-2 animate-float z-20">
                <TbAi size={34} />
              </div>
            </div>
          </motion.div>

          {/* Personal Info */}
          <div className="flex flex-col items-center md:items-start md:order-1 space-y-4">
            {/* Wrap personal info text for potential staggered animation too if desired */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.h1
                variants={paragraphItemVariants}
                className="font-bold text-3xl sm:text-4xl text-center md:text-left"
              >
                Arbaz Ahmad
              </motion.h1>
              <motion.h2
                variants={paragraphItemVariants}
                className="font-bold text-lg sm:text-xl text-center md:text-left mt-4"
              >
                AI/ML Engineer
              </motion.h2>
              <motion.p
                variants={paragraphItemVariants}
                className="text-center md:text-left font-PublicSans max-w-md mt-4"
              >
                I am a Python Developer and AI/ML Engineer specializing in LLMs, 
                NLP, computer vision, and generative AI to build cutting-edge applications.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 w-full max-w-sm "
              variants={buttonsContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={buttonItemVariants} className="w-full">
                <Button
                  onClick={() =>
                    window.open("https://discord.com/users/weirdcountry", "_blank")
                  }
                  className="w-full"
                >
                  Contact Me <FaArrowRightLong className="ml-2" />
                </Button>
              </motion.div>
              <motion.div variants={buttonItemVariants} className="w-full">
                <Button
                  onClick={() =>
                    window.open("https://calendly.com/arbazahmad", "_blank")
                  }
                  className="w-full"
                >
                  Schedule a Meeting <FaArrowRightLong className="ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex flex-row gap-6 mt-3"
              variants={iconsContainerVariants}
              initial="hidden"
              animate="visible" // Trigger animation on load
            >
              <motion.a
                href="https://github.com/arbazw"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaGithub className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/arbaz-ahmad/"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaLinkedin className="h-6 w-6 transition-colors" />
              </motion.a>
              <motion.a
                href="https://discord.com/users/weirdcountry"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <FaDiscord className="h-6 w-6  transition-colors" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/4rbxz/"
                className="hover:transform hover:scale-110 transition-all"
                variants={iconItemVariants}
              >
                <PiInstagramLogoFill className="h-6 w-6  transition-colors" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="w-full px-4 mb-2 md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: +10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Optional delay for heading
            className="font-bold text-xl md:text-xl  mb-2"
          >
            About Me
          </motion.h2>
          <motion.div
            className="space-y-4 font-PublicSans text-gray-500 "
            variants={aboutMeContainerVariants}
            initial="hidden"
            animate="visible" // Or use whileInView="visible" and viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p variants={paragraphItemVariants} className="text-justify">
              Hi, I’m a Python Developer & AI/ML Engineer passionate about creating 
              intelligent solutions that bridge technology with real-world impact. 
              My core expertise lies in Artificial Intelligence, Machine Learning, 
              and Full-Stack Development, with a strong focus on Natural Language 
              Processing (NLP), Computer Vision, and Generative AI.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              {/* Currently, I'm focused on expanding my skills in web development,
              with particular interest in React and Node.js. Through my
              coursework and personal projects, I've gained experience in UI/UX
              design principles, responsive layouts, and modern JavaScript
              frameworks. I enjoy tackling complex problems and finding elegant
              solutions that prioritize user experience while maintaining code
              quality. */}
              I work extensively with modern AI frameworks like TensorFlow, 
              PyTorch, Hugging Face Transformers, and LangChain, building everything 
              from LLM-powered applications to AI-driven automation tools. 
              I’m particularly interested in multimodal AI systems, AI-powered 
              personalization engines, and applying AI in domains like finance, 
              healthcare, and cybersecurity to drive smarter decision-making.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              {/* When I'm not coding, you'll find me exploring new technologies, or
              expanding my knowledge through online courses. Beyond tech, I
              enjoy photography in my free time, playing video games, reading
              books, and occasionally traveling. I'm always looking for opportunities to
              collaborate on projects that can make a positive impact. */}
              As a developer, I combine Python, Django, Flask, and FastAPI 
              with databases (PostgreSQL, MongoDB, MySQL) and cloud technologies 
              (AWS, Serverless, Docker, CI/CD) to deliver scalable, production-ready 
              applications. I also enjoy building APIs, automation workflows, and 
              integrating LLMs into real-world products that simplify tasks and unlock creativity.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              {/* When I'm not coding, you'll find me exploring new technologies, or
              expanding my knowledge through online courses. Beyond tech, I
              enjoy photography in my free time, playing video games, reading
              books, and occasionally traveling. I'm always looking for opportunities to
              collaborate on projects that can make a positive impact. */}
              Beyond development, I’m fascinated by the future of Generative AI, 
              Large Language Models, and Ethical AI — ensuring technology grows 
              responsibly while solving high-impact problems. I’m also keeping a 
              close eye on how AI transforms industries like finance, cybersecurity, 
              and education, and love contributing to projects at this intersection.
            </motion.p>
            <motion.p variants={paragraphItemVariants} className="text-justify">
              {/* When I'm not coding, you'll find me exploring new technologies, or
              expanding my knowledge through online courses. Beyond tech, I
              enjoy photography in my free time, playing video games, reading
              books, and occasionally traveling. I'm always looking for opportunities to
              collaborate on projects that can make a positive impact. */}
              If you’re looking for someone who can design, train, and deploy
              AI-powered applications with precision and creativity, let’s 
              connect. I’m always excited to collaborate on projects where 
              cutting-edge AI meets real-world value.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;