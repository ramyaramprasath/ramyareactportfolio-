import React from "react";
import "./ProjectFile.css";

const ProjectFile = () => {
  return (
    <div>
         <div className="projects" id="projects">
            <div className="container">
                {/* <h2 className="heading">Projects</h2> */}
                <span className="line"></span>
                <div className="content">
                    <div className="card">
                        <img src={"https://images.unsplash.com/photo-1560653510-4e50f8a2bf58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=914&q=80"} alt=""/>
			                      <h3 className = "project-title">NewYear CountDown</h3>  
                              <p> This Project is based on HTML,CSS,JS.It accurately calulate and updates the countdown in real-time.</p>
                        <div class="btn">
			                    <a class="btns" href="https://newyearcountscript.netlify.app/">view</a>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={"https://plus.unsplash.com/premium_photo-1677646867458-2314b017b523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt=""/>
                        <h3>Landing WebPage</h3>  
                              <p>This webpage is your gateway to a world of incredible destinations and unforgettable experiences used by Bootstrap.</p>
                        <div class="btn">
			                    <a class="btns" href="https://landingwebpagebootstrap.netlify.app//">view</a>
                        </div>
                    </div>
                    <div className="card2">
                        <img src={"https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"} alt=""/>
                        <h3>QuizApp</h3>
                        <p>The QuizApp supports different question formats, including multiple choice, 
                          choose the correct and match it.</p>
                        <div class="btn">
			                    <a class="btns" href="https://reactquizapppage.netlify.app/">view</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
  )
}

export default ProjectFile