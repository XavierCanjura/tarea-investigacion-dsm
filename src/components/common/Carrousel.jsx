import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Carrousel = ({ images, percentage, width = '100%', arrows = true }) => {

    return (
        <>
            <Carousel 
                autoPlay 
                infiniteLoop 
                centerMode 
                centerSlidePercentage={percentage} 
                interval={5000} 
                transitionTime={1500} 
                showIndicators={false} 
                showThumbs={false} 
                showStatus={false}
                showArrows={arrows}
                width={width}
                
            >
                { images.map( (img, index) => (
                    <div key={index}>
                        <img src={ img.url } alt={ img.alt } />
                    </div>
                ))}
            </Carousel>
        </>
    )
}

export default Carrousel