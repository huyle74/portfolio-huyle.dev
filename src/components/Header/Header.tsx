import { useState, useCallback } from "react";
import "./Header.css";

interface HeaderProps {
  opacity?: number;
}

export default function Header({ opacity }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
  }, []);

  const handleClickHome = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const linkStyle = {
    color: open ? "#f6d4b1" : "#525252",
    opacity: open ? 1 : 0,
  };
  const MenuSvg = () => {
    return (
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke={open ? "#525252" : "#f6d4b1"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    );
  };

  return (
    <div
      className="header"
      style={{
        opacity,
        paddingLeft: open ? "3rem" : "10px",
        backgroundColor: open ? "#525252" : undefined,
        width: open ? "100vw" : undefined,
      }}
    >
      <button
        className="button"
        onClick={toggleOpen}
        style={{
          backgroundColor: open ? "#f6d4b1" : undefined,
          boxShadow: hover ? "5px 9px 10px 0 #cdbdab" : "8px 8px 0 0 #cdbdab",
          transition: "box-shadow 0.15s",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <MenuSvg />
      </button>
      <div className="links">
        <a
          href="#home"
          style={linkStyle}
          onClick={() => {
            toggleOpen();
            handleClickHome();
          }}
        >
          Home
        </a>
        <a href="#about" style={linkStyle} onClick={toggleOpen}>
          About
        </a>
        <a href="#projects" style={linkStyle} onClick={toggleOpen}>
          Project
        </a>
        <a href="#contact" style={linkStyle} onClick={toggleOpen}>
          Contact
        </a>
      </div>
    </div>
  );
}
