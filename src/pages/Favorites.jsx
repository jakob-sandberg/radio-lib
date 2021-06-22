import styles from "../css/Favorites.module.css";
import FavoriteChannels from "../components/FavoriteChannels"
import FavoritePrograms from "../components/FavoritePrograms";

const Favorites = (props) => {


  return  (
    <div className={styles.favoriter}>
      <div className={styles.favChannels}>
        <p>Favorit kanal</p>
        <FavoriteChannels />
      </div>
      <div className={styles.favPrograms}>
        <p>Favorit program</p>
        <FavoritePrograms />
      </div>
    </div>
  );
};

export default Favorites;
