import React from 'react'
import Knock from "../knock_knock/Knock";
import {animated, useTransition} from "react-spring";
import {Switch, Route, useLocation} from "react-router-dom";
import Portfolio from "../works/Portfolio";
import Profile from "../profile/Profile";
import About from "../about/About";
import Contact from "../contact/Contact";


const Application = () => {
    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
            transform: '1,5s'
        },
        enter: {
            opacity: 1,
            transform: '1,5s'
        },
        leave: {
            opacity: 0,
            transform: '1,5s'
        }
    })
    return (
        <>
            {transitions.map(({item, props, key}) => (
                <animated.div key={key} style={props}>
                    <div>
                        <Switch location={item}>
                            <Route exact path='/' component={Knock}/>
                            <Route path='/profile' component={Profile}/>
                            <Route path='/about' component={About}/>
                            <Route path='/contact' component={Contact}/>
                            <Route path='/portfolio' component={Portfolio}/>
                        </Switch>
                    </div>
                </animated.div>
            ))
            }
        </>

    )
}


export default Application


