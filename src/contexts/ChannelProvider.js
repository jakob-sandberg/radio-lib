import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
  const [channels, setChannels] = useState(null);

  useEffect(() => {
    getAllChannels();
  }, []);

  const getAllChannels = async () => {
    let channels = await ("/api/v1/channels");
    channels = await channels.json();
    setChannels(channels);
    console.log(channels)
  }

const values = {
  channels
};
return (
  <ChannelContext.Provider value={values}>
    {props.children}
  </ChannelContext.Provider>
);
};


export default ChannelContextProvider;
