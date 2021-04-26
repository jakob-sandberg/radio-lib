import styles from "../css/HomePage.module.css";
import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";
import { useHistory } from "react-router";

const HomePage = (props) => {
  const history = useHistory();
  const goToChannel = ( channel ) => {
    history.push({
      pathname: "/channel/" + channel.id,
      state: { channel }
      });
  };
  const { channels, programCategories }  = useContext(ChannelContext);
  
  const renderCategories = () => {
    return programCategories.map((category) => (
      <div 
      className={styles.card}
      key={category.id}>
      <p className={styles.title}>{category}</p>
      </div>
    )) 
  };

  const renderChannels = () => {
    return channels.map((channel) => (
      <div 
      onClick={() => goToChannel(channel)}
      className={styles.card}
      key={channel.id}>
      <p className={styles.title}>{channel.name}</p>
      </div>
    ));
  }; 

  return  (
    <div className={styles.home}>
      <h1>Homepage</h1>
      <h2>Våra Kanaler</h2>
      <p>Categories</p>
      {programCategories && renderCategories()}
      <p>Channels</p>
      {channels && renderChannels()}
      
    </div>
  );
};

export default HomePage;
