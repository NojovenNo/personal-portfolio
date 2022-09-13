import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaCode } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
export default class Banner extends Component {
  render() {
    return (
      <div className="content">
        <ul>
          <li>Hey!</li>
          <li>
            <FaCode />
            Soy Maximo Espinal
          </li>

          <li>
            <FaGithub />
            Alguno de mis projectos
          </li>
          <li>
            <BsLinkedin />
            Linkedin
          </li>

          <li>
            <IoIosMail />
            My email
          </li>
          <Button variant="outline-primary">Descargar CV</Button>
        </ul>
      </div>
    );
  }
}
