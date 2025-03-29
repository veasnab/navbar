
import SubLink from "./SubLink"


import "./MainLink.css"
const MainLink = ({content, display, setDisplay}) => {
  
  const handleLink = (e) => {
    e.preventDefault();
    // Map the display contents to the updated state
    const newDisplay = display.map((o) => ({
      ...o, 
      subLink: Array.isArray(o.subLink) ? [...o.subLink] : null,
      isVisible: content.id === o.id,
    }));
    // Update the state with the new display
    setDisplay(newDisplay);
  };

  const handleClose = () => {
    const newDisplay = display.map((o) => ({
      ...o, 
      subLink: Array.isArray(o.subLink) ? [...o.subLink] : null,
      isVisible: false,
    }));
    setDisplay(newDisplay);
  };

  return(
    <div className="MainLink">
      <a onClick={handleLink}
        className="link" 
        href={content.link}>
          {content.icon}{content.title}
      </a>
      {
        content.subLink
        && 
        <SubLink 
          title={content.title}
          subContent={content.subLink} 
          isVisible={content.isVisible}
          handleClose={handleClose}
        />
      }
      {
        content.subLink
        &&
        <i className="bi bi-chevron-compact-down dropdown"></i>
      }
    </div>
  )
}

export default MainLink;