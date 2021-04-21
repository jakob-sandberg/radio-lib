import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../css/Navbar.module.css";

const Navbar = () => {
  const [links, /* setLinks */] = useState([{ name: "Home", url: "/" }, {name: "Log In", url:"/log-in"}]);

  const renderLinks = () => {
    return links.map((link) => (
      <Link className={styles.link} key={link.name} to={link.url}>
        {link.name}
      </Link>
    ));
  };

  return <nav className={styles.navbar}>{renderLinks()}</nav>;
};

export default Navbar;

