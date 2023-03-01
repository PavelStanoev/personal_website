import {
  Card,
  Group,
  Text,
  Badge,
  Button,
  Tooltip,
  createStyles,
} from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import img1 from "../../assets/RecentProjects/portfolio.png";
import img2 from "../../assets/RecentProjects/discord.jpg";
import img3 from "../../assets/RecentProjects/irb.png";
import img4 from "../../assets/RecentProjects/working.jpg";
import img5 from "../../assets/RecentProjects/fail.jpg";
import img6 from "../../assets/RecentProjects/snake.jpg";
import { useMediaQuery } from "@mantine/hooks";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: "9em",
    [theme.fn.smallerThan("lg")]: {
      paddingTop: "5em",
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
      width: "12%",
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

  card: {
    borderRadius: "1.5em",

    boxShadow: `0 1px 1px rgba(0, 0, 0, 0.1),
       0 2px 2px rgba(0, 0, 0, 0.1),
       0 4px 4px rgba(0, 0, 0, 0.1), 
       0 8px 8px rgba(0, 0, 0, 0.1),
       0 16px 16px rgba(0, 0, 0, 0.1)`,
  },
  image: {
    objectFit: "object-fit",
    width: "100%",
    height: "25em",
    [`@media (max-width: 2000px)`]: {
      height: "23em",
    },
    [`@media (max-width: 1700px)`]: {
      height: "21em",
    },
    [`@media (max-width: 1400px)`]: {
      height: "19em",
    },
    [`@media (max-width: 1000px)`]: {
      height: "16em",
    },
    [`@media (max-width: 626px)`]: {
      height: "12em",
    },
  },
  section: {
    borderBottom: "1px solid rgb(183,183,183)",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1em",
  },
  card_title: {
    fontWeight: 700,
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    [`@media (max-width: 500px)`]: {
      fontSize: "0.95rem",
      lineHeight: "170%",
    },
    [`@media (max-width: 420px)`]: {
      fontSize: "0.9rem",
    },
  },
  card_badge_text: {
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "#2c5364",
    [`@media (max-width: 600px)`]: {
      fontSize: "0.75rem",
    },
    [`@media (max-width: 500px)`]: {
      fontSize: "0.6rem",
    },
    [`@media (max-width: 420px)`]: {
      fontSize: "0.55rem",
    },
  },
  card_des: {
    fontFamily: "Poppins",
    lineHeight: "170%",
    [`@media (max-width: 1000px)`]: {
      fontSize: "0.9rem",
    },
    [`@media (max-width: 420px)`]: {
      fontSize: "0.85rem",
    },
  },
  button: {
    [`@media (max-width: 420px)`]: {
      fontSize: "0.85rem",
    },
  },
}));

