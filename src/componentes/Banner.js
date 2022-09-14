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
          <li id="pp">Hey!</li>
          <li>
            <FaCode />
            This is a test
          </li>
          <li>
            <a
              href="https://github.com/NojovenNo?tab=repositories"
              target={"_blank"}
              rel="noreferrer"
            >
              <FaGithub />
              Some projects
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
            <Button variant="outline-primary">Download CV</Button>
          </li>
        </ul>

        <button className="scroll-down"></button>
      </div>
    );
  }
}
