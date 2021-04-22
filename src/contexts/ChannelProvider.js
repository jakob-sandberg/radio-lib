import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
  const [channels, setChannels] = useState(null);
  const [ channelSchedule, setChannelSchedule ] = useState(null);
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    getAllChannels();
    getChannelSchedule();
  }, []);

  const getAllChannels = async () => {
    let channels = await fetch ("/api/v1/channels");
    channels = await channels.json();
    console.log("Channels", channels)
    setChannels(channels.channels);
  };

  const getChannelSchedule = async () => {
    let channelSchedule = await fetch ("/schedule/:channelId");
    channelSchedule = await channelSchedule.json();
    console.log("schedule", channelSchedule)
    setChannelSchedule(channelSchedule.schedule)
  }

  const getChannelById = async () => {
    let channel = await fetch ("/api/v1/channels/:channelId");
    channel = await channels.json();
    console.log("Channel", channel);
    setChannel(channels.channel)

  }




const values = {
  channels,
  channelSchedule,
  getChannelById

};
return (
  <ChannelContext.Provider value={values}>
    {props.children}
  </ChannelContext.Provider>
);
};


export default ChannelContextProvider;
