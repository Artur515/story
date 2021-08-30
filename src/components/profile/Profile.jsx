import Menu from "../menu/Menu";
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import React from "react";
import js from '../../img/js.png'
import reactLogo from '../../img/react.png'
import door from '../../img/door.jpg'
import bart from '../../img/bart.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import smile from '../../img/smile.jpg'
import bootstrap from '../../img/bootstrap.png'
import ajax from '../../img/AJAX.png'
import redux from '../../img/redux.png'
import dream from '../../img/dreaming.jpg'
import never from '../../img/never.jpg'
import arrow from '../../img/arrowDown.png'
import arrowUp from '../../img/arrowUp.png'
import javascript from '../../img/javascript.jpg'

class Profile extends React.Component {
    render() {
        return (
            <>
                <Menu/>
                <Parallax ref={ref => (this.parallax = ref)} pages={3}>
                    <ParallaxLayer offset={1} speed={0.6} style={{opacity: 0.5}}>
                        <img src={bart} alt='bart_Simpson' style={{display: 'block', width: '50%', marginLeft: '40%'}}/>
                        <span style={{fontSize: '30px', marginLeft: '15px'}}>i will not write more bad code...</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={.99} speed={0.6} style={{opacity: 0.5}}>
                        <img src={javascript} alt='bart_Simpson'
                             style={{display: 'block', width: '50%', marginLeft: '40%'}}/>
                        <span style={{fontSize: '30px', marginLeft: '50%'}}>Java Script</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.75} speed={0.5} style={{opacity: 0.4}}>
                        <img src={reactLogo} alt='react' style={{display: 'block', width: '20%', marginLeft: '10%'}}/>
                        <span
                            style={{
                                display: 'block',
                                width: '20%',
                                marginLeft: '10%',
                                fontWeight: 'bold',
                                fontSize: '22px'
                            }}>React</span>
                        <img src={html} alt='html' style={{display: 'block', width: '20%', marginLeft: '60%'}}/>
                        <span
                            style={{
                                display: 'block',
                                width: '20%',
                                marginLeft: '60%',
                                fontWeight: 'bold',
                                fontSize: '22px'
                            }}>HTML5</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.1} speed={0.2} style={{opacity: 0.3}}>
                        <img src={html} alt='html' style={{display: 'block', width: '10%', marginLeft: '10%'}}/>
                        <span
                            style={{width: '10%', marginLeft: '10%', fontWeight: 'bold', fontSize: '22px'}}>HTML</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.3} speed={0.8} style={{opacity: 0.3}}>
                        <img src={css} alt='css' style={{display: 'block', width: '20%', marginLeft: '15%'}}/>
                        <span style={{width: '20%', marginLeft: '75%', fontWeight: 'bold', fontSize: '22px'}}>CSS</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.6} speed={0.6} style={{opacity: 0.3}}>
                        <img src={dream} alt='dream' style={{display: 'block', width: '30%', marginLeft: '65%'}}/>
                    </ParallaxLayer>
                    <ParallaxLayer offset={1.6} speed={-0.1} style={{opacity: 0.7}}>
                        <span style={{width: '25%', marginLeft: '30%', fontWeight: 'bold', fontSize: '22px'}}>Java Script</span>
                        <img src={js} alt='js' style={{display: 'block', width: '25%', marginLeft: '30%'}}/>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2.6} speed={0.4} style={{opacity: 0.6}}>
                        <img src={css} alt='css' style={{display: 'block', width: '28%', marginLeft: '5%'}}/>
                        <span style={{width: '20%', marginLeft: '5%', fontWeight: 'bold', fontSize: '22px'}}>CSS</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2.3} speed={0.2} style={{opacity: 0.3}}>
                        <img src={bootstrap} alt='bootstrap'
                             style={{display: 'block', width: '15%', marginLeft: '75%'}}/>
                        <span style={{
                            width: '15%',
                            marginLeft: '75%',
                            fontWeight: 'bold',
                            fontSize: '22px'
                        }}>BootStrap</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2.1} speed={0.9} style={{opacity: 0.9}}>
                        <img src={ajax} alt='ajax' style={{display: 'block', width: '20%', marginLeft: '5%'}}/>
                        <span style={{width: '20%', marginLeft: '5%', fontWeight: 'bold', fontSize: '22px'}}>AJAX</span>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.6} style={{opacity: 0.9}}>
                        <img src={redux} alt='redux'
                             style={{display: 'block', width: '25%', marginLeft: '75%', marginTop: '30%'}}/>
                        <span
                            style={{width: '15%', marginLeft: '75%', fontWeight: 'bold', fontSize: '22px'}}>Redux</span>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
                        speed={-0.3}
                        style={{
                            backgroundSize: '80%',
                            backgroundPosition: 'center',
                        }}
                    />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        onClick={() => this.parallax.scrollTo(1)}
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={door} alt='welcome' style={{width: '100%', objectFit: 'cover'}}/>
                        <div style={{position: "absolute", right: '0', bottom: "50%", width: "25px"}}>
                            <img style={{width: '100%', cursor: 'pointer'}} src={arrow} alt="arrow"/></div>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={1}
                        speed={0}
                        onClick={() => this.parallax.scrollTo(2)}
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src={never} alt='never' style={{width: '30%', cursor: 'pointer', opacity: '.6'}}/>
                        <div style={{position: "absolute", right: '0', bottom: "50%", width: "25px"}}>
                            <img style={{width: '100%', cursor: 'pointer'}} src={arrow} alt="arrow"/></div>
                    </ParallaxLayer>
                    <ParallaxLayer offset={2}
                                   speed={-0}
                                   style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                                   onClick={() => this.parallax.scrollTo(0)}>
                        <img src={smile} alt='smile' style={{width: '50%', cursor: 'pointer', opacity: '0.7'}}/>
                        <div style={{position: "absolute", right: '0', bottom: "50%", width: "25px"}}>
                            <img style={{width: '100%', cursor: 'pointer'}} src={arrowUp} alt="arrow"/></div>
                    </ParallaxLayer>
                </Parallax>
            </>
        )
    }
}

export default Profile