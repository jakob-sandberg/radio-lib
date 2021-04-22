import styles from "../css/HomePage.module.css";
import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";

const Schedule = () => {

  const { channelSchedule }  = useContext(ChannelContext);


  const renderChannelSchedule = (props) => {
    return channelSchedule.map((channelSchedule) => (
      <div 
      className={styles.card}
      key={channelSchedule.id}>
      <p className={styles.title}>{channelSchedule.title}</p>
      <p className={styles.tagline}>{channelSchedule.starttimeutc}</p>
      </div>
    ));
  };

  return  (
    <div className={styles.home}>
      <h1>Schedule</h1>
      {channelSchedule && renderChannelSchedule()}
    </div>
  );
};

export default Schedule;
