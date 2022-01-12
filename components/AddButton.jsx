import styles from "../styles/AddButton.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.container} onClick={() => setClose(false)}>
      Add New Cake
    </div>
  );
};

export default AddButton;
