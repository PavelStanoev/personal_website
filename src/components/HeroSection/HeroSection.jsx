import styles from "./HeroSection.module.css";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <section className={styles.section}>
          <div className={styles.left_col}>
            <h2>
              Hi, my name is
              <br />
              <span className={styles.highlight}>Pavel Stanoev</span>
            </h2>
            <h1>
              I am a <br className={styles.newline}></br>
              <span className={styles.highlight}>
                <Typewriter
                  words={[
                    "Back-end Developer",
                    "Front-end Developer",
                    "Software Engineer",
                    "Data scientist",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </span>
            </h1>
            <p className={styles.subhead}>
              Interested in both Front- and Back-end, I have developed
              real passion in Machine Learning, Data Science and Web
              development!
            </p>
            <div className={styles.cta_button}>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/#"
                className={styles.primary_cta}
                onClick={(e) => {
                  let about = document.getElementById("contact");
                  e.preventDefault();
                  about &&
                    about.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  window.history.pushState("contact", "contact", "/contact");
                }}
              >
                <span>Contact me</span>
              </motion.a>
              <a
                href="/#"
                className={styles.secondory_cta}
                onClick={(e) => {
                  let about = document.getElementById("projects");
                  e.preventDefault();
                  about &&
                    about.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  window.history.pushState("projects", "projects", "/projects");
                }}
              >
                <span>Check out my projects</span>
                <svg viewBox="0 0 19 9" fill="none">
                  <path
                    d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.right_col}>
            <div className={styles.card1}>
              <div className={styles.cardhelper}></div>
            </div>
            <div className={styles.card2}>
              <div className={styles.cardhelper}></div>
            </div>
            <div className={styles.card3}>
              <div className={styles.cardhelper}></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
