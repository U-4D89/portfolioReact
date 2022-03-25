import './about.css'
import am from '../../images/am.png'

const About = () => {
    return (
        <div className="about"> 
            <div className="ab-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={am} alt="" className="a-img" />
                </div>
                

            </div>
            <div className="ab-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-desc">
                    I was born in Bogotá in the 2001 and in my free times I like to play with my guinea pigs.
                </p>
                <p className="a-desc">
                    I started into programming on 2021 with   <b><a href="https://www.fundacion-s.org/" target="_blank" rel='noreferrer'>Fundacion S    </a></b> 
                    and since I have gained experience with HTML,
                    CSS, JavaScript, Python 3, Nodejs, Relational and No relational databases, 
                    recently I am learning React, Webpack and D3js by my own.
                </p>
            </div>

        </div>
    )
}

export default About;