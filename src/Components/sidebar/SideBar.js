import React, {useState} from "react";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`sidebar ${!toggle ? 'closed' : ''}`}>
      <button className='sidebar_bttn' onClick={e => setToggle(!toggle)}><i class="fas fa-power-off"></i></button>
      <div className="profileImg" />
      <h3>Tatyana Novell</h3>
      <h3>Front-End Developer</h3>
      <span><i className="fas fa-map-marker-alt"> Texas</i></span>
      <ul>
        <li>
          <i className="fab fa-github" />
        </li>
        <li>
          <i className="fab fa-linkedin" />
        </li>
        <li>
          <i className="fab fa-twitter-square" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
