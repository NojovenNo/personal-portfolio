import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaMailBulk, FaGithub, FaCode } from "react-icons/fa";

export default class Banner extends Component {
  render() {
    return (
      <IconContext.Provider value={{ color: "cornflowerblue", size: "25px" }}>
        <div>
          <ul>
            <ul>
              <li>Hey!</li>
              <li>
                <FaCode />
                This is a test
              </li>

              <li>
                <FaGithub />
                Look for it on GitHub
              </li>

              <li>
                <FaMailBulk />
                My email
              </li>
            </ul>
          </ul>
        </div>
      </IconContext.Provider>
    );
  }
}
