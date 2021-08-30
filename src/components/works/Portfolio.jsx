import React from 'react'
import Gallery from "../photo_gallery/Gallery";
import {works} from "../../service/service";
import Button from "../button/Button";
import {useHistory} from 'react-router-dom'
import './portfolio.css'

const Portfolio = () => {
    const {goBack} = useHistory()

    console.log(goBack)


    return (<React.Fragment>
            <h2 className='h2'>My little travel...</h2>
            <div className='gallery'>
                {works.map((work) => {
                    return <Gallery key={work.id} work={work}/>
                })}
            </div>
            <div className='button'>
                <Button goBack={goBack}/>
            </div>
        </React.Fragment>
    )
}


export default Portfolio