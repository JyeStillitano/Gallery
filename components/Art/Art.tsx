import { Typography } from "@mui/material";
import { ArtProps } from "../../types/ArtProps";
import styles from "./Art.module.scss";

export default function Art(props: ArtProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={props.src} />
      </div>
      <div className={styles.textContainer}>
        <Typography variant="h4" className={styles.text}>
          {props.title}
        </Typography>
        <Typography variant="body1" className={styles.text}>
          {props.description}
        </Typography>
      </div>
    </div>
  );
}
