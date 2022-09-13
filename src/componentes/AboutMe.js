import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container id="container-aboutme">
          <Row>
            <Col xs={6}>
              <div id="about-me">
                <h2>Sobre mi</h2>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatum nobis possimus nihil dolorem harum. Odit sint,
                  possimus velit, ullam ipsam aspernatur nemo quae similique ex,
                  minima nostrum explicabo! Omnis, quia.
                </h5>
              </div>
            </Col>
            <Col xs={6}>
              <div id="about-me-tec">
                <Row>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                  <Col xs={6} md={4}>
                    xs=6 md=4
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
