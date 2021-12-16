import styles from "../css/Favorites.module.css";
import FavoriteChannels from "../components/FavoriteChannels";
import FavoritePrograms from "../components/FavoritePrograms";
import { useState } from "react";

const Favorites = (props) => {
  const [yes, setYes] = useState(false);

  const toggle = () => {
    setYes(!yes);
  };

  return (
    <div className={styles.favoriter}>
      <p className={styles.togglestyle} onClick={toggle}>
        {yes ? "Visa dina favorit Program" : "Visa dina favorit kanaler"}
      </p>
      {yes ? <FavoriteChannels /> : <FavoritePrograms />}
    </div>
  );
};

export default Favorites;
