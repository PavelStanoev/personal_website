import TechCardComp from "./TechCardComp";
import { SimpleGrid, createStyles } from "@mantine/core";
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

const TechStack = () => {
  const { classes, cx } = useStyles();
  const front_end = [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "Vite",
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind",
    "npm",
    "Figma",
    "gRPC",
  ];

  const back_end = [
    "Python",
    "Node.js",
    "Flask",
    "PostgreSQL",
    "SQLite",
    "REST API",
    "Swagger",
    "Docker",
    "IBM Cloud",
    "OpenShift",
    "Spark",
    "Hadoop",
  ];

  const general = [
    "Bash",
    "Jira",
    "Git",
    "Anaconda",
    "Playwright",
    "Cucumber",
    "Photoshop",
    "LaTeX",
    "M. Office",
    "Unity",
    "Tableau",
  ];

  return (
    <div className={classes.wrapper}>
      <section>
        <h1 className={classes.title}>
          Tech <span className={classes.highlight}>Stack</span>
        </h1>
        <SimpleGrid
          cols={3}
          spacing={40}
          className={classes.aftertitle}
          breakpoints={[{ maxWidth: "xl", cols: 1 }]}
        >
          <TechCardComp
            title={"Front-end Development"}
            names={front_end}
            id="1"
          ></TechCardComp>
          <TechCardComp
            title={"Back-end Development"}
            names={back_end}
            id="2"
          ></TechCardComp>
          <TechCardComp title={"General"} names={general} id="3"></TechCardComp>
        </SimpleGrid>
      </section>
    </div>
  );
};

export default TechStack;
