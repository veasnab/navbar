import NavBar from "./NavBar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { v4 as uuidv4 } from "uuid";

/* 
  wrapper component to NavBar 
  update content of navbar;
*/

const contents = [
  {
    id: uuidv4(),
    icon: <i className="bi bi-house-fill"></i>,
    title: "Home",
    link: "#home",
    isVisible: false,
    subLink: null
  },
  {
    id: uuidv4(),
    icon: <i className="bi bi-file-code-fill"></i>,
    title: "Live Projects",
    link: "#projects",
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
    link: "#achievements",
    isVisible: false,
    subLink: [
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "Springboard",
        source: "https://drive.google.com/file/d/1AxNz8WFejnwFUjZuUPJ2_xn54POdXwVs/view"
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "University of Washington",
        source: "https://drive.google.com/file/d/1lRQ_AZz-CZXdSwbdX4CPHQRuqfiNK5w9/view"
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "UW Deanlist: Autumn 2023",
        source: "https://drive.google.com/file/d/1pwOtxCEq0pZw3WaKBJZhGoGFUob3qkVj/view"
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "UW Deanlist: Winter 2023",
        source: "https://drive.google.com/file/d/1DSfyyPggHfKqBUjxkDEQsIvG6taIE-gg/view"
      },
      {
        id: uuidv4(),
        icon: <i className="bi bi-file-earmark-arrow-down-fill"></i>,
        title: "Tacoma Community College",
        source: "https://drive.google.com/file/d/1mEDLiQVlXkg7kWBvw_7Z30o4dV82LGNo/view"
      },
    ]
  },
  {
    id: uuidv4(),
    icon: <i className="bi bi-file-earmark-person-fill"></i>,
    title: "Resume | CV",
    link: "https://drive.google.com/file/d/1VplgBVhSMWRZ24HfBeteORMDdnzZzEww/view",
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
