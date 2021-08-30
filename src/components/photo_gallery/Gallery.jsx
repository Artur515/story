import {useSpring, animated} from 'react-spring'
import './photo_gallery.css'
import React from 'react'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Gallery = ({work}) => {
    console.log(work)
    const {id, url, img} = work
    const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: {mass: 5, tension: 350, friction: 40}}))
    return (
        <a target='_blank' rel="noopener noreferrer" href={url}>
            <animated.div key={id}
                          className='card'
                          onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                          onMouseLeave={() => set({xys: [0, 0, 1]})}
                          style={{
                              transform: props.xys.interpolate(trans),
                              backgroundImage: `url(${img})`
                          }}/>
        </a>

    )

}

export default Gallery