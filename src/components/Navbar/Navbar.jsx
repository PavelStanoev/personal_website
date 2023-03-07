import { createStyles, Burger, Paper, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = [
  {
    link: "/about",
    label: "About me",
    id: "navbar",
  },
  {
    link: "/work",
    label: "What I do",
    id: "work",
  },
  {
    link: "/experience",
    label: "Work experience",
    id: "experience",
  },
  {
    link: "/projects",
    label: "Projects",
    id: "projects",
  },
  {
    link: "/techstack",
    label: "Tech Stack",
    id: "techstack",
  },
  {
    link: "/contact",
    label: "Contact me",
    id: "contact",
  },
];
const useStyles = createStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2vh",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  ul: {
    listStyleType: "none",
    display: "flex",
    margin: 0,
  },

  a: {
    textDecoration: "none",
    color: theme.white,
    textTransform: "uppercase",
    fontSize: "1.3rem",
    position: "relative",
    marginRight: "3.9rem",
    "&:before": {
      position: "absolute",
      content: "''",
      width: "0%",
      height: "1px",
      background: theme.colors.pink[2],
      backgroundImage: theme.fn.gradient({
        from: "#ffdde1",
        to: "#ee9ca7",
        deg: 45,
      }),
      bottom: "-5px",
      transition: "width .3s",
    },
    "&:hover": {
      "&:before": {
        position: "absolute",
        content: "''",
        width: "35%",
        height: "1px",
        background: theme.colors.pink[2],
        backgroundImage: theme.fn.gradient({
          from: "#ffdde1",
          to: "#ee9ca7",
          deg: 45,
        }),
        bottom: "-5px",
      },
    },
    [theme.fn.smallerThan("xl")]: {
      fontSize: "1.15rem",
      marginRight: "3.3rem",
    },
    [theme.fn.smallerThan("lg")]: {
      fontSize: "1rem",
      marginRight: "3rem",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "0.9rem",
      marginRight: "1.5rem",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "block",
      margin: "10px",
      color: theme.black,
      "&:before": {
        width: "0%",
        height: "1px",
        bottom: "1px",
        backgroundImage: theme.fn.gradient({
          from: "#2c5364",
          to: "#203a43",
          deg: 45,
        }),
      },
      "&:hover": {
        "&:before": {
          width: "8%",
          height: "1.5px",
          bottom: "1px",
          backgroundImage: theme.fn.gradient({
            from: "#2c5364",
            to: "#203a43",
            deg: 45,
          }),
        },
      },
    },
  },

  active: {
    textDecoration: "none",
    color: theme.white,
    textTransform: "uppercase",
    fontSize: "1.3rem",
    position: "relative",
    marginRight: "4.3rem",
    "&:before": {
      position: "absolute",
      content: "''",
      width: "35%",
      height: "1px",
      background: theme.colors.pink[2],
      backgroundImage: theme.fn.gradient({
        from: "#ffdde1",
        to: "#ee9ca7",
        deg: 45,
      }),
      bottom: "-5px",
    },
    [theme.fn.smallerThan("xl")]: {
      fontSize: "1.15rem",
      marginRight: "3.3rem",
    },
    [theme.fn.smallerThan("lg")]: {
      fontSize: "1rem",
      marginRight: "3rem",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "0.9rem",
      marginRight: "1.5rem",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "block",
      margin: "10px",
      color: theme.black,
      "&:before": {
        width: "8%",
        height: "1.5px",
        bottom: "1px",
        backgroundImage: theme.fn.gradient({
          from: "#2c5364",
          to: "#203a43",
          deg: 45,
        }),
      },
    },
  },
  dropdown: {
    position: "absolute",
    left: 0,
    right: 0,
    marginRight: "5em",
    marginLeft: "1em",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: "hidden",
    marginTop: "0.5em",
    background: "#ffdde1",
    zIndex: 99,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  burger: {
    paddingTop: "5vh",
    paddingLeft: "2.5vh",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  line: {
    marginTop: "1.5vh",
    borderColor: "#ffdde1",
    width: "40%",
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

function Navbar() {
  const { classes, cx } = useStyles();
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      className={link.id === "navbar" ? classes.active : classes.a}
      key={link.id}
      href="/"
      onClick={(e) => {
        let hero = document.getElementById(link.id);
        e.preventDefault();
        hero &&
          hero.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        window.history.pushState(link.id, link.id, link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <li>{items}</li>
        </ul>
      </nav>
      <Burger
        color="white"
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
      />

      <Transition transition="pop-top-right" duration={300} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} style={styles}>
            {items}
          </Paper>
        )}
      </Transition>
      <hr className={classes.line}></hr>
    </header>
  );
}

export default Navbar;
