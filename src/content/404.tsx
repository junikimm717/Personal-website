import React from "react";
import Page, { Description } from "../components/Page";

const NotFound = () => (
  <React.Fragment>
    <Page title="404">
      <Description> The Requested Resource has not been found. </Description>
    </Page>
  </React.Fragment>
);

export default NotFound;
