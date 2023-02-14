import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css';
import Singleturf from '../assets/image/single-turf01.jpg';
import Singleturf02 from '../assets/image/single-turf02.jpg';
import Search from "./Search";

const SingleTurf = () => {

    const [userTable, setUserTable] = useState([]);
    const [Searchdata, setSearchdata] = useState([]);
    const [data, setDate] = useState([])

    // const itemimg = [
    //     {
    //         item: { Singleturf }
    //     },
    //     {
    //         item: { Singleturf02 }
    //     },
    //     {
    //         item: { Singleturf }
    //     },
    //     {
    //         item: { Singleturf02 }
    //     }
    // ]


    return (
        <>
            <Container>
                <Row>
                    <Search />
                </Row>
            </Container>
            <div className="turf-detail-wrap">
                <OwlCarousel className="owl-theme" loop margin={10} items={1} nav dots={false}>
                    {/* {
                        itemimg.map((data, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div>
                                        <img src={data.item} alt="turf-img" />
                                    </div>
                                </div>
                            )
                        })
                    } */}
                    <div className="item">
                        <div>
                            <img src={Singleturf} alt="turf-img" />
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Singleturf02} alt="turf-img" />
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Singleturf} alt="turf-img" />
                        </div>
                    </div>
                    <div className="item">
                        <div>
                            <img src={Singleturf02} alt="turf-img" />
                        </div>
                    </div>
                </OwlCarousel>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="turf-left-wrap">
                                <div className="detail-head">
                                    <h2>Turf Club</h2>
                                    <Link className="rating-box">3.4 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></Link>
                                </div>
                                <div className="choose-wrap">
                                    <h4>Choose Your Turf</h4>
                                    <div className="category-wrap">
                                        <h6>Selected Category <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg></h6>
                                        <div className="category-detail">
                                            <h5>Deluxe</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default SingleTurf;