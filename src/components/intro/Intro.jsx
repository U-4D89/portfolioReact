import './intro.css'
import intropic from '../../images/intropic.png';

const Intro = ( ) => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello world, my name is</h2>
                    <h1 className='i-name'>Laura Castañeda</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"></div>
                        </div>
                    </div>
                    <div className="i-desc">
                        <p>
                        Front end developer with about a year of experience programming in a bunch of languages and frameworks. 
                        Passionate about coding and changing lives through software.
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-img-bg"></div>
                <img src={intropic} alt="me" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;