import NavBar from "./NavBar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { v4 as uuidv4 } from "uuid";

import springboard from "../assets/springboard.pdf";
import autumn from "../assets/uw-autumn-2023.pdf";
import winter from "../assets/uw-winter-2023.pdf";
import diploma from "../assets/uw-diploma.pdf";
/* 
  wrapper component to NavBar 
  update content of navbar;
*/

// **need to update resume and add to bar

const contents = [
  {
    id: uuidv4(),
    icon: <i className="bi bi-house-fill"></i>,
    title: "Home",
    link: "",
    isVisible: false,
    subLink: null
  },
  {
    id: uuidv4(),
    icon: <i className="bi bi-file-code-fill"></i>,
    title: "Projects",
    link: "",
    isVisible: false,
    subLink: [
      {
        id: uuidv4(),
        icon: <i className="bi bi-filetype-jsx"></i>,
        title: "Gridshot-React",
        source: "https://veasnab.github.io/gridshot/"
      }
    ]
  },
  {
    id: uuidv4(),
    icon: <i className="bi bi-file-earmark-pdf-fill"></i>,
    title: "Achievements",
    link: "",
    isVisible: false,
    subLink: [
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "Springboard Software Development",
        source: springboard
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "University of Washington Diploma",
        source: diploma
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "Deanlist: Autumn 2023",
        source: autumn
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "Deanlist: Winter 2023",
        source: winter
      },
    ]
  },
  {
    id: uuidv4(),
    icon: <i className="bi bi-file-earmark-person-fill"></i>,
    title: "Resume: {in-progress}",
    link: "",
    isVisible: false,
    subLink: null
  },
  {
    id: uuidv4(),
    icon: <i className="bi bi-person-lines-fill"></i>,
    title: "Contacts",
    link: "",
    isVisible: false,
    subLink: [
      {
        id: uuidv4(),
        icon: <i className="bi bi-linkedin"></i>,
        title: "linkedin.com/in/veasnab/",
        source: "https://www.linkedin.com/in/veasnab/"
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-github"></i>,
        title: "github.com/veasnab",
        source: "https://github.com/veasnab"
      }, 
      {
        id: uuidv4(),
        icon: <i className="bi bi-envelope-at"></i>,
        title: "Email: veasna.bun@outlook.com",
        source: "mailto:veasna.bun@outlook.com"
      }
    ]
  },

]

const NavContent = () => <NavBar contents={contents}/>
export default NavContent;
