import React from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styles from "../webBttn.scss";
import proj4 from '../img/Breweries.png';
import proj5 from '../img/cheftopia.png';

const Projects = () => {
  const proj1 = "https://www.dropbox.com/s/6z2u3f1ddokcq6e/proj5Sq.png?raw=1";
  const proj2 = "https://www.dropbox.com/s/w3lp9l8sf7l1r4h/proj2Sq.png?raw=1";
  const proj3 = "https://www.dropbox.com/s/agkcr4wings3y2q/proj4Sq.png?raw=1";

  return (
    <div className="projects">
      {/* <NavContact /> */}
      {/* <Drip /> */}
      <div className="wrapper_projects">
        <h1 id="projects">Projects</h1>
        <div className="projectBoxes">
          <div className="boxes2">
            <img src={`${proj1}`} alt="Project 1" />
            <div className="proj-desc">
              <h3>Project Name Here</h3>
              <p>Brief description of project here</p>
              <AwesomeButtonSocial
                className="socialBttn"
                size="icon"
                type="github"
                url="http://github.com/taty2010"
              />
              <AwesomeButton
                className="socialBttn"
                size="icon"
                cssModule={styles}
                type="link"
                href="https://relaxed-stallman-2387d1.netlify.com/"
                target="_blank"
              >
                <i class="fas fa-globe" />
              </AwesomeButton>
            </div>
          </div>
          <div className="boxes2">
            <img src={`${proj2}`} alt="Project 2" />
            <div className="proj-desc">
              <h3>Project Name Here</h3>
              <p>Brief description of project here</p>
              <AwesomeButtonSocial
                className="socialBttn"
                size="icon"
                type="github"
              />
              <AwesomeButton
                className="socialBttn"
                size="icon"
                cssModule={styles}
                type="secondary"
              >
                <i class="fas fa-globe" />
              </AwesomeButton>
            </div>
          </div>
          <div className="boxes2">
            <img src={`${proj3}`} alt="Project 3" />
            <div className="proj-desc">
              <h3>Project Name Here</h3>
              <p>Brief description of project here</p>
              <AwesomeButtonSocial
                className="socialBttn"
                size="icon"
                type="github"
              />
              <AwesomeButton
                className="socialBttn"
                size="icon"
                cssModule={styles}
                type="secondary"
              >
                <i class="fas fa-globe" />
              </AwesomeButton>
            </div>
          </div>
          <div className="boxes2">
            <img src={`${proj4}`} alt="Project 1" />
            <div className="proj-desc">
              <h3>Project Name Here</h3>
              <p>Brief description of project here</p>
              <AwesomeButtonSocial
                className="socialBttn"
                size="icon"
                type="github"
              />
              <AwesomeButton
                className="socialBttn"
                size="icon"
                cssModule={styles}
                type="secondary"
              >
                <i class="fas fa-globe" />
              </AwesomeButton>
            </div>
          </div>
          <div className="boxes2">
            <img src={`${proj5}`} alt="Project 2" />
            <div className="proj-desc">
              <h3>Project Name Here</h3>
              <p>Brief description of project here</p>
              <AwesomeButtonSocial
                className="socialBttn"
                size="icon"
                type="github"
              />
              <AwesomeButton
                className="socialBttn"
                size="icon"
                cssModule={styles}
                type="secondary"
              >
                <i class="fas fa-globe" />
              </AwesomeButton>
            </div>
          </div>
          <div className="boxes2">
            <img src={`${proj3}`} alt="Project 3" />
            <div className="proj-desc">
              <h3>Project Name Here</h3>
              <p>Brief description of project here</p>
              <AwesomeButtonSocial
                className="socialBttn"
                size="icon"
                type="github"
              />
              <AwesomeButton
                className="socialBttn"
                size="icon"
                cssModule={styles}
                type="secondary"
              >
                <i class="fas fa-globe" />
              </AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
