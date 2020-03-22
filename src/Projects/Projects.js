import React from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import styles from "../webBttn.scss";

const Projects = () => {
  const proj1 = "https://www.dropbox.com/s/6z2u3f1ddokcq6e/proj5Sq.png?raw=1";
  const proj2 = "https://www.dropbox.com/s/w3lp9l8sf7l1r4h/proj2Sq.png?raw=1";
  const proj3 = "https://www.dropbox.com/s/agkcr4wings3y2q/proj4Sq.png?raw=1";
  const proj4 = "";

  // const Drip = styled(Wave2)`
  //   width: 100vw;
  //   height: auto;
  //   position: absolute;
  //   left: 8px;
  //   right: 0;
  //   top: 80vh;
  //   bottom: 0;
  //   transition: top;
  //   z-index: -5;
  //   @media only screen and (max-width: 899px) and (min-width: 600px) {
  //     top: 25%;
  //   }
  //   @media only screen and (min-width: 900px) and (max-width: 1199px) {
  //     top: 30%;
  //     left: -1px;
  //   }
  //   @media only screen and (min-width: 1200px) {
  //     top: 60vh;
  //   }
  // `;

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
            <img src={`${proj1}`} alt="Project 1" />
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
