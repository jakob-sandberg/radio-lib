import styles from "../css/ChannelPage.module.css";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider"
import { FavoritesContext } from "../contexts/FavoritesContext";
import { UserContext } from "../contexts/UserContextProvider";
import ChannelSchedule from "../components/ChannelSchedule";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import Programs from "../components/Programs";


const ChannelPage = (props) => {
  const location = useLocation();
  const { setActiveChannel } = useContext(ChannelContext);
  const { user } = useContext(UserContext);
  const [ showSchedule, setShowSchedule] = useState(true);
  const [favorite, setFavorite] = useState(false); 
  const { saveLikedChannel, deleteFavChannel  } = useContext(FavoritesContext);

  const ChangeToSchedule = () => {
    setShowSchedule(!showSchedule)
  }
  

  useEffect(() => {
    setActiveChannel(location.state.channel.id);
  }, [location]);

  const toggleChannelLike = (channelId) => {
    if (favorite) {
      setFavorite(!favorite);
      let favToSave = {
        channelId,
      };
      saveLikedChannel(favToSave);
    } else if (!favorite) {
      setFavorite(true);
      deleteFavChannel(channelId, user.userId)
    }
  };






  const renderChannel = (channelId) => {
   
    return (
      <div className={styles.channelPage}>
        <div className={styles.container}>
          <h2>Välkommen till {location.state.channel.name}</h2>
          <p>{location.state.channel.tagline}</p>
          <div onClick={() => toggleChannelLike(channelId)}
          className={styles.heartContainer}
        >
          {user ? (
            favorite ? (
            <span><AiFillHeart className={styles.heart} size={25}/></span>
            ) : (
            <span><AiOutlineHeart  className={styles.heart} size={25}/></span>
            )
          ) : (
            ""
          )}
        </div>
        </div>

        
      </div>
    )
  };

   

  return (
    <div className={styles.channelPage}>
      {renderChannel()}
      <p 
      className={styles.schema} 
      onClick={ChangeToSchedule}
      >
        {showSchedule ? "Visa schema för kanalen" : "Tillbaka till alla program"}</p>
      {showSchedule ? 
      <p><Programs /></p>: <ChannelSchedule channelId={location.state.channel.id} />}

      

      <div>
     
      </div>
    </div>
  );
};

export default ChannelPage;
