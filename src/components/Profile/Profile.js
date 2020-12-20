import React from "react";
import Image from "./avatar.png";

export function Profile() {
  const occupation = "Student";
  return (
    <div className="w-50 center mv5">
      <div className="h-75 bg-green center pt4 pb2 br1">
        <div className="mw5 center">
          <img src={Image} className="br-100" />
        </div>
        <div className="w5 tc center">
          <h1>Eric Joe</h1>
          <h2> Student </h2>
        </div>
      </div>
      <div className="mt center mt4">
        <label className="f4">Email: </label>
        <input type="email"></input>
        <h2>Summary</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor
          pretium mauris, eget rutrum odio aliquet ut. Cras pellentesque pretium
          diam. Fusce varius quam at mi viverra, nec semper risus malesuada.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Praesent at pulvinar dolor.
        </p>

        <div className="mw3 center">
          <a
            href="#"
            className="bg-green w4 center no-underline ph4 pv2 black f4 tc br4 "
          >
            Save
          </a>
        </div>
      </div>
    </div>
  );
}
