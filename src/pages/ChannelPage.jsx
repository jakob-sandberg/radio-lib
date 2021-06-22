import styles from "../css/ChannelPage.module.css";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider"
import { FavoritesContext } from "../contexts/FavoritesContext";
import { UserContext } from "../contexts/UserContextProvider";
import ChannelSchedule from "../components/ChannelSchedule";


const ChannelPage = ({ program, i }) => {
  const location = useLocation();
  const { programs, setActiveChannel } = useContext(ChannelContext);
  const { user } = useContext(UserContext);
  const [ showSchedule, setShowSchedule] = useState(true);

  const ChangeToSchedule = () => {
    setShowSchedule(!showSchedule)
  }


  useEffect(() => {
    setActiveChannel(location.state.channel.id);
  }, [location]);


  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const renderChannel = (props) => {
    return (
      <div className={styles.channelPage}>
        <div className={styles.container}>
          <h2>Välkommen till {location.state.channel.name}</h2>
          <p>{location.state.channel.tagline}</p>
          <p>Gilla denna kanalen</p>
        </div>
      </div>
    )
  };

  const renderPrograms = (props) => {
    return programs.map((program) => (
      <div
        className={styles.program}
        key={program.id}>

        <p>{program.name}</p>
        <div className={styles.desc}>
          <p>[info]</p>
          <p className={styles.hoverText}>{program.description}</p>
        </div>
        <p className={styles.link}
          onClick={() => openInNewTab(program.programurl)}
        >Lyssna nu</p>
        <p>Favoritmarkera detta program </p>

      </div>
    ));
  }


  return (
    <div className={styles.channelPage}>
      {renderChannel()}
      <p className={styles.schema} onClick={ChangeToSchedule}>{showSchedule ? "Visa schema för kanalen" : "Tillbaka till alla program"}</p>
      {showSchedule ? <p>{renderPrograms()}</p>: <ChannelSchedule />}

      

      <div>
     
      </div>
    </div>
  );
};

export default ChannelPage;
