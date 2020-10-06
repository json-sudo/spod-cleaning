import React from 'react'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselComponent = ({ children }) => {
    return (
        <Carousel 
            autoPlay 
            showThumbs={false} 
            infiniteLoop 
            useKeyboardArrows 
            swipeable
            showStatus={false}
            interval={4500}
            transitionTime={500}
            stopOnHover={false}
        >
            {children}
        </Carousel>
    )
}

export default CarouselComponent
