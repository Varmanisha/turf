import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startmax, setStartmax] = useState();
    const [startmin, setStartmin] = useState();
    const [endmax, setEndmax] = useState();
    const [endmin, setEndmin] = useState();
    useEffect(() => {
        var date = new Date()
        var today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
        var prev = date.getFullYear() + "-" + (date.getMonth()) + "-" + date.getDate()
        setEndDate(today)
        setStartDate(prev)
    }, []);
    useEffect(() => {
        var sdate = new Date(endDate)
        var smax = sdate.getFullYear() + "-" + (sdate.getMonth()) + "-" + sdate.getDate()
        var edate = new Date(startDate)
        var emin = edate.getFullYear() + "-" + (edate.getMonth() + 2) + "-" + edate.getDate()

        sdate.setMonth(sdate.getMonth() - 12)
        edate.setMonth(edate.getMonth() + 12)
        var smin = edate.getFullYear() + "-" + (sdate.getMonth() + 1) + "-" + edate.getDate()
        var amax = sdate.getFullYear() + "-" + (edate.getMonth() + 1) + "-" + sdate.getDate()
        console.log(smin, amax)

        setStartmax(smax)
        setEndmin(emin)
        setStartmin(smin)
        setEndmin(amax)
    }, [startDate, endDate]);

    return (
        <>
            <Container>
                <Row>
                    <div className='search-wrap'>
                        <div className='turf-search'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg></span>
                            <input type="text" className='location-input' placeholder='Search Location' />
                        </div>
                        <div className='turf-search'>
                            <Link className='mic-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z" /></svg></Link>
                            <input type="text" className='search-input' placeholder='Search Turf' />
                        </div>
                        <div className='turf-search'>
                            <input type="date" name='start' max={startmax} min={endmax} className='location-input' onChange={(e) => setStartDate(e.target.value)} value={startDate} placeholder='Date' />
                            {/* <input type="date" name='end' max={startmin} min={endmin} className='location-input' onChange={(e) => setEndDate(e.target.value)} value={endDate} placeholder='Date' /> */}
                        </div>
                        <div className='turf-search'>
                            <Link to="/turfs" className='search-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" /></svg></Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Search;