import React from 'react';
import './contact.css'
import arrowLeft from "../../img/arrowLeft.png";
import {useHistory} from "react-router-dom";

const Contact = () => {
    const {goBack} = useHistory()
    return (
        <div className='body'>
            <img className='contact_arrow' src={arrowLeft} alt="arrow" onClick={goBack}/>
            <div id="card-wrapper">
                <div id="card-front" className="card_about">
                </div>
                <div id="card-back" className="card_about">
                    <div className="details">
                        <h3>Arthur Kerkezha</h3>
                        <p>Front-end developer </p>
                        <p> tel: 0978595788</p>
                        <span>arthurkerkezha@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Contact;