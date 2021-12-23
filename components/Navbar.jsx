import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>0964903991</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.listItems}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/product/:id" passHref>
            <li className={styles.listItem}>Products</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <div className={styles.logo}>FLASH</div>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/cart" passHref>
            <a>
              <Image src="/img/cart.png" alt="" width={32} height={32} />
              <div className={styles.counter}>4</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
