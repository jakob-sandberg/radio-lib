import {React, useContext} from 'react';
import styles from "../css/ProfilePage.module.css"
import { UserContext } from '../contexts/UserContextProvider'
import { TiDelete } from 'react-icons/ti';


const ChangeInfo = () => {

  const { deleteUserById, user } = useContext(UserContext);

  const handleRemoveClick = (e, userId) => {
    e.stopPropagation();
    deleteUserById(userId);
    console.log("userId :", userId);
  };

  return (
    <div>
    <h3>Delete your profile</h3>
  
    <div className={styles.delete}>
      <TiDelete size={35} 
      onClick={(e) => handleRemoveClick(e, user.id)}/></div>
    </div>
  )
}

export default ChangeInfo;