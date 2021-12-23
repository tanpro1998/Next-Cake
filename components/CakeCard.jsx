import Image from "next/image";
import styles from "../styles/CakeCard.module.css";
const CakeCard = ({image}) => {
  return (
    <div className={styles.container}>
      <Image src={image.src} alt="" width={500} height={500} />
      <h2 className={styles.title}>{image.title}</h2>
      <span className={styles.price}>{image.price}</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default CakeCard;
