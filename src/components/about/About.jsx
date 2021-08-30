import React from 'react'
import './about.css'
import arrowDown from '../../img/arrowDown.png'
import arrowUp from '../../img/arrowUp.png'
import {scroll} from "../../helpers/scroll";
import arrowLeft from '../../img/arrowLeft.png'
import {useHistory} from "react-router-dom";
import myLife from '../../img/about/myLife.jpg'
import daughter from '../../img/about/daughter.jpg'
import love from '../../img/about/love.jpg'

const About = () => {
    scroll()
    const {goBack} = useHistory()

    return (<React.Fragment>
            <div className='sec_container'>
                <section className="sec1" id='sec1'><h2 className='sec_title'>Beginning of my adventure...</h2>
                    <a href="#sec2"><img className='sec_arrow' src={arrowDown} alt="arrow"/></a>
                    <img className='sec_arrow_left' src={arrowLeft} alt="arrow" onClick={goBack}/>
                </section>
                <div className="sec-text">
                    <h3 className="sec-text__title">Life in the world of DJing</h3>
                    <p className="sec-text__dsc">
                        My journey into life began with the fact that I became a DJ and it was very cool...
                    </p>
                </div>

                <section className="sec2" id='sec2'>
                    <a href="#sec3"><img className='sec_arrow' src={arrowDown} alt="arrow"/></a>
                    <a href="#sec1"><img className='sec_arrow_up' src={arrowUp} alt="arrow"/></a>
                </section>
                <div className="sec-text">
                    <h3 className="sec-text__title">Life in business...</h3>
                    <p className="sec-text__dsc">
                        Then there was a desire to earn money and have everything a person wants... And I began to
                        strive...</p>
                </div>

                <section className="sec3" id='sec3'>
                    <a href="#sec4"><img className='sec_arrow' src={arrowDown} alt="arrow"/></a>
                    <a href="#sec2"><img className='sec_arrow_up' src={arrowUp} alt="arrow"/></a>
                    <img className='sec_img' src={myLife} alt="myLife"/>
                    <img className='sec_img2' src={daughter} alt="daughter"/>
                    <img className='sec_img3' src={love} alt="love"/>
                </section>
                <div className="sec-text">
                    <h3 className="sec-text__title">Happiness and achievement of all that i wanted...</h3>
                    <p className="sec-text__dsc">
                        After a lot of time, I achieved my goals ...
                        <br/>
                        But the feeling that my work does not bring me joy,did not let me go...
                    </p>
                </div>

                <section className="sec4" id='sec4'>
                    <a href="#sec5"><img className='sec_arrow' src={arrowDown} alt="arrow"/></a>
                    <a href="#sec3"><img className='sec_arrow_up' src={arrowUp} alt="arrow"/></a>
                </section>
                <div className="sec-text">
                    <h3 className="sec-text__title">Understanding and thinking in a new way...</h3>
                    <p className="sec-text__dsc">
                        I learned how to manage my time (at work and at home), and began to study what I have always
                        been interested in ...
                        <br/>
                        ...read a little information about programming, looked at what development is on YouTube, chose
                        a
                        direction and began to learn... (A-LEVEL Kharkov)
                        <br/>
                        Having received basic knowledge, I want to study even more, learn to be even better and become
                        an excellent programmer...
                    </p>
                </div>
                <section className="sec5" id='sec5'>
                    <a href="#sec1"><img className='sec_arrow_up' src={arrowUp} alt="arrow"/></a>
                </section>
            </div>
        </React.Fragment>
    )
}
export default About