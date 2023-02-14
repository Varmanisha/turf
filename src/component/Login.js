import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onUpdateField = (e) => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2));
    };



    return (
        <>
            <div className='login-modal'>
                <Container>
                    <form onSubmit={onSubmitForm}>
                        <h2 className="mb-4">Login</h2>
                        <Row>
                            <Col lg={12}>
                                <label className='mb-2' htmlFor="email">Email</label>
                                <input type="email" value={form.email}  name="email" onChange={onUpdateField} />
                            </Col>
                            <Col lg={12}>
                                <label className='mb-2' htmlFor="password">Password</label>
                                <input type="password" value={form.password}  name="password" onChange={onUpdateField} />
                            </Col>
                            <Col lg={12}>
                                <label className='mb-2' htmlFor="password">Confirm Password</label>
                                <input type="password" value={form.confirmPassword}  name="confirmPassword" onChange={onUpdateField} />
                            </Col>
                            <Col lg={12}>
                                {/* <Link className='common-btn mt-2'>Submit</Link> */}
                                <input type="submit" className="common-btn" value='Submit' />
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default Login;