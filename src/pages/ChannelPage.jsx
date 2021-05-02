import styles from "../css/ChannelPage.module.css";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider"
import { UserContext } from "../contexts/UserContextProvider"
import { AiOutlineStar } from 'react-icons/ai';
//import { AiFillStar } from 'react-icons/ai';

const ChannelPage = (props) => {
    const location = useLocation();
    const { programs, setActiveChannel } = useContext(ChannelContext);
    const { addTofavorites } = useContext(UserContext);

    useEffect(() => {
      setActiveChannel(location.state.channel.id);
    }, [location]);

    const handleClick = (e) => {
      e.stopPropagation()
      addTofavorites(props.program)
    }

    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    const renderPrograms = (props) => {
      return  programs.map((program) => (
        <div 
        className={styles.program}
        key={program.id}>
          <p>{program.name}</p>
          <p className={styles.link}
          onClick={() => openInNewTab(program.programurl)}
          >Lyssna nu</p>
          <button className={styles.star} onClick={handleClick}>
          <AiOutlineStar onClick={() => addTofavorites(props.program)} />
            </button>
          
        </div>
      ));
      }
        
    const renderChannel = (props) => {
      return (
        <div className={styles.channelPage}>
          <div className={styles.container}>
          <h2>Välkommen till {location.state.channel.name}</h2>
          <p>{location.state.channel.tagline}</p>
          </div>
         </div> 
      )
    };

  return  (
    <div className={styles.channelPage}>
      {renderChannel()}
      <p>{renderPrograms()}</p>
    </div>
  );
};

export default ChannelPage;
