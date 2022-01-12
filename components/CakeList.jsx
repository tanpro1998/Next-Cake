import styles from "../styles/CakeList.module.css";
import CakeCard from "./CakeCard";
const CakeList = ({cakeList}) => {
  const images = [
    { src: "/img/cake4.png", title: "Sweet Cake", price: "$15.00" },
    { src: "/img/cake5.png", title: "Wedding Cake", price: "$20.00" },
    { src: "/img/cake6.png", title: "Love Cake", price: "$10.00" },
    { src: "/img/cake7.png", title: "Heart Cake", price: "$18.00" },
    { src: "/img/cake8.png", title: "Holiday Cake", price: "$22.00" },
    { src: "/img/cake9.png", title: "Year Cake", price: "$30.00" },
    { src: "/img/cake10.png", title: "Trend Cake", price: "$20.00" },
    { src: "/img/cake11.png", title: "Friend Cake", price: "$22.00" },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST CAKE IN AREA</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        molestiae alias odio iste odit? Odio laudantium veniam necessitatibus
        saepe sed sequi culpa iure velit eos cumque veritatis consequatur error,
        ea a.
      </p>

      <div className={styles.wrapper}>
        {cakeList.map((cake) => (
          <CakeCard key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default CakeList;
