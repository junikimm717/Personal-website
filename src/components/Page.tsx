import React from "react";

import "../styles/Page.scss";

interface Props {
  children?: React.ReactNode;
  title: string;
}

export default function Page(props: Props) {
  return (
    <div className="page">
      <h1 className="page">{props.title}</h1>
      <div className="page">{props.children}</div>
    </div>
  );
}

export function Description(props: { children: React.ReactNode }) {
  return <div style={{ fontSize: 20, margin: 10 }}>{props.children}</div>;
}
