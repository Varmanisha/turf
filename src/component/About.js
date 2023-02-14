import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Aboutimg from '../assets/image/about.jpg';
// import { Animate } from "animate.css-react";

const About = () => {
    return (
        <>
            <div className="about-wrapper">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="about-img ">
                                <img src={Aboutimg} className="animated bounceInDown" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h2 className="common-heading"><span>About Us</span></h2>
                            <div className="about-content">
                                <p>An "About Us" Page is where you reveal your brand story, business values, mission, and experiences.</p>
                                <p className="about-pera">Now the question is: why would you want to share all this information and make it appealing? The answer is simple: you want to tell your audience who you are, show them what you are good at, and tell them you are worthy of their trust.</p>
                                <p className="about-pera">Think for a moment: would you rather purchase from a business you know nothing about, or would you go for somebody with a friendly face shared on their About page and a story that you find exciting? The latter one, right?</p>
                                <p className="about-pera">A great About Us page not just portrays your story, qualities and provides an insight on how your business started, but it also helps you sell. When visitors become familiar with your story and connect with it, they're probably going to purchase from you. A well-planned About Us page can do this!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>

    )
}




export default About;