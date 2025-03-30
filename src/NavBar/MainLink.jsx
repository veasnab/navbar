
import SubLink from "./SubLink"


import "./MainLink.css"
const MainLink = ({content, display, setDisplay}) => {
  
  const handleLink = (e) => {
    const targetId = e.currentTarget.getAttribute('href').substring(1); 
    
    e.preventDefault();

    // Check if the link is a valid URL (basic check for now)
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('http')) {
      // Open the link in a new tab if it is a URL
      window.open(href, '_blank');
      return; // Stop further execution
    }
    
    // Map the display contents to the updated state
    const newDisplay = display.map((o) => ({
      ...o, 
      subLink: Array.isArray(o.subLink) ? [...o.subLink] : null,
      isVisible: content.id === o.id,
    }));

    // Update the state with the new display
    setDisplay(newDisplay);

    // Scroll to the target section
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

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