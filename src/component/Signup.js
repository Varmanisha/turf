import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Formerror from "./Formerror";

const Signup = () => {
    const [error, setError] = useState({})
    const [check, setCheck] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
    })
    function handleChange(e) {
        setCheck({ ...check, [e.target.name]: e.target.value })
    }
    const formerror = (check) => {
        let error = {}
        if(!check.name){
            error.name = "Name Required"
        }
        else if (!/^[A-Z]{5,10}$/i.test(check.name)){
            error.name = "Error must be more than 5 character no number require"
        }
        if (!check.email) {
            error.email = "Email Required"
        }
        else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(check.email))) {
            error.email = 'Invalid email including @'
        }
        if (!check.password) {
            error.password = "Password is required"
        }
        else if ((!/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i.test(check.password))){
            error.password = "Invalid Password"
        }
        if (!check.mobile) {
            error.mobile = "Mobile is required"
        }
        else if ((!/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(check.mobile))){
            error.mobile = "Invalid Mobile Number"
        }
            return error;
    }
    function handleSubmit(e) {
        e.preventDefault();
        setError(formerror(check));
        // setCheck('')
    }
    useEffect(() => {
        if (Object.keys(error).length === 0 && (check.name !== '' && check.email)) {
            alert("form submited");
        }
    }, [error])
    console.log(check)
    console.log(error)


    return (
        <>
            <div className='login-modal'>
                <Container>
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Signup</h2>
                        <Row>
                            <Col lg={12}>
                                <label className='mb-2'>Name</label>
                                <input type="text" placeholder="Enter Your Name" name="name" value={check.name} onChange={handleChange} />
                                {error.name && <p style={{ color: 'red', fontSize: '13px' }}>
                                    {error.name}</p>}
                            </Col>
                            <Col lg={12}>
                                <label className='mb-2'>Email</label>
                                <input type="email" placeholder='Enter Your Email' name="email" value={check.email} onChange={handleChange} />
                                {error.email && <p style={{ color: 'red', fontSize: '13px' }}>
                                    {error.email}</p>}
                            </Col>
                            <Col lg={12}>
                                <label className='mb-2'>Password</label>
                                <input type="password" placeholder='Enter Your Password' name="password" value={check.password} onChange={handleChange} />
                                {error.password && <p style={{ color: 'red', fontSize: '13px' }}>
                                    {error.password}</p>}
                            </Col>
                            <Col lg={12}>
                                <label className='mb-2'>Mobile No</label>
                                <input type="phone" placeholder="Enter Your Mobile No" name="mobile" value={check.mobile} onChange={handleChange} />
                                {error.mobile && <p style={{ color: 'red', fontSize: '13px' }}>
                                    {error.mobile}</p>}
                            </Col>
                            <Col lg={12}>
                                <label className='mb-2'>Address</label>
                                <input type="text" placeholder="Enter Your Address" />
                            </Col>
                            <Col lg={12}>
                                <button className='submit-btn mt-2'>Submit</button>
                            </Col>
                        </Row>
                    </form>
                </Container>
            </div>
        </>
    )
}

export default Signup;