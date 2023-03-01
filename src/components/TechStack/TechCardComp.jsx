import styles from "./TechCardComp.module.css";
import { Card, SimpleGrid } from "@mantine/core";
import { BsPatchCheck } from "react-icons/bs";

const TechCardComp = (props) => {
  return (
    <Card shadow="md" radius="lg" className={styles.card} p="md">
      <h3 className={styles.card_title}>{props.title}</h3>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[
          { maxWidth: "1900", cols: 2 },
          { maxWidth: "xl", cols: 6 },
          { maxWidth: "1120", cols: 5 },
          { maxWidth: "992", cols: 4 },
          { maxWidth: "768", cols: 3 },
          { maxWidth: "465", cols: 2 },
        ]}
      >
        {props.names.map((element) => {
          return (
            <div key={element.toString()} className={styles.single_element}>
              <BsPatchCheck className={styles.icon}></BsPatchCheck>
              <div className={styles.type}>{element}</div>
            </div>
          );
        })}
      </SimpleGrid>
    </Card>
  );
};

export default TechCardComp;
