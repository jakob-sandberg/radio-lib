import styles from "../css/ChannelScheduleCard.module.css";

const ScheduleCard = ({ dateSched }) => {
  const { imageurltemplate, title, starttimeutc, description, id } = dateSched

  return (
    <div className={styles.card} key={id}>
      <img src={imageurltemplate} alt="schedule display" />
      <h3 className={styles.programName}>{title}</h3>
      <strong>{starttimeutc}</strong>
      <p>{description}</p>
    </div>
  );
};

export default ScheduleCard;
