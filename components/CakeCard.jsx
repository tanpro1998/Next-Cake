import Image from "next/image";
import styles from "../styles/CakeCard.module.css";
import Link from "next/link";
const CakeCard = ({ cake }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${cake._id}`} passHref>
        <Image src={cake.image} alt="" width={500} height={500} objectFit="cover" />
      </Link>
      <h2 className={styles.title}>{cake.title}</h2>
      <span className={styles.price}>{cake.prices[0]}</span>
      <p className={styles.desc}>{cake.desc}.</p>
    </div>
  );
};

export default CakeCard;
