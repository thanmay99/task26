import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Team+Member+1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Team Member 1</h3>
                    <p>Description of Team Member 1.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Team+Member+2"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Team Member 2</h3>
                    <p>Description of Team Member 2.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Team+Member+3"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Team Member 3</h3>
                    <p>Description of Team Member 3.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;