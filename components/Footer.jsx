import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.leftTitle}>
            OH YES, WE DID.THE FLASH CAKE, WELL BAKED SLICE OF CAKE.
          </h2>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>FIND OUR RESTAURANTS</h2>
          <p className={styles.address}>
            124 3/2 Road.
            <br />
            Ho Chi Minh City 700000
            <br />
            12345
          </p>
          <p className={styles.address}>
            125 Mguyen Trai Street
            <br />
            Ho Chi Minh City 700000
            <br />
            12346
          </p>
          <p className={styles.address}>
            125 Pham Hung Street
            <br />
            Ho Chi Minh City 700000
            <br />
            12347
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>WORKING HOURS</h2>
          <p className={styles.hour}>
            MONDAY UNTIL FRIDAY
            <br />
            9.00-22.00
          </p>
          <p className={styles.hour}>
            SATURDAY-SUNDAY
            <br />
            12.00-24.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
