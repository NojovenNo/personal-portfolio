import React from "react";
import { Button } from "react-bootstrap";
import { FaGithub, FaCode } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-scroll";

function Banner() {
  return (
    <div className="content">
      <ul>
        <li>Hey!</li>
        <li>
          <a href="#1">
            <Link
              to="container-aboutme"
              spy={true}
              smooth={true}
              offset={50}
              duration={200}
            >
              <FaCode />
              This is a test
            </Link>
          </a>
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
          <a
            href="https://www.linkedin.com/in/maximoespinaldelgado/"
            target={"_blank"}
            rel="noreferrer"
          >
            <IoIosMail />
            My email
          </a>
        </li>
        <li>
          <Button
            href="/CV.pdf"
            target="_blank"
            download="CV.pdf"
            rel="noreferrer"
            variant="outline-primary"
          >
            Download CV
          </Button>
        </li>
      </ul>
      <Link
        to="container-aboutme"
        spy={true}
        smooth={true}
        offset={50}
        duration={200}
      >
        <button className="scroll-down"></button>
      </Link>
    </div>
  );
}

export default Banner;
