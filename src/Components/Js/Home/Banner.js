import React from 'react';
import { Carousel } from 'react-bootstrap';

const banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src="https://i.ibb.co/R4f7BqT/man-riding-mountain-bike-low-angle.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-start'>
                        <h1 className='text-warning'>THE RIGHT BIKE FOR YOU</h1>
                        <p>Top brands. Large selection. Free shipping.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src="https://i.ibb.co/7KtfX0H/cyclist-sunny-day-bike-adventure-travel-photo.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-end'>
                        <h1 className='text-warning'>ION</h1>
                        <h1 className='text-warning'>ENJOY THE IMPACT</h1>
                        <p>Crashs are part of it-</p>
                        <p>Find the right protectors now.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src="https://i.ibb.co/r525QCd/cyclist-bycicle-race.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-start'>
                        <h1 className='text-warning'>LIVE & BREATHE</h1>
                        <h1 className='text-warning'>THE TWO-WHEELED CULTURE.</h1>
                        <p>Straight out of Bangladesh.</p>
                        <p>BikeZone products are true innovation and comfort for all trail adventures.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default banner;