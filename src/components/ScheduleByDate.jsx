import { useEffect, useContext } from "react";

import { ChannelContext } from "../contexts/ChannelProvider";

const ScheduleByDate = (props) => {
  const { dateSchedules, getScheduleByDate, startDate } = useContext(ChannelContext);
  const channelId = props.channelId

  useEffect(() => {
    const formattedDate = startDate.toLocaleDateString("sv-SE");
    console.log(formattedDate);
  }, [startDate])

  useEffect(() => {
    getScheduleByDate(channelId, startDate);
    // eslint-disable-next-line
  }, [startDate]);

  let content = "";
  if (dateSchedules) {
    content = (
      <div className="datesched">
        {dateSchedules && dateSchedules.map((dateSched) => (
          <div className="card" key={dateSched.id}>
            <p>{dateSched.title}</p>
            <strong>{dateSched.starttimeutc}</strong>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h1>fromschedulbydate</h1>
      {content}
    </div>
  )
}

export default ScheduleByDate;