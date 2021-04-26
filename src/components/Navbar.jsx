import { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import styles from "../css/Navbar.module.css";
import LoginButton from "../components/LoginButton"
import LogOutButton from "../components/LogOutButton"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const { loginState } = useContext(UserContext);

  return <navbar>
    <NavLink className={styles.link} to="/">Home</NavLink>
    <NavLink className={styles.link} to="/schedule">Schedule</NavLink>
    <NavLink className={styles.link} to="/log-in">
      {loginState ? <LogOutButton /> : <LoginButton />}
    </NavLink>
  </navbar>;
};

export default Navbar;

