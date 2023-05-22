import React from "react";
import "./AboutFile.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Facebook,Instagram,GitHub } from "@mui/icons-material";


const AboutFile = () => {
  return (
    <div className='hero'>
    <div className='content'>
        <h1>Hi, I'M RAMYA KARTHIKEYAN</h1>
        <p>Building application with frontend using react operations.</p>
        <Link to="/Contact">
        {/* <Link to="/contactFile">Contact</Link> */}
        <button href="/" className="button">Contact Me</button>
        </Link>
          <div className="contact_icons">
            <a href="https://facebook.com/ramya.ramprasath">
                <IconButton>
                    <Facebook/>
                </IconButton>
            </a>
            <a href="https://www.instagram.com/ramyaramprasath">
                <IconButton>
                    <Instagram/>
                </IconButton>
            </a>
            <a href="https://github.com/ramyaramprasath">
                <IconButton>
                    <GitHub/>
                </IconButton>
            </a>
          </div>
    </div>
</div>
     
    
    );
};

export default AboutFile;