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

  const goToCategory = (category) => {
    history.push({
      pathname: "/category/" + category.id,
      state: { category }
    })

  }
  const { channels, programCategories }  = useContext(ChannelContext);
  
  const renderCategories = () => {
    return programCategories.map((category) => (
      <div 
      className={styles.CategoryCard}
      onClick={() => goToCategory(category)}
      key={category.id}>
      <p className={styles.categoryTitle}>{category.name}</p>
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
      <div className={styles.categoryContainer}>
      <h2>Våra Kategorier</h2>
      {programCategories && renderCategories()}
      </div>
      <h2>Alla Kanaler</h2>
      {channels && renderChannels()}
      
    </div>
  );
};

export default HomePage;

