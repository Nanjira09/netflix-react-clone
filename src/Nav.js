import React, { useEffect, useState } from "react";
import "./Nav.css";
// import {auth} from './Firebase'
import { useHistory } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  let history = useHistory();
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav-content">
        <img
          className="nav-logo"
          onClick={() => history.push("/")}
          src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"
          alt=""
        />
        <img
          className="nav-avatar"
          onClick={() => history.push("/profile")}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
