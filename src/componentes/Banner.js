import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaCode } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
export default class Banner extends Component {
  render() {
    return (
      <div className="content-block">
        <div className="content">
          <ul>
            <li id="pp">Hey!</li>
            <li>
              <FaCode />
              Soy Maximo Espinal
            </li>

            <li>
              <a
                href="https://github.com/NojovenNo?tab=repositories"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithub />
                Algunos de mis projectos
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/maximoespinaldelgado/"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsLinkedin />
                Linkedin
              </a>
            </li>
            <li>
              <IoIosMail />
              My email
            </li>
            <li>
              <Button variant="outline-primary">Descargar CV</Button>
            </li>
          </ul>
        </div>

        <button className="scroll-down"></button>
      </div>
    );
  }
}
