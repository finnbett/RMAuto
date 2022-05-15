//Servicing, Suspension, Brakes, Clutches, Tune Ups, Exhaust, Panel and Paint, ECU scan, Electrical,
//General Mechanical,Tyres, Rust Repair, Cambelt, Batteries.

import { Carousel } from "react-bootstrap"


export function Services () {
    return(
        <>
            <div className="services-container">
                <a href="#services" id="services"><h1 className="category">Services</h1></a>
                <Carousel>
                    <Carousel.Item interval={10000}>
                            {/* <img className="d-block w-100" src="images/IMG_1964.jpg" alt="first-slide"/> */}
                        <div className="list-child slide1">
                            <div className="list-child-col">
                                <ul>
                                    <li>Oil Change</li>
                                    <li>Servicing</li>
                                </ul>
                            </div>
                            <div className="list-child-col">
                                <ul>
                                    <li>Suspension</li>
                                    <li>Brakes</li>
                                </ul>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="list-child slide2">
                                <div className="list-child-col">
                                    <ul>
                                        <li>Clutches</li>
                                        <li>Tune  Ups</li>
                                    </ul>
                                </div>
                                <div className="list-child-col">
                                    <ul>
                                        <li>Exhaust</li>
                                        <li>Panel and Paint</li>
                                    </ul>
                                </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="list-child slide3">  
                                <div className="list-child-col">
                                    <ul>
                                        <li>Vehicle Scan</li>
                                        <li>Electrical</li>
                                    </ul>
                                </div>
                                <div className="list-child-col">
                                    <ul>
                                        <li>Fault Diagnostics</li>
                                        <li>General Repairs</li>
                                    </ul>
                                </div>
                            </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="list-child slide4">
                            <div className="list-child-col">
                                <ul>
                                    <li>Tyres</li>
                                    <li>Rust Repair</li>
                                </ul>
                            </div>
                            <div className="list-child-col">
                                <ul>
                                    <li>Cambelts</li>
                                    <li>Batteries</li>
                                </ul>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            
        </>
    )
        //list of services
    
}