import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import './mailme.css'
import cofiphone from'../../images/cofiphone.png';
import { info } from './info';

const MailMe = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = ( event ) => {
        event.preventDefault();

        emailjs.sendForm(
            info.service,
            info.template,
            formRef.current, 
            info.user
            )
            .then((result) => {
                console.log(result.text)
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (

        <div className='mail-container'>
            <div className="mail-bg"></div>
                <div className="mail-wrapper">
                    <div className="mail-wleft">
                        <h1 className="m-title">Let's talk!</h1>
                        <div className="m-info">
                            <img className="m-img" src={cofiphone} alt="" />
                            <div className="m-contact">

                                <div class="c-github">
                                    <a href="https://github.com/U-4D89" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-github-square" id="gh"></i> 
                                    </a>
                                </div>

                                <div class="c-linkedin">
                                    <a href="https://www.linkedin.com/in/laurad-castanedad" target="_blank" rel="noreferrer">
                                        <i class="fa-brands fa-linkedin" id="in"></i>
                                    </a>
                                    
                                </div>
  
                            </div>
                        </div>
                    </div>

                    <div className="mail-wright">
                        <p className="m-desc">
                           Send me a email
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="userName"/>
                            <input type="text" placeholder="Subject" name="subject" />
                            <input type="email" name="email" placeholder='Email'/>
                            <textarea name="message" rows="5" placeholder="Message"></textarea>
                            <button>Submit</button>
                            {done && '   Your messages has been sent, thank you!'}
                        </form>
                    </div>
                
            </div>

        </div>
    )
}

export default MailMe;