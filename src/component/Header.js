import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../assets/image/logo.png';
// import Link from 'react'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {

    const navMenu = [
        {
            login: 'Login /',
            signup: 'Sign Up',
            pathlogin: '/login',
            pathsignup: '/signup',
        },
    ]
    return (
        <>
            <header>
                <nav>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <a href="javascript:;" className='navbar-brand'>
                                    <img src={Logo} alt="" />
                                </a>
                            </Col>
                            <Col lg={8}>
                                <div className="navbar-collapse" id="navbarNav">
                                    <ul className="header-menu">
                                        {navMenu.map((data, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={data.pathlogin}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                                        <p>{data.login}</p></Link>
                                                    <Link to={data.pathsignup}>{data.signup}</Link>
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header;

