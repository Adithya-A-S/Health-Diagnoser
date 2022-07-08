
import React from 'react'
import { useNavigate } from 'react-router'
import "./Banner.css"
import { Button } from '@material-ui/core'
function Banner() {

    let navigate = useNavigate();
   
    
    return (
        <div className="banner">
            <div className="banner__title">
                <div className="banner__title_head">
                    Health Diagnoser<font>AI</font>
                </div>
                <div className="banner__title_tail">
                    <div className="typing">A Machine Learning based Health Diagnoser</div>
                    <div className="banner__buttons">
                        <Button onClick={() => {navigate('/diabetes');}} className="banner__button cropButton">Diabetes Predictor</Button>
                        
                    </div>
                    
                    <div className="banner__socialMedia">
                        <a className="social_icon_linkedin" href="https://www.linkedin.com/in/adithya-a-s/" target="_blank"><span ><i className="fa fa-linkedin" aria-hidden="true"></i></span></a>
                        <a className="social_icon_github" href="https://github.com/Adithya-A-S" target="_blank"><span><i className="fa fa-github" aria-hidden="true"></i></span></a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Banner