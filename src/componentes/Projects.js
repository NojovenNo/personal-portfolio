import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export default class Projects extends Component {
  render() {
    return (
      <div id="content-projects">
        <div id="content-projects-code">
          <Container fluid="sm">
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      "https://ps.w.org/image-comparison/assets/icon-256x256.png?rev=2587037"
                    }
                  />
                  <Card.Body>
                    <Card.Title>Ajax</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit unde ex enim cupiditate, quae distinctio sequi
                      reprehenderit similique fugit om
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      "https://ps.w.org/image-comparison/assets/icon-256x256.png?rev=2587037"
                    }
                  />
                  <Card.Body>
                    <Card.Title>Ajax</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit unde ex enim cupiditate, quae distinctio sequi
                      reprehenderit similique fugit om
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      "https://ps.w.org/image-comparison/assets/icon-256x256.png?rev=2587037"
                    }
                  />
                  <Card.Body>
                    <Card.Title>Ajax</Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit unde ex enim cupiditate, quae distinctio sequi
                      reprehenderit similique fugit om
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
