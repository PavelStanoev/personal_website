import styles from "./CardComp.module.css";
import { Card } from "@mantine/core";



const CardComp = (props) => {
  return (
    <Card
      key={props.layoutId}
      shadow="md"
      radius="lg"
      className={styles.card}
      p="md"
    >
      <props.icon className={styles.icon} stroke={2} color="#2c3e50" />
      <p className={styles.card_title}>
        <span className={styles.highlight2}>{props.title}</span>
      </p>
      <p className={styles.card_content}>{props.description}</p>
    </Card>
  );
};

export default CardComp;
