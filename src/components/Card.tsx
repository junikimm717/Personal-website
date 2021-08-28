import React from "react";
import { useMediaQuery } from "react-responsive";

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
    <div className={props.href ? "card-href card" : "card"}>
      <h2 className="cardtitle"> {props.title} </h2>
      {children}
    </div>
  );
  return (
    <>
      {props.href ? (
        <a href={props.href} target="new">
          {component}
        </a>
      ) : (
        component
      )}
    </>
  );
}
//

export function CardGroup(props: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  let c: number = 4;
  if (useMediaQuery({ maxWidth: 350 * 4 })) c = 3;
  if (useMediaQuery({ maxWidth: 350 * 3 })) c = 2;
  if (useMediaQuery({ maxWidth: 350 * 2 })) c = 1;

  const children = React.Children.toArray(props.children);

  const ar: React.ReactNode[][] = [];
  for (let i = 0; i < children.length; i++) {
    if (i % c === 0) ar.push([]);
    ar[ar.length - 1].push(children[i]);
  }
  return (
    <>
      {ar.map((x) => (
        <div className="cardgroup">{x}</div>
      ))}
    </>
  );
}
