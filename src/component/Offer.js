import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tabcustom from "./Tab";
import Sport01 from "../assets/image/sport-01.jpg";
import Sport02 from "../assets/image/sport-02.jpg";
import Sport03 from "../assets/image/sport-03.jpg";
import Sport04 from "../assets/image/sport-04.jpg";
import Sport05 from "../assets/image/sport-05.jpg";
import Sport06 from "../assets/image/sport-06.jpg";
import Sport07 from "../assets/image/sport-07.jpg";
import Sport08 from "../assets/image/sport-08.jpg";
import Sport09 from "../assets/image/sport-09.jpg";

const Offer = () => {

    const tabData = [
        {
            id: "pd",
            title: "Water Sports",
            keyevent: "pd",
            body: () => renderwater(),
        },
        {
            id: "document",
            title: "Jumping",
            keyevent: "document",
            body: () => renderjumping(),
        },
        {
            id: "pastemp",
            title: "Bikes",
            keyevent: "pstemp",
            body: () => renderbike(),
        },
        {
            id: "running",
            title: "Running",
            keyevent: "running",
            body: () => renderrunning(),
        },
    ];

    // renderfunction

    const renderwater = () => {
        return (
            <>
                <Row>
                    <Col lg={4}>
                        <div className="content">
                            <div className="content-img">
                                <img src={Sport02} alt="" />
                            </div>
                            <div className="content-detail">
                                <h4>Swimming</h4>
                                <p>Levir meus, priusquam oppugnarent tempus quis, admonere dicitur. Credo quod idem mihi praesidium.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <img src={Sport06} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport08} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <div className="content">
                            <div className="content-img">
                                <img src={Sport02} alt="" />
                            </div>
                            <div className="content-detail">
                                <h4>Swimming</h4>
                                <p>Levir meus, priusquam oppugnarent tempus quis, admonere dicitur. Credo quod idem mihi praesidium.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <img src={Sport06} alt="" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport08} alt="" />
                    </Col>
                </Row>
            </>
        )
    }

    const renderjumping = () => {
        return (
            <>
                <Row>
                    <Col lg={4}>
                        <img src={Sport01} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport03} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport04} alt="sports" />
                    </Col>
                </Row>
            </>
        )
    }

    const renderbike = () => {
        return (
            <>
                <Row>
                    <Col lg={4}>
                        <img src={Sport05} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport07} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport09} alt="sports" />
                    </Col>
                </Row>
            </>
        )
    }

    const renderrunning = () => {
        return (
            <>
                <Row>
                    <Col lg={4}>
                        <img src={Sport05} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport07} alt="sports" />
                    </Col>
                    <Col lg={4}>
                        <img src={Sport09} alt="sports" />
                    </Col>
                </Row>
            </>
        )
    }


    return (
        <>
            <div className="offer-wrapper">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2 className="common-heading"><span>Sports Offer</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Tabcustom tabData={tabData} />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Offer;