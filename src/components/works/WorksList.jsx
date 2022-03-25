import './worksList.css'
import Project from './projects/Project';
import { projectsInfo } from './data';

const WorksList = () => {
    return (
        <div className="works-container">
            <div className="works-texts">
               <h1 className="works-title">Projects</h1> 
                <p className="works-desc">
                    These is some of my works, you can see them on github.
                </p>
            </div>

            <div className="works-list">
                {/*  for each element in projectsInfo 
                    call the 'Project' 
                */}
                { projectsInfo.map((item) => (
                    <Project 
                        key={item.id} 
                        cover={item.cover}
                        link={item.link}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default WorksList;