import React, { Component } from "react";
import { FaMailBulk, FaGithub, FaCode } from "react-icons/fa";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <ul>
          <ul>
            <li>Wey</li>
            <a href="#1">
              <li>
                <FaCode />
                Singa tu mandre
              </li>
            </a>
            <li>
              <a href="#2">
                <FaGithub />
                Chequeate pal de vaina de react
              </a>
            </li>
            <a href="#3">
              <li>
                <FaMailBulk />
                Chequea mi correo
              </li>
            </a>
          </ul>
        </ul>
      </div>
    );
  }
}
