import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg2 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from "../assets/images/experience.png";

import Subtitle from '../shared/subtitle';

import SearchBar from '../shared/searchBar';
import ServiceList from "../services/serviceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonaryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from  "../components/Testimonial/Testimonials";
import Newsletter from '../shared/Newsletter';



const Home = () => {
    return (
        <>

            {/*===========hero section start ==========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle d-flex align-items-center">
                                    <Subtitle Subtitle={'Know Before You Go'} />
                                    <img src={worldImg} alt=""></img>
                                </div>
                                <h1>Traveling opens the door to creating <span
                                    className="highlight">memories</span>
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente atque eius quae suscipit dolore dolor
                                    consequatur eligendi iste, cupiditate fuga. Alias inventore ea itaque ratione libero tempora, mollitia
                                    assumenda est omnis impedit ducimus. Voluptate quis neque natus tempora rem suscipit, similique quibusdam
                                    perspiciatis quas quos? Assumenda accusantium dolorum illum?
                                </p>
                            </div>
                        </Col>

                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-4">
                                <video src={heroVideo} alt="" controls />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                                <img src={heroImg2} alt="" />
                            </div>
                        </Col>

                        <SearchBar />
                    </Row>
                </Container>
            </section>

            {/*===========hero section start ==========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">What we serve</h5>
                            <h2 className="services__title">we offer our best services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/*=========== featured tour section start===========*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='mb-5'>
                            <Subtitle Subtitle={'Explore'} />
                            <h2 className="featured__tour-title">Our featured tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>

            {/*=========== featured tour section end=============*/}

            {/*============gexperience section start============*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                                <Subtitle Subtitle={'Experience'} />
                                <h2>With our all experience <br />we will serve you</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente
                                    <br />
                                    atque eius quae suscipit dolore dolor consequatur eligendi iste, cupiditate fugit
                                </p>
                            </div>

                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful trip</h6>
                                </div>

                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular Clients</h6>
                                </div>

                                <div className="counter__box">
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                           <div className="experience__img">
                              <img src = {experienceImg} alt="" />
                           </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*============gexperience section end============*/}
            
            {/*===========gallery section start=================*/}
               <section>
                  <Container>
                     <Row>
                        <Col lg='12'>
                           <Subtitle Subtitle={'Gallery'} />
                           <h2 className="gallery__title">Visit our customers tour gallery</h2>
                        </Col>
                        <Col lg='12'>
                          <MasonaryImagesGallery/>
                        </Col>
                     </Row>
                  </Container>
               </section>
            {/*===========gallery section end===================*/}

            {/*===========testimonial section start=================*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle Subtitle={'Fans Love'} />
                            <h2 className="testimonial__title">What our fans say about us</h2>
                        </Col>
                        <Col lg='12'>
                          <Testimonials/>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*===========testimonial section end=================*/}

        <Newsletter/>

        </>
    );
};

export default Home