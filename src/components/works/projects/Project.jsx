import './project.css';

const Project = ({name, cover, link}) => {
    return (
        <div className="card">
            card
            <div className="card-browser">
                <div className="card-circle"></div>
                <div className="card-circle"></div>
                <div className="card-circle"></div>
            </div>
        </div>,
        <div className="card-info">
            <a href={link} target="_blank" rel="noreferrer">
                <img src={cover} alt={name} className="card-image" />
            </a>
        </div>
    )
}

export default Project;