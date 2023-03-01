import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import { createStyles } from "@mantine/core";
import About from "./components/About/About";
import { motion } from "framer-motion";
import Projects from "./components/RecentProjects/Project";
import TechStack from "./components/TechStack/TechStack";
import Contact from "./components/ContactMe/ContactMe";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: "#ffdde1",
    width: "40%",
    marginTop: "9em",
  },
}));

function App() {
  const { classes, cx } = useStyles();

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <div id="navbar">
        <Navbar></Navbar>
      </div>
      <div id="about">
        <HeroSection></HeroSection>
      </div>
      <hr className={classes.line}></hr>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.7, bounce: 0.55 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="work"
      >
        <About></About>
      </motion.div>
      <hr className={classes.line}></hr>
      <div id="experience">
        <WorkExperience></WorkExperience>
      </div>
      <hr className={classes.line}></hr>

      <div id="projects">
        <Projects></Projects>
      </div>
      <hr className={classes.line}></hr>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.7, bounce: 0.55 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        id="techstack"
      >
        <TechStack></TechStack>
      </motion.div>

      <hr className={classes.line}></hr>
      <div id="contact">
        <Contact></Contact>
      </div>
      <hr className={classes.line}></hr>
    </>
  );
}

export default App;
