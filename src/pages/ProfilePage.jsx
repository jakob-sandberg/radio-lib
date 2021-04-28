import ChangeInfo from "../components/ChangeInfo"
import FavoritesList from "../components/FavoritesList"
import styles from "../css/ProfilePage.module.css"


export default function ProfilePage() {
  
  
  
  return (
    <div>
      <h1>ProfilePage</h1>
    <div className={styles.container}>
     <div className={styles.favoritesList}><FavoritesList /></div>
     
     <div className={styles.changeInfo}><ChangeInfo /></div>
    </div>
    </div>
)}
   