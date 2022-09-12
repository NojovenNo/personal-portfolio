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
              <li>Wey</li>
              <li>
                <FaCode />
                Singa tu mandre
              </li>

              <li>
                <FaGithub />
                Chequeate pal de vaina de react
              </li>

              <li>
                <FaMailBulk />
                Chequea mi correo
              </li>
            </ul>
          </ul>
        </div>
      </IconContext.Provider>
    );
  }
}
