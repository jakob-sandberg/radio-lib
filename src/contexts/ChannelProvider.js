import { createContext, useState, useEffect } from "react";

export const ChannelContext = createContext();

const ChannelContextProvider = (props) => {
  const [programCategories, setProgramCategories] = useState(null);
  const [channels, setChannels] = useState(null);
  const [ programs, setPrograms] = useState(null);

  useEffect(() => {
    getAllChannels();
    getAllProgramCategories();
    getProgramByChannelId();
  }, []);
  

  const getAllChannels = async () => {
    let channels = await fetch ("/api/v1/channels");
    channels = await channels.json();
    console.log("Channels", channels)
    setChannels(channels.channels);
  };

  const getAllProgramCategories = async () => {
    let programCategories = await fetch ("/api/v1/channels/programcategories")
    programCategories = await programCategories.json();
    console.log("Categories", programCategories);
    setProgramCategories(programCategories.programcategories)
  }

  const getProgramByChannelId = async () => {
    let programs = await fetch (`/api/v1/channels/programs/`);
    programs = await programs.json();
    console.log("programs: ", programs);
    setPrograms(programs.programs)
  }


const values = {
  channels,
  programCategories,
  programs
};

return (
  <ChannelContext.Provider value={values}>
    {props.children}
  </ChannelContext.Provider>
);
};


export default ChannelContextProvider;
