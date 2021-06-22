import {React, useContext, useState } from 'react';
import styles from "../css/ChannelPage.module.css";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';

import { FavoritesContext } from "../contexts/FavoritesContext";
import { UserContext } from "../contexts/UserContextProvider";
import { ChannelContext } from "../contexts/ChannelProvider"


const Programs = (program) => {

  const { user } = useContext(UserContext);
  const { saveLikedProgram, deleteFavProgram } = useContext(FavoritesContext);
  const [favorite, setFavorite] = useState(false); 
  const { programs } = useContext(ChannelContext);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const { id } = program;

    const handleProgramLike = (programId) => {
      // console.log(programId);
      if(!favorite){
        setFavorite(true); 
        let favToSave = {
          programId,
        };
        saveLikedProgram(favToSave);
      } else if (favorite) {
        setFavorite(!favorite); 
        deleteFavProgram(programId, user.userId)
      }
    };


  
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
         {user ? (
            favorite ? (
            <span><AiFillHeart onClick={() => handleProgramLike(id)}
             className={styles.heart} size={25}/></span>
            ) : (
            <span><AiOutlineHeart onClick={() => handleProgramLike(id)}
            className={styles.heart} size={25}/></span>
            )
          ) : (
            ""
          )}
      

      </div>
    ));
  }

export default Programs;