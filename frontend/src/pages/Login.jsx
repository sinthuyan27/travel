import React from 'react'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { useState } from 'react';

const Login = () => {

        const [credentials, setCredentials] = useState({
            email:'undifined',
            password:'undifined'
        });


    const handelChange = e => { 
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const handleClick = e =>{
        e.preventDefault()
    }


    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login__content d-flex  justify-content-center">
                            <div className="login__img">
                                <img src={loginImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Login</h2>

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input type="email" placeholder='Email' required id="email" onChange={handelChange}/>
                                    </FormGroup>

                                    <FormGroup>
                                        <input type="password" placeholder='Password' required id="password" onChange={handelChange}/>
                                    </FormGroup>
                                <Button className="btn secondary__btn auth__btn" type="submit">
                                    Login
                                </Button>
                                </Form>
                                <p>Dont't have account?<Link to='/register'>Creat</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Login