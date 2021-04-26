import styles from "../css/ChannelPage.module.css";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ChannelContext } from "../contexts/ChannelProvider"

const ChannelPage = (props) => {
    const location = useLocation();
    const { programs } = useContext(ChannelContext);

    useEffect(() => {
    }, [location]);


    const renderPrograms = (props) => {
      return  programs.map((program) => (
        <div 
        className={styles.program}
        key={program.id}>
          <p>{program.name}</p>
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
