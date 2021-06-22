import styles from "../css/Favorites.module.css";
const Favorites = (props) => {


  return  (
    <div className={styles.favoriter}>
      <div className={styles.favChannels}>
        <p>Favorit kanal</p>
      </div>
      <div className={styles.favPrograms}>
        <p>Favorit program</p>
      </div>
    </div>
  );
};

export default Favorites;
