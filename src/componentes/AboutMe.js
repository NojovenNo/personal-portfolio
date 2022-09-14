import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";
import {
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container id="container-aboutme">
          <IconContext.Provider value={{ size: "50px" }}>
            <Row>
              <Col xs={6}>
                <div id="about-me">
                  <h2>About Me</h2>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum nobis possimus nihil dolorem harum.
                  </h5>
                </div>
              </Col>
              <Col xs={6}>
                <div id="about-me-tec">
                  <h2>Technologys</h2>
                  <Row>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <FaHtml5 />
                      <br />
                      <h6>HTML</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <FaCss3Alt />
                      <br />
                      <h6>CSS</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <FaBootstrap />
                      <br />
                      <h6>BootStrap</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <FaJs />
                      <br />
                      <h6>JavaScript</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <FaReact />
                      <br />
                      <h6>React</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <FaPython />
                      <br />
                      <h6>Python</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <FaFigma />
                      <br />
                      <h6>Figma</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <SiMicrosoftsqlserver />
                      <br />
                      <h6>Microsoft SQL server</h6>
                    </Col>
                    {/* Icon */}
                    <Col xs={6} md={4}>
                      <GrMysql />
                      <br />
                      <h6>MySQL</h6>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </IconContext.Provider>
        </Container>
      </div>
    );
  }
}
