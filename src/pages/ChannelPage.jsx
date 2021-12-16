import styles from "../css/ChannelPage.module.css";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { UserContext } from "../contexts/UserContextProvider";
import ChannelSchedule from "../components/ChannelSchedule";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Programs from "../components/Programs";

const ChannelPage = (props) => {
  const location = useLocation();

  const channel = location.state.channel;

  const { setActiveChannel } = useContext(ChannelContext);
  const { activeUser } = useContext(UserContext);
  const [showSchedule, setShowSchedule] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const { saveLikedChannel, deleteFavChannel } = useContext(FavoritesContext);

  const ChangeToSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  useEffect(() => {
    setActiveChannel(location.state.channel.id);
  }, [location]);

  const handleChannelLike = (channelId, userId) => {
    if (favorite) {
      setFavorite(false);
      deleteFavChannel(channelId, activeUser.loggedInUser.userId);
    } else if (!favorite) {
      setFavorite(true);
      let favToSave = {
        channelId,
        userId,
      };
      saveLikedChannel(favToSave);
    }
  };

  const renderChannel = (channelId) => {
    return (
      <div className={styles.channelPage}>
        <div className={styles.container}>
          <h2>Välkommen till {location.state.channel.name}</h2>
          <p>{location.state.channel.tagline}</p>
          <div className={styles.heartContainer}>
            {activeUser ? (
              favorite ? (
                <span>
                  <AiFillHeart
                    onClick={() =>
                      handleChannelLike(
                        location.state.channel.id,
                        activeUser.loggedInUser.userId
                      )
                    }
                    className={styles.heart}
                    size={25}
                  />
                </span>
              ) : (
                <span>
                  <AiOutlineHeart
                    onClick={() =>
                      handleChannelLike(
                        location.state.channel.id,
                        activeUser.loggedInUser.userId
                      )
                    }
                    className={styles.heart}
                    size={25}
                  />
                </span>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.channelPage}>
      {renderChannel()}
      <p className={styles.schema} onClick={ChangeToSchedule}>
        {showSchedule
          ? "Visa schema för kanalen"
          : "Tillbaka till alla program"}
      </p>
      {showSchedule ? (
        <p>
          <Programs />
        </p>
      ) : (
        <ChannelSchedule channelId={location.state.channel.id} />
      )}

      <div></div>
    </div>
  );
};

export default ChannelPage;
