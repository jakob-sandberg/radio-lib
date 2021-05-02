import Login from "../components/Login";
import Register from "../components/Register";
import { useContext  } from 'react'
import { UserContext } from "../contexts/UserContextProvider";
import styles from "../css/LoginPage.module.css";

export default function LoginPage() {
  const { toBeLogin, setToBeLogin } = useContext(UserContext)
  const changeRegLog = () => {
    setToBeLogin(!toBeLogin)
  }
  
  return (
    <div className={styles.loginContainer}>
     {toBeLogin ? <Login />: <Register />}
     <p className={styles.changeRegLog} onClick={changeRegLog}>{toBeLogin ? "Are you not a member yet?" : " Back to login"}</p>
    </div>
)}
   