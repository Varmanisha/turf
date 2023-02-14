import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactGoogleAutocomplete from 'react-google-autocomplete';
import { Link } from 'react-router-dom';
import Search from './Search';
// import Header from './Header';

const Banner = () => {
    const API_KEY = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8943,151.2330&radius=1000&type=restaurant&keyword=attractions&key=MyApiKey&maxprice=1000';
    return (
        <>
            <Search />
            <div className='banner-wrapper'>
                <Container>
                    <Row>
                        <Col lg={6}>
                        </Col>
                        <Col lg={6}>
                            <div className='banner-text'>
                                <svg height="100" stroke="#ffffff" strokeWidth={1} className="text-line" width="100%"><text x="55%" dominantBaseline={'middle'} textAnchor="middle" y="50%">Play to <br /> Score</text></svg>
                                <a href="javascript:;" className='common-btn banner-btn'>Book Now</a>
                            </div>
                            <ReactGoogleAutocomplete apiKey={API_KEY} onPlaceSelected={(place) => {
                                console.log(place)
                            }} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Banner;