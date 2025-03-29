
import './SubLink.css'

const SubLink = ({title, subContent, handleClose, isVisible}) => {
  return (
    <div className={isVisible ? "SubLink" : "SubLink-Hide"}>
        <div className='title'>
          <span>{title}</span>
          <button onClick={handleClose}>&times;</button>
        </div>
        <ul className="subContent">
        {
          subContent.map((content) => <li key={content.id}>
            <a className="link" target="_blank" 
              href={content.source}> 
              {content.icon} 
              {content.title}
            </a>
          </li>)
        }
        </ul>
    </div>
  )
}

export default SubLink;