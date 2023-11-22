// HomePage.js
import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../style/Home.css';
import profilePicture from "../assets/logo-no-background.png";

const HomePage = () => {
  return (
    <div className="wrapper">
      <div className="about">
         <img src={profilePicture} alt="Ibrahim Kedir" className='about img' /> 
        <div className="prompt">
          <p className="cursive">Advance Your Web Profile With Just 1 Click </p>
         
        </div>
      </div>
      <div className="about1">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programing Languages:</h2>
            <span>
              JavaScript, C#, SQL, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Frameworks and Libraries:</h2>
            <span>
              .Net, React, ASP.Net, PhpAdmin, GIT, JSON, Linux, JMP.
            </span>
          </li>
          <li className="item">
            <h2>Databases:</h2>
            <span>
              SQL server, Azure, MongoDB, MealDB.
            </span>
          </li>
        </ol>
      </div>
      <div className="about2">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programing Languages:</h2>
            <span>
              JavaScript, C#, SQL, HTML, CSS
            </span>
          </li>
          <li className="item">
            <h2>Frameworks and Libraries:</h2>
            <span>
              .Net, React, ASP.Net, PhpAdmin, GIT, JSON, Linux, JMP.
            </span>
          </li>
          <li className="item">
            <h2>Databases:</h2>
            <span>
              SQL server, Azure, MongoDB, MealDB.
            </span>
          </li>
        </ol>
    </div>
    <div className="about3">
    <div className="prompt">
          <p className="cursive">Send An Email To Connect And Satrt Building Your Dream Website Today !</p>
         
          <a href="mailto:ibrahim.kedir@outlook.com">
            <EmailIcon />
          </a>

       
        </div>
      </div>
    
    </div>
    


  );
}

export default HomePage;
