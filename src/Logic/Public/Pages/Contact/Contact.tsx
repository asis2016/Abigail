import React, {Component} from "react";
import {ContactBase} from "./Contact.style";
import {TitleCaptionJumbotron} from "../../components/TitleCaptionJumbotron/JumboTron";
import {Col, Container, Row} from "react-bootstrap";


export class Contact extends Component {
    render() {
        return <ContactBase>
            <TitleCaptionJumbotron
                title={'Contact Us'}
                content={'Contact us for more information.'}/>

            <Container fluid>
                <Row className="justify-content-center">

                    <Col md={4}>
                        {/* Google Map */}
                                <iframe id="gmap_canvas" width="100%" height="400"
                                        src="https://maps.google.com/maps?q=koblenz&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
                    </Col>

                    <Col md={4} className="pl-5 pr-5">
                        {/* Contact Form */}
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" className="form-control" id="name" placeholder="John Doe"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea className="form-control" id="message" rows={4} placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </ContactBase>
    }
}