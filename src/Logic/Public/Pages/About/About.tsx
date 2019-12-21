import React, {Component} from "react";
import {AboutBase} from "./About.style";
import {TitleCaptionJumbotron} from "../../components/TitleCaptionJumbotron/JumboTron";
import {Card, Col, Container, Row} from "react-bootstrap";
import {CardProfileStyleOne} from "../../components/CardProfileStyleOne/CardProfileStyleOne";


export class About extends Component {
    render() {
        return <AboutBase>
            <TitleCaptionJumbotron
                title={'About Us'}
                content={'Abigial and Our awesome team.'}/>

            <Container>

                {/* Team Card */}
                <Row className="justify-content-center mb-5">
                    <CardProfileStyleOne title={'Our Team'}/>
                </Row>

                {/* Google Map */}
                <Row className="justify-content-center">
                    <Col md={12}>
                        <h1 className="pb-3">Find us here</h1>
                        <iframe id="gmap_canvas" width="100%" height="400"
                                src="https://maps.google.com/maps?q=koblenz&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0}></iframe>
                    </Col>
                </Row>
            </Container>
        </AboutBase>
    }
}