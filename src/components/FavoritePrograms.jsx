import { useContext, useEffect, useState } from "react";
import styles from "../css/ChannelScheduleCard.module.css";
import { ChannelContext } from "../contexts/ChannelProvider";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { UserContext } from "../contexts/UserContextProvider";
import { BsTrash } from "react-icons/bs";

const FavoritePrograms = () => {
  const { activeUser } = useContext(UserContext);
  const { getUserFavProgram, userFavProgram, deleteFavProgram } =
    useContext(FavoritesContext);

  const { allPrograms } = useContext(ChannelContext);
  const [filteredFavPrograms, setFilteredFavPrograms] = useState(null);

  useEffect(() => {
    if (activeUser.loggedInUser) {
      getUserFavProgram(activeUser.loggedInUser.userId);
    }
    // eslint-disable-next-line
  }, [activeUser]);

  useEffect(() => {
    if (allPrograms && userFavProgram) {
      filterPrograms();
    }
    // eslint-disable-next-line
  }, [userFavProgram]);

  const filterPrograms = () => {
    const favProgramIds = userFavProgram.map((fp) => fp.programId);
    const filteredFavs = allPrograms.filter((program) =>
      favProgramIds.includes(program.id)
    );
    setFilteredFavPrograms(filteredFavs);
  };

  const deleteFromFavProgram = (programId) => {
    deleteFavProgram(programId, activeUser.loggedInUser.userId);
  };

  let favPrograms = "";
  if (filteredFavPrograms) {
    favPrograms = (
      <>
        <div className={styles.cardContainer}>
          {filteredFavPrograms.map((program, i) => (
            <div className={styles.card} key={i}>
              <img
                className={styles.image}
                src={program.programimagewide}
                alt="program snips"
              />
              <span>
                <BsTrash
                  className={styles.trash}
                  onClick={() => deleteFromFavProgram(program.id)}
                  size={25}
                />
              </span>
              <h3 className={styles.programName}>{program.name}</h3>
              <p>{program.description.slice(0, 70) + `...`}</p>
            </div>
          ))}
        </div>
      </>
    );
  }

  return <div className={styles.loggedinContainer}>{favPrograms}</div>;
};

export default FavoritePrograms;