const Projects = () => {
  const { classes, cx } = useStyles();

  const big = useMediaQuery("(min-width: 2000px)");
  const mid_big = useMediaQuery("(min-width: 1700px)");
  const mid = useMediaQuery("(min-width: 1400px)");
  const small_mid = useMediaQuery("(min-width: 1000px)");
  const small = useMediaQuery("(min-width: 800px)");
  const extrasmall = useMediaQuery("(min-width: 626px)");
  const supersmall = useMediaQuery("(min-width: 420px)");

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title} align="center">
        <span className={classes.highlight}>Personal </span>Projects
      </h1>
      <section>
        <Swiper
          style={small_mid ?  {marginTop: "9em" } : {marginTop: "3em" }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={
            big
              ? 3
              : mid_big
              ? 2.6
              : mid
              ? 2.2
              : small_mid
              ? 1.9
              : small
              ? 1.6
              : extrasmall
              ? 1.3
              : 1.06
          }
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 500,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
        >
          <SwiperSlide>
            <Card className={classes.card}>
              <Card.Section>
                <img src={img1} alt={"me"} className={classes.image} />
              </Card.Section>
              <Card.Section className={classes.section} mt="lg">
                <Group position="apart">
                  <Text className={classes.card_title}>My portfolio site</Text>
                  <Badge
                    variant="gradient"
                    gradient={{ from: "#ffdde1", to: "#ee9ca7" }}
                    size={extrasmall ? "lg" : "xs"}
                  >
                    {supersmall ? (
                      <Text className={classes.card_badge_text}>Front-end</Text>
                    ) : (
                      <Text className={classes.card_badge_text}>FE</Text>
                    )}
                  </Badge>
                </Group>
                <Text className={classes.card_des}>
                  The very site you are looking at the moment. Build with React
                  and some Mantine.
                </Text>
              </Card.Section>
              <Group mt="xs">
                <Button
                  className={classes.button}
                  variant="gradient"
                  gradient={{ from: "#2c5364", to: "#203a43" }}
                  size="sm"
                  radius="lg"
                  style={{ flex: 1 }}
                >
                  <Text weight={500}>GitHub</Text>
                </Button>

                <Tooltip
                  color="pink"
                  label="You are already here, but sure click it !"
                >
                  <Button
                    className={classes.button}
                    variant="gradient"
                    gradient={{ from: "#2c5364", to: "#203a43" }}
                    size="sm"
                    radius="lg"
                    style={{ flex: 1 }}
                  >
                    <Text weight={500}>Live</Text>
                  </Button>
                </Tooltip>
              </Group>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.card}>
              <Card.Section>
                <img src={img2} alt={"me"} className={classes.image} />
              </Card.Section>
              <Card.Section className={classes.section} mt="lg">
                <Group position="apart">
                  <Text className={classes.card_title}>
                    My Portfolio as Discord clone
                  </Text>
                  <Badge
                    variant="gradient"
                    gradient={{ from: "#ffdde1", to: "#ee9ca7" }}
                    size={extrasmall ? "lg" : "sm"}
                  >
                    {supersmall ? (
                      <Text className={classes.card_badge_text}>Front-end</Text>
                    ) : (
                      <Text className={classes.card_badge_text}>FE</Text>
                    )}
                  </Badge>
                </Group>
                <Text className={classes.card_des}>
                  The content of this site but as a Discord clone. Build with
                  NextJs.
                </Text>
              </Card.Section>
              <Group mt="xs">
                <Tooltip color="pink" label="Coming soon">
                  <Button
                    className={classes.button}
                    variant="gradient"
                    gradient={{ from: "#2c5364", to: "#203a43" }}
                    size="sm"
                    radius="lg"
                    style={{ flex: 1 }}
                  >
                    <Text weight={500}>GitHub</Text>
                  </Button>
                </Tooltip>
                <Tooltip color="pink" label="Coming soon">
                  <Button
                    className={classes.button}
                    variant="gradient"
                    gradient={{ from: "#2c5364", to: "#203a43" }}
                    size="sm"
                    radius="lg"
                    style={{ flex: 1 }}
                  >
                    <Text weight={500}>Live</Text>
                  </Button>
                </Tooltip>
              </Group>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.card}>
              <Card.Section>
                <img src={img5} alt={"me"} className={classes.image} />
              </Card.Section>
              <Card.Section className={classes.section} mt="lg">
                <Group position="apart">
                  <Text className={classes.card_title}>
                    Classification on Heart Failure
                  </Text>
                  <Badge
                    variant="gradient"
                    gradient={{ from: "#ffdde1", to: "#ee9ca7" }}
                    size={extrasmall ? "lg" : "sm"}
                  >
                    <Text className={classes.card_badge_text}>ML </Text>
                  </Badge>
                </Group>
                <Text className={classes.card_des}>
                  Supervised models on heart failure. Build with Python,
                  includes data analysis and data preprocessing.
                </Text>
              </Card.Section>
              <Group mt="xs">
                <Button
                  component="a"
                  target="_blank"
                  href="https://github.com/PavelStanoev/Heart-Failure-Classification---Regression-and-SVM"
                  className={classes.button}
                  variant="gradient"
                  gradient={{ from: "#2c5364", to: "#203a43" }}
                  size="sm"
                  radius="lg"
                  style={{ flex: 1 }}
                >
                  <Text weight={500}>GitHub</Text>
                </Button>
              </Group>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.card}>
              <Card.Section>
                <img src={img3} alt={"me"} className={classes.image} />
              </Card.Section>
              <Card.Section className={classes.section} mt="lg">
                <Group position="apart">
                  <Text className={classes.card_title}>IRB toolkit</Text>
                  <div>
                    <Badge
                      variant="gradient"
                      gradient={{ from: "#ffdde1", to: "#ee9ca7" }}
                      size={extrasmall ? "lg" : "sm"}
                      ml={extrasmall ? "lg" : "sm"}
                    >
                    { supersmall? <Text className={classes.card_badge_text}>Front-end</Text> : <Text className={classes.card_badge_text}>FE</Text>}
                    </Badge>
                    <Badge
                      variant="gradient"
                      gradient={{ from: "#ffdde1", to: "#ee9ca7" }}
                      size={extrasmall ? "lg" : "sm"}
                      ml={extrasmall ? "lg" : "sm"}
                    >
                    { supersmall? <Text className={classes.card_badge_text}>Back-end</Text> : <Text className={classes.card_badge_text}>BE</Text>}
                    </Badge>
                  </div>
                </Group>
                <Group></Group>
                <Text className={classes.card_des}>
                  Front- and Back-end for validating IRB models. Build with
                  React, Docusaurus and Flask as Back-end.
                </Text>
              </Card.Section>
              <Group mt="xs">
                <Tooltip color="pink" label="Sorry, the code is private">
                  <Button
                    className={classes.button}
                    variant="gradient"
                    gradient={{ from: "#2c5364", to: "#203a43" }}
                    size="sm"
                    radius="lg"
                    style={{ flex: 1 }}
                  >
                    <Text weight={500}>GitHub</Text>
                  </Button>
                </Tooltip>
                <Tooltip
                  color="pink"
                  label="The application will is still under construction"
                >
                  <Button
                    className={classes.button}
                    variant="gradient"
                    gradient={{ from: "#2c5364", to: "#203a43" }}
                    size="sm"
                    radius="lg"
                    style={{ flex: 1 }}
                  >
                    <Text weight={500}>Live</Text>
                  </Button>
                </Tooltip>
              </Group>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.card}>
              <Card.Section>
                <img src={img4} alt={"me"} className={classes.image} />
              </Card.Section>
              <Card.Section className={classes.section} mt="lg">
                <Group position="apart">
                  <Text className={classes.card_title}>
                    ML on work absenteeism{" "}
                  </Text>
                  <Badge
                    variant="gradient"
                    gradient={{ from: "#ffdde1", to: "#ee9ca7" }}
                    size={extrasmall ? "lg" : "sm"}
                  >
                    <Text className={classes.card_badge_text}>ML </Text>
                  </Badge>
                </Group>
                <Text className={classes.card_des}>
                  Linear regression model on work absenteeism. Build with
                  Python, integrated MySQL and Tableau for visualization.
                </Text>
              </Card.Section>
              <Group mt="xs">
                <Button
                  component="a"
                  target="_blank"
                  href="https://github.com/PavelStanoev/Data-Science-Project-"
                  className={classes.button}
                  variant="gradient"
                  gradient={{ from: "#2c5364", to: "#203a43" }}
                  size="sm"
                  radius="lg"
                  style={{ flex: 1 }}
                >
                  <Text weight={500}>GitHub</Text>
                </Button>
              </Group>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.card}>
              <Card.Section>
                <img src={img6} alt={"me"} className={classes.image} />
              </Card.Section>
              <Card.Section className={classes.section} mt="lg">
                <Group position="apart">
                  <Text className={classes.card_title}>
                    Snake game with Pygame
                  </Text>
                  <Badge
                    variant="gradient"
                    gradient={{ from: "#ffdde1", to: "#ee9ca7" }}
                    size={extrasmall ? "lg" : "sm"}
                  >
                    { supersmall? <Text className={classes.card_badge_text}>Back-end</Text> : <Text className={classes.card_badge_text}>BE</Text>}
                  </Badge>
                </Group>
                <Text className={classes.card_des}>
                  Object-oriented classic snake action video game. Build with
                  Python's multimedia applications library Pygame.
                </Text>
              </Card.Section>
              <Group mt="xs">
                <Button
                  component="a"
                  target="_blank"
                  href="https://github.com/PavelStanoev/Snake-OOP"
                  className={classes.button}
                  variant="gradient"
                  gradient={{ from: "#2c5364", to: "#203a43" }}
                  size="sm"
                  radius="lg"
                  style={{ flex: 1 }}
                >
                  <Text weight={500}>GitHub</Text>
                </Button>
              </Group>
            </Card>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Projects;
