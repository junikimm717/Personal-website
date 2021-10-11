import React from "react";

import "../styles/Card.scss";

interface Props {
  title: string;
  href?: string;
  children?: React.ReactNode;
}

export function Card(props: Props) {
  const children = props.children ? (
    <div className="carddesc">{props.children}</div>
  ) : null;
  const component = (
    <>
      <h2 className="cardtitle"> {props.title} </h2>
      {children}
    </>
  );
  return (
    <>
      {props.href ? (
        <a href={props.href} target="new" className="card-href card">
          {component}
        </a>
      ) : (
        <div className="card">{component}</div>
      )}
    </>
  );
}

export function CardGroup(props: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <>
      <div className="cardgroup">{props.children}</div>
    </>
  );
}
