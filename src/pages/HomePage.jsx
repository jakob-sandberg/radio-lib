import styles from "../css/HomePage.module.css";
import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";
import { useHistory } from "react-router";

const HomePage = (props) => {
  const history = useHistory();
  const goToChannel = () => {
    history.push("/channelId");
  };
  const { channels }  = useContext(ChannelContext);


  const renderChannels = (props) => {
    return channels.map((channel) => (
      <div 
      onClick={goToChannel}
      className={styles.card}
      key={channel.id}>
      <p className={styles.title}>{channel.name}</p>
      <p className={styles.title}>{channel.tagline}</p>
      </div>
    ));
  };

  return  (
    <div className={styles.home}>
      <h1>Homepage</h1>
      <h2>Våra Kanaler</h2>
      {channels && renderChannels()}
    </div>
  );
};

export default HomePage;
