import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";


const Tabcustom = ({ tabData }) => {
    return (
        <>
            <div className="filter-wrapper">
                <Tab.Container id="left-tabs-example" defaultActiveKey="pd">
                    <Nav variant="pills">
                        {
                            tabData.map((data, index) => {
                                return (
                                    <Nav.Item key={index}>
                                        <Nav.Link eventKey={data.keyevent}>{data.title}</Nav.Link>
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                    <Tab.Content>
                        {
                            tabData.map((data, index) => {
                                return (
                                    <Tab.Pane eventKey={data.keyevent} key={index}>
                                        {data.body()}
                                    </Tab.Pane>
                                )
                            })
                        }
                    </Tab.Content>
                </Tab.Container>
                {/* <div className="filters">
                    <ul>
                        <li data-filter="*">All</li>
                        <li data-filter=".corporate">Corporate</li>
                        <li data-filter=".personal">Personal</li>
                        <li data-filter=".agency">Personal</li>
                        <li data-filter=".portal">Personal</li>
                    </ul>
                </div>
                <div className="filters-content">
                    <Row>
                        <Col lg={4} className="all corporate">
                            <h1>Corporate</h1>
                        </Col>
                        <Col lg={4} className="all personal">
                            <h1>Personal</h1>
                        </Col>
                        <Col lg={4} className="all agency">
                            <h1>agency</h1>
                        </Col>
                        <Col lg={4} className="all portal">
                            <h1>portal</h1>
                        </Col>
                    </Row>
                </div> */}
            </div>
        </>
    )
}

export default Tabcustom;