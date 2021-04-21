import styles from "../css/HomePage.module.css";
import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";

const HomePage = () => {

  const channels   = useContext(ChannelContext);


  const renderChannels = () => {
    return channels.map((channel) => (
      <div className={styles.card}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus nemo velit ducimus quo culpa soluta quisquam, eveniet ab cum fuga eaque pariatur eius amet explicabo? Expedita nulla sunt nam!</p>
      <p className={styles.title}>{channel.name}</p>
      </div>
    ));
  };

  return  (
    <div className={styles.home}>
      <h1>Homepage</h1>
      {channels && renderChannels()}
    </div>
  );
};

export default HomePage;
  