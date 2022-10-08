import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import contatcimg from "../assets/img/contact-img.svg";


    export const Contact = () =>{
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2> Get in touch with me!</h2>
                        <form >
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value="First Name" placeHolder="First Name"  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value="Last Name" placeHolder="Last Name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value="Email address"  placeHolder="Email Address" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value="Phone Number" placeHolder="Phone No." />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <textarea row="6" value="Message" placeHolder="Message" />
                                    <button type="submit"><span>Submit</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col md={6}>
                        <img src={contatcimg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
