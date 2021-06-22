import ChangeInfo from "../components/ChangeInfo"
import styles from "../css/ProfilePage.module.css"
import { UserContext } from "../contexts/UserContextProvider";

import { useContext } from "react";


export default function ProfilePage() {


  const { user, whoami } = useContext(UserContext);
  return (
    <div>
      <h1>Hej {user.loggedInUser.userName}</h1>
    <div className={styles.container}>
     <div className={styles.changeInfo}><ChangeInfo />
     </div>
    </div>
    </div>
)}
   