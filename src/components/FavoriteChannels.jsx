import { useContext, useEffect, useState } from "react";
import styles from "../css/FavChannel.module.css";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { UserContext } from "../contexts/UserContextProvider";

import { BsTrash } from "react-icons/bs";

import { ChannelContext } from "../contexts/ChannelProvider";
const FavoriteChannels = () => {
  const { activeUser } = useContext(UserContext);

  const [filteredFavChannels, setFilteredFavChannels] = useState(null);
  const { getUserFavChannel, userFavChannel, deleteFavChannel } =
    useContext(FavoritesContext);

  const { getAllChannels, channels } = useContext(ChannelContext);

  useEffect(() => {
    if (activeUser.loggedInUser) {
      getUserFavChannel(activeUser.loggedInUser.userId);
    }
    // eslint-disable-next-line
  }, [activeUser]);

  useEffect(() => {
    getAllChannels();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (channels && userFavChannel) {
      filterChannels();
    }
    // eslint-disable-next-line
  }, [userFavChannel]);

  const filterChannels = () => {
    const favChannelIds = userFavChannel.map((fc) => fc.channelId);
    const filteredFavs = channels.filter((channel) =>
      favChannelIds.includes(channel.id)
    );
    // console.log(filteredFavs);
    setFilteredFavChannels(filteredFavs);
  };

  const deleteFromFavChannel = (channelId) => {
    deleteFavChannel(channelId, activeUser.loggedInUser.userId);
  };

  let favChannels = "";
  if (filteredFavChannels) {
    favChannels = (
      <div className={styles.cardContainer}>
        {channels &&
          filteredFavChannels.map((channel, i) => (
            <div className={styles.card} key={i}>
              <div>
                <img
                  src={channel.image}
                  alt="channel logo"
                  width="75"
                  height="100"
                />

                <h3>{channel.name}</h3>
                <span>
                  <BsTrash
                    className={styles.trash}
                    onClick={() => deleteFromFavChannel(channel.id)}
                    size={25}
                  />
                </span>
                <p>{channel.tagline.slice(0, 120) + `...`}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }

  return <div className={styles.card}>{favChannels}</div>;
};

export default FavoriteChannels;
