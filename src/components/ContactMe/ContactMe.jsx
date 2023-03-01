import { useForm } from "@mantine/form";
import { useRef, useState } from "react";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  LoadingOverlay,
  Modal,
  createStyles,
} from "@mantine/core";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const useStyles = createStyles((theme) => ({
  wrapper: {
    maxWidth: "50%",
    margin: "0 auto",
    paddingTop: "9em",
    [`@media (max-width: 1900px)`]: {
      maxWidth: "60%",
    },
    [theme.fn.smallerThan("xl")]: {
      maxWidth: "70%",
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
  form: {
    marginTop: "3em",
    position: "relative",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1em",
  },
  send_button: {
    marginTop: "2em",
    fontFamily: "Special Elite",
    textDecoration: "none",
    backgroundImage: theme.fn.gradient({
      from: "#ffdde1",
      to: "#ee9ca7",
      deg: 45,
    }),
    color: "#2c5364",
    borderRadius: "0.6em",
    alignItems: "center",
    borderStyle: "none",
    fontSize: "1.4rem",
    padding: "0.7em 0.8em 0.5em 0.8em",
  },
}));

const Contact = () => {
  const { classes, cx } = useStyles();

  const reffrom = useRef();
  const [visible, setVisible] = useState(false);
  const [opened_success, setOpenedSuccess] = useState(false);
  const [opened_fail, setOpenedFail] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <div>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          Contact <span className={classes.highlight}>me</span>
        </h1>
        <form
          ref={reffrom}
          className={classes.form}
          onSubmit={form.onSubmit(() => {
            setVisible(true);

            emailjs
              .sendForm(
                import.meta.env.VITE_EMAIL_SERVICE,
                import.meta.env.VITE_EMAIL_TEMPLATE,
                reffrom.current,
                import.meta.env.VITE_APP_EMAIL_KEY
              )
              .then(
                (result) => {
                  setVisible(false);
                  setOpenedSuccess(true);
                  form.reset();
                },
                (error) => {
                  setVisible(false);
                  setOpenedFail(true);
                  form.reset();
                }
              );
          })}
        >
          <LoadingOverlay
            loaderProps={{ size: "xl", color: "pink" }}
            visible={visible}
            overlayBlur={2}
            overlayColor="#"
          />
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
              id="name"
              styles={{ label: { color: "white", fontWeight: 400 } }}
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              variant="filled"
              styles={{ label: { color: "white", fontWeight: 400 } }}
              id="email"
              {...form.getInputProps("email")}
            />
          </SimpleGrid>
          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
            id="subject"
            styles={{ label: { color: "white", fontWeight: 400 } }}
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            id="message"
            styles={{ label: { color: "white", fontWeight: 400 } }}
            {...form.getInputProps("message")}
          />
          <Group position="center" className={classes.loader}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              size="md"
              type="submit"
              className={classes.send_button}
            >
              Send message
            </motion.button>
          </Group>
          <Modal
            opened={opened_success}
            onClose={() => setOpenedSuccess(false)}
            centered
            title="Thank you for the message! I will get back at you as soon as possible"
          ></Modal>
          <Modal
            opened={opened_fail}
            onClose={() => setOpenedFail(false)}
            centered
            title="Something went wrong ! Please try again later or contact me via another platform"
          ></Modal>
        </form>
      </div>
    </div>
  );
};

export default Contact;
