import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";

import achievements from "../logos/achievements.svg";
import logo from "../logos/logo.svg";
import pixel from "../logos/pixel.png";
import project from "../logos/projects.png";
import phone from "../logos/phone.svg";

import "../styles/Navbar.scss";

interface ButtonProps {
  picture: string;
  href: string;
  x: number;
  right: boolean;
  alt: string;
}

function Button(props: ButtonProps) {
  return (
    <>
      <a href={props.href}>
        <div
          className="button"
          style={props.right ? { right: props.x } : { left: props.x }}
        >
          <img className="button-img" src={props.picture} alt={props.alt} />
        </div>
      </a>
    </>
  );
}

export default function Navbar() {
  const split = useMediaQuery({ maxWidth: 520 });
  const left = (
    <React.Fragment>
      <Button href="/" picture={logo} x={0} right={false} alt="Home" />
      <a href="/">
        <h1 id="title"> Juni Kim </h1>
      </a>
    </React.Fragment>
  );
  const right = (
    <React.Fragment>
      <Button
        href="/achievements"
        picture={achievements}
        x={split ? 0 : 180}
        right={!split}
        alt="Achievements"
      />
      <Button
        href="/school"
        picture={pixel}
        x={split ? 60 : 120}
        right={!split}
        alt="School"
      />
      <Button
        href="/projects"
        picture={project}
        x={split ? 120 : 60}
        right={!split}
        alt="Projects"
      />
      <Button
        href="/contact"
        picture={phone}
        x={split ? 180 : 0}
        right={!split}
        alt="Contact"
      />
    </React.Fragment>
  );
  if (split) {
    return (
      <Fragment>
        <div className="navbar" id="navbar1">
          {left}
        </div>
        <div className="navbar" id="navbar2">
          {right}
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="navbar" id="navbar1">
          {left} {right}
        </div>
      </Fragment>
    );
  }
}
