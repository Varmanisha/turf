import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RangeSlider from "react-range-slider-input/dist/components/RangeSlider";
import 'react-range-slider-input/dist/style.css';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Turf01 from '../assets/image/turf-01.jpg'
import Header from "./Header";
import Search from "./Search";

const AllTurfs = () => {
    const [userTable, setUserTable] = useState([]);
    const [value, setValue] = useState(50);
    const [clear, setClear] = useState();

    const handleClear = () => {
        setClear(value)
        console.log("testing")
    }
    const handleInput = (e) => {
        setValue(e.target.value);
    }
    const turfs = [
        { name: "Battlefield by Reyes | Kandivali", price: 750 },
        { name: "Battlefield by Reyes | Kandivali 2", price: 200 },
        { name: "Battlefield by Reyes | Kandivali 3", price: 50 }
    ];

    const tbdata = () => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setUserTable(data.products)
            })
    }
    useEffect(() => {
        tbdata();
    }, []);
    return (
        <>
            <Search />
            <div className="turf-wrapper">
                <Container fluid>
                    <Row>
                        <Col lg={3}>
                            <div className="left-side">
                                <div className="left-heading">
                                    <h4>Filters</h4>
                                    <Link onClick={handleClear}>Clear All</Link>
                                </div>
                                <div className="left-box">
                                    {/* <input type="range" onInput={handleInput} className='price-range' />
                                    <h6>Price: ₹{value} </h6> */}
                                    <RangeSlider
                                        // value={[2, 10]}
                                        // min={0}
                                        // step={1}
                                        // max={100}
                                        type="range"
                                        // value={value}
                                        defaultValue={[25, 75]}
                                        tooltip={true}
                                        onChange={e => setValue(e.target.value)}
                                    />
                                    <p>Value: {value}</p>
                                    {/* <RangeSlider /> */}
                                </div>
                                <div className="left-box">
                                    <h4>Categories</h4>
                                    <div className="checkbox-wrap">
                                        <div>
                                            <input type="checkbox" id="cricket" />
                                            <label for="cricket">Cricket</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="football" />
                                            <label for="football">Football</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="baseball" />
                                            <label for="baseball">Baseball</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9}>
                            {/* <h2 className="common-heading"><span>Best Turfs</span></h2> */}
                            <div className="select-sort">
                                <select>
                                    <option value="0">Sort By</option>
                                    <option value="1">Popularity</option>
                                    <option value="2">Guest Ratings</option>
                                    <option value="3">Price Low to High</option>
                                    <option value="4">Price High to Low</option>
                                    <option value="5">Show Closest Turf</option>
                                </select>
                            </div>
                            <Row>
                                {
                                    userTable.filter(turf => { return turf.price > parseInt(value, 10) }).map(turf => {
                                        return (
                                            <Col lg={6} className="turf-border">
                                                <div className="turf-box-wrap">
                                                    <div className="turf-img">
                                                        <img src={Turf01} alt="turf" />
                                                    </div>
                                                    <div className="turf-content">
                                                        <h4><Link>{turf.title}</Link></h4>
                                                        <Link className="location-turf">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>
                                                                <p>Mumbai</p>
                                                            </span>
                                                        </Link>
                                                        <div className="rating-wrapper">
                                                            <div className="rating-price">
                                                                <p>Rating</p>
                                                                <span><b>₹{turf.price}</b></span>
                                                            </div>
                                                            <div className="rating-price">
                                                                <ReactStars
                                                                    count={5}
                                                                    onChange={(newRating) => {
                                                                        console.log(newRating);
                                                                    }}
                                                                    size={24}
                                                                    isHalf={true}
                                                                    emptyIcon={<i className="far fa-star"></i>}
                                                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                                    fullIcon={<i className="fa fa-star"></i>}
                                                                    activeColor="#ffd700"
                                                                />
                                                                <span>onwards</span>
                                                            </div>
                                                        </div>
                                                        <div className="turf-btn">
                                                            <Link to='/singleturf' className="view-btn">View Details</Link>
                                                            <Link className="common-btn">Book Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AllTurfs;