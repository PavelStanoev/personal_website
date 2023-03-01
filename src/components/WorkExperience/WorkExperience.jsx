import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Text, createStyles } from "@mantine/core";
import { BsBriefcase } from "react-icons/bs";
import { RxBackpack } from "react-icons/rx";

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
      width: "10%",
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
  highlight_job: {
    borderRadius: "0.5em",
    padding: "0.15em 0em 0em 0.2em",
    color: "white",
    marginLeft: "-0.3em",
    fontSize: "1.7rem",
    fontFamily: "Special Elite",
    backgroundImage: theme.fn.gradient({
      from: "#2c5364",
      to: "#203a43",
      deg: 45,
    }),
    [`@media (max-width: 1900px)`]: {
      fontSize: "1.55rem",
    },
    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.3rem",
    },
  },
  firm: {
    fontSize: "1.5rem",
    paddingTop: "0.2em",
    fontFamily: "Poppins",
    [`@media (max-width: 1900px)`]: {
      fontSize: "1.3rem",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "1.15rem",
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: "1.05rem",
    },
  },
  rest: {
    fontSize: "1.1rem",
    lineHeight: "170%",
    fontFamily: "Poppins",
    [`@media (max-width: 1900px)`]: {
      fontSize: "1rem",
    },
    [theme.fn.smallerThan("md")]: {
      fontSize: "0.85rem",
    },
    [theme.fn.smallerThan("xs")]: {
      fontSize: "0.80rem",
    },
  },
}));

const WorkExperience = () => {
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title} align="center">
          Work <span className={classes.highlight}>Experience</span>
        </h1>

        <VerticalTimeline lineColor={"#f5c8ce"}>
          <VerticalTimelineElement
            contentStyle={{
              background: "#f5c8ce",
              color: "black",
              borderRadius: "1.55em",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #f5c8ce" }}
            iconClassName={classes.icon}
            iconStyle={{
              background: "#f5c8ce",
              color: "#2c5364",
            }}
            icon={<BsBriefcase />}
          >
            <Text className={classes.highlight_job}>Back-end develper</Text>
            <Text className={classes.firm}>IBM</Text>
            <Text className={classes.rest}>Sofia, Bularia</Text>
            <Text className={classes.rest}>03/2022 - Present</Text>
            <Text className={classes.rest}>
              - Backend work for the IBM's Support Insights<br></br>- Building
              RESTful APIs and complex queries with PostgreSQL<br></br>- Working
              with the data squad to manage and further develop multiple
              databases in support of different cloud environments <br></br>-
              Working closely with product owners and frontend developers to
              ensure successful completion of design specs.
            </Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#f5c8ce",
              color: "black",
              borderRadius: "1.55em",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #f5c8ce" }}
            iconStyle={{
              background: "#f5c8ce",
              color: "#2c5364",
            }}
            icon={<BsBriefcase />}
          >
            <Text className={classes.highlight_job}>Software Engineer</Text>
            <Text className={classes.firm}>Hyperscience</Text>
            <Text className={classes.rest}>Sofia, Bularia</Text>
            <Text className={classes.rest}>02/2022 - 03/2022</Text>
            <Text className={classes.rest}>
              - Creating custom code blocks for flows designed for specific
              needs of clients or further improvments of the Hyperscience
              platform
              <br></br>- Extensive knowledge of HS's ML and DL models
            </Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#f5c8ce",
              color: "black",
              borderRadius: "1.55em",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #f5c8ce" }}
            iconStyle={{
              background: "#f5c8ce",
              color: "#2c5364",
            }}
            icon={<BsBriefcase />}
          >
            <Text className={classes.highlight_job}>Software Engineer</Text>
            <Text className={classes.firm}>KBC Group</Text>
            <Text className={classes.rest}>Sofia, Bularia</Text>
            <Text className={classes.rest}>06/2020 - 02/2022</Text>
            <Text className={classes.rest}>
              - Big role in the decision making and the building of software in
              credit risk<br></br>- Designing and building new functionalities
              for automating the validation of IRB models <br></br>- Data
              preparation and SQL integration
            </Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#f5c8ce",
              color: "black",
              borderRadius: "1.55em",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #f5c8ce" }}
            iconStyle={{
              background: "#f5c8ce",
              color: "#2c5364",
            }}
            icon={<RxBackpack />}
          >
            <Text className={classes.highlight_job}>
              Bachelor of Computer Science
            </Text>
            <Text className={classes.firm}>New Bulgarian University</Text>
            <Text className={classes.rest}>Sofia, Bularia</Text>
            <Text className={classes.rest}>03/2020 - Present</Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#f5c8ce",
              color: "black",
              borderRadius: "1.55em",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #f5c8ce" }}
            iconStyle={{
              background: "#f5c8ce",
              color: "#2c5364",
            }}
            icon={<RxBackpack />}
          >
            <Text className={classes.highlight_job}>
              Bachelor of Computer Science
            </Text>
            <Text className={classes.firm}>Technische Universität Berlin</Text>
            <Text className={classes.rest}>Berlin, Germany</Text>
            <Text className={classes.rest}>09/2016 - 03/2020</Text>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{
              background: "#f5c8ce",
              color: "black",
              borderRadius: "1.55em",
            }}
            contentArrowStyle={{ borderRight: "10px solid  #f5c8ce" }}
            iconStyle={{
              background: "#f5c8ce",
              color: "#2c5364",
            }}
            icon={<RxBackpack />}
          >
            <Text className={classes.highlight_job}>High School Diploma </Text>
            <Text className={classes.firm}>
              91. German Language High School “Prof. Konstantin Gulabov"
            </Text>
            <Text className={classes.rest}>Sofia, Bularia</Text>
            <Text className={classes.rest}>09/2011 - 05/2016</Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExperience;
