import React from 'react'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { useState } from 'react';

const Register = () => {

    const [credentials, setCredentials] = useState({
        username: 'undifined',
        email: 'undifined',
        password: 'undifined'
    });


    const handelChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const handleClick = e => {
        e.preventDefault()
    }


    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login__content d-flex  justify-content-center">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Register</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="text" placeholder='Username' required id="username" onChange={handelChange} />
                                    </FormGroup>

                                    <FormGroup>
                                        <input type="email" placeholder='Email' required id="email" onChange={handelChange} />
                                    </FormGroup>

                                    <FormGroup>
                                        <input type="password" placeholder='Password' required id="password" onChange={handelChange} />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth__btn" type="submit">
                                        Creat Account
                                    </Button>
                                </Form>
                                <p>Already have account?<Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register