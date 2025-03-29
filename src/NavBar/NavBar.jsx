import { useState } from "react";
import MainLink from "./MainLink";
import "./NavBar.css"

const NavBar = ({contents}) => {
  const [display, setDisplay] = useState(contents);
  
  return (
    <div className="NavBar">
        <ul className="content">
        {display.map((content) => (
          <li key={content.id}>
            <MainLink content={content} display={display} setDisplay={setDisplay}/>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default NavBar;