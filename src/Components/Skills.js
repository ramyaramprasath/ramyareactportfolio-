import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import "./Skills.css";

const Skills = () => {
  return (

    
    <div className="skillContainer" id="skills">
        
    <div className="skillContainer__image">
        <img src={"https://img.freepik.com/premium-vector/woman-sitting-with-laptop-concept-illustration-working-studying-education-work-from-home-healthy-lifestyle_186332-153.jpg?w=2000"}alt=""/>
        
    </div>
    <div className=" skillContainer__text">
    <h1>ABOUT ME</h1>
        <p>Unleashing innovative ideas and endeavors DEVELOPER</p>
        <h2>SKILLS</h2>
        <div className="skillContainer__skillset">
            <h5>React</h5>
            <div className="skillContainer__slider skillContainer__slider1">
                <LinearProgress variant="determinate"value={75}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>JavaScript</h5>
            <div className="skillContainer__slider skillContainer__slider2">
                <LinearProgress variant="determinate"value={75}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>CSS</h5>
            <div className="skillContainer__slider skillContainer__slider3">
                <LinearProgress variant="determinate"value={90}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>Html</h5>
            <div className="skillContainer__slider skillContainer__slider4">
                <LinearProgress variant="determinate"value={90}/>
            </div>
        </div>
        <div className="skillContainer__skillset">
            <h5>Bootstrap</h5>
            <div className="skillContainer__slider skillContainer__slider5">
                <LinearProgress variant="determinate"value={90}/>
            </div>
        </div>
    </div>

</div>

  )
}

export default Skills