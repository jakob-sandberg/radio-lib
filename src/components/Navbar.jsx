import { useContext } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import styles from "../css/Navbar.module.css";
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const { user, logout, loginState, setLoginState } = useContext(UserContext);

  const handleOnclickLogout = async () => {
    setLoginState(false)
    await logout();
  };

  return <div className={styles.navbar}>
    <NavLink className={styles.link} to="/">Home</NavLink>
    {loginState ?
    <NavLink className={styles.link} to="/profile-page">Profile Page</NavLink>
    : ""}
    {loginState ? (
            <NavLink
              to="/"
              onClick={() => {
                handleOnclickLogout();
              }}
              className={styles.link}>
              Logga ut
            </NavLink>
          ) : (
            <NavLink className={styles.link} to="/log-in">
              Logga in
            </NavLink>
          )}
  </div>;
};

export default Navbar;

