import React from "react";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+ (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#project">Project</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Certification</a>
        </li>
        
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
