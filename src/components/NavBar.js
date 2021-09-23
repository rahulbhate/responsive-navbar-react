import React, { useState } from "react";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App.css";
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const styles = {
    // transition: "all .5s ease-in-out",
  };
  return (
    <nav
      className={showLinks ? "show" : "main-nav"}
      style={{
        ...styles,
        opacity: opacity,
      }}
      id={showLinks ? "show" : ""}
    >
      <img className='logo' alt='microsoft' src='../logo.png' />

      <ul className='main-menu'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
        <li>
          <a href='#'>Feedback</a>
        </li>
      </ul>

      <div className='right-menu'>
        <input placeholder='Search...' />
        <button>SEARCH</button>
      </div>

      {showLinks ? (
        <FontAwesomeIcon
          icon={faTimesCircle}
          id='hidden'
          style={{ position: "fixed", top: 10, right: 10, color: "white" }}
          size='2x'
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          id='hidden'
          style={{ position: "fixed", top: 10, right: 10 }}
          size='2x'
          onClick={() => {
            setShowLinks(!showLinks);
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;
