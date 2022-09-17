import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IconContext } from "react-icons";

function Projects() {
  return (
    <div id="content-projects">
      <div id="content-projects-code">
        <Container fluid="sm">
          <IconContext.Provider
            value={{ size: "50px", className: "icons-project" }}
          >
            <Row>
              <Col>
                <Card
                  className="card border-light"
                  style={{
                    width: "18rem",
                    marginBottom: "25px",
                    marginRight: "50px",
                  }}
                  xs={6}
                  md={4}
                >
                  <Card.Img
                    variant="top"
                    src={
                      "https://miro.medium.com/max/1400/1*qHYa7LoYK1myo_aJw_7VIA.gif"
                    }
                  />
                  <Card.Body>
                    <Card.Title>Ajax</Card.Title>
                    <Card.Text className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit unde ex enim cupiditate.
                    </Card.Text>
                    <FaGithub />
                    <RiComputerLine />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="card border-light"
                  style={{
                    width: "18rem",
                    marginBottom: "25px",
                    marginRight: "50px",
                  }}
                  xs={6}
                  md={4}
                >
                  <Card.Img
                    variant="top"
                    src={
                      "https://res.cloudinary.com/practicaldev/image/fetch/s--HIlaM9oF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/h5ndo2tgikqut8xjflwb.gif"
                    }
                  />
                  <Card.Body>
                    <Card.Title>Ajax1</Card.Title>
                    <Card.Text className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit unde ex enim cupiditate.
                    </Card.Text>
                    <FaGithub />
                    <RiComputerLine />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="card border-light"
                  style={{
                    width: "18rem",
                  }}
                  xs={6}
                  md={4}
                >
                  <Card.Img
                    variant="top"
                    src={
                      "https://d33wubrfki0l68.cloudfront.net/24a08b5c1413879c9b69b2117fbb92675a89bc1e/b12e4/assets/images/vscode-feature.gif"
                    }
                  />
                  <Card.Body>
                    <Card.Title>Ajax</Card.Title>
                    <Card.Text className="text-center">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit unde ex enim cupiditate.
                    </Card.Text>
                    <FaGithub />
                    <RiComputerLine />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </IconContext.Provider>
        </Container>
      </div>
    </div>
  );
}
export default Projects;
