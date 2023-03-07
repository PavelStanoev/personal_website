import CardComp from "./CardComp";
import { SimpleGrid, createStyles } from "@mantine/core";

import { AiOutlineCode, AiOutlineBank, AiOutlineRobot } from "react-icons/ai";

const useStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: "69%",
    margin: "0 auto",
    paddingTop: "9em",
    [`@media (max-width: 1900px)`]: {
      maxWidth: "80%",
    },
    [theme.fn.smallerThan("xl")]: {
      maxWidth: "85%",
    },
    [theme.fn.smallerThan("lg")]: {
      maxWidth: "80%",
      paddingTop: "5em",
    },
    [theme.fn.smallerThan("md")]: {
      maxWidth: "85%",
    },
    [theme.fn.smallerThan("xs")]: {
      maxWidth: "90%",
    },
  },

  title: {
    fontSize: "3rem",
    color: "white",
    fontWeight: 400,
    fontFamily: "Special Elite",
    position: "relative",
    textAlign: "center",
    lineHeight: "170%",
    [`@media (max-width: 1900px)`]: {
      fontSize: "2.4rem",
    },
    [theme.fn.smallerThan("lg")]: {
      fontSize: "2.2rem",
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.75rem",
    },

    "&:before": {
      position: "absolute",
      content: "''",
      width: "20%",
      height: "1px",
      background: theme.colors.pink[2],
      backgroundImage: theme.fn.gradient({
        from: "#ffdde1",
        to: "#ee9ca7",
        deg: 45,
      }),
      bottom: "-10px",
    },
  },
  highlight: {
    borderRadius: "0.3em",
    padding: "0.15em 0.2em 0em 0.2em",
    background: theme.colors.pink[2],
    backgroundImage: theme.fn.gradient({
      from: "#ffdde1",
      to: "#ee9ca7",
      deg: 45,
    }),
    color: "#2c5364",
  },
  aftertitle: {
    marginTop: "8em",
    [theme.fn.smallerThan("xl")]: {
      marginTop: "5em",
    },
    [theme.fn.smallerThan("md")]: {
      marginTop: "3em",
    },
  },
}));

const About = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <section>
        <h1 className={classes.title}>
          Here are <span className={classes.highlight}>some</span> of the things
          I do!
        </h1>
        <SimpleGrid
          cols={3}
          spacing={40}
          className={classes.aftertitle}
          breakpoints={[{ maxWidth: "xl", cols: 1 }]}
        >
          <CardComp
            title="Full stack development"
            icon={AiOutlineCode}
            description="Specialising in automation, I have vast knowledge of back-end architecture and its core functionalities. Lately, I have spent my time developing front-end applications and websites, enhanciong both my tech stack and design competence."
          ></CardComp>
          <CardComp
            title="Machine Learning"
            icon={AiOutlineRobot}
            description="Building predictive models using TensorFlow, PyTorch and Apache Spark as well as developing statistical functions to test model performance in the banking sector."
          ></CardComp>
          <CardComp
            title="Credit Risk Validation"
            icon={AiOutlineBank}
            description="Validation of internally rated models in accordance with European Central Bank regulations. I have a good understanding of the EBA guidelines and the ECB specific tests that I have previously automated."
          ></CardComp>
        </SimpleGrid>
      </section>
    </div>
  );
};

export default About;
