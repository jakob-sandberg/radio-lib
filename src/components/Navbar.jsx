import { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import styles from "../css/Navbar.module.css";
import LoginButton from "../components/LoginButton"
import LogOutButton from "../components/LogOutButton"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const { loginState } = useContext(UserContext);

  return <div className={styles.navbar}>
    <NavLink className={styles.link} to="/">Home</NavLink>
    {loginState ?
    <NavLink className={styles.link} to="/profile-page">Profile Page</NavLink>
    : ""}
    <NavLink className={styles.link} to="/log-in">
      {loginState ? 
      <LogOutButton /> : <LoginButton />}
    </NavLink>
  </div>;
};

export default Navbar;

