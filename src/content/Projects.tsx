import { Card, CardGroup } from "../components/Card";
import Page, { Description } from "../components/Page";

const Projects = () => (
  <Page title="Projects">
    <Description>
      Below are some notable/landmark projects I have done so far
    </Description>
    <CardGroup>
      <Card
        title="Go-stop datacollection"
        href="https://github.com/gostoptools/datacollection"
      >
        A complete expressjs REST API and Gatsby Client to collect data in games
        of Go-Stop.
      </Card>
      <Card title="MAA Tester" href="https://maatester.com">
        A Web App for keeping track of progress while preparing for math
        contests.
      </Card>
      <Card
        title="Patternmatch"
        href="https://git.junickim.me/junikimm717/patternmatch"
      >
        An R Script designed to help filter HRMS Peaks with halogenated
        compounds in roughly linear time (with multicore support)
      </Card>
      <Card title="mt" href="https://github.com/junikimm717/mt">
        A Rust program for joining zoom meetings through a TOML configuration
        file.
      </Card>
      <Card
        title="Latin 1 Final Project"
        href="https://github.com/junikimm717/OLA11-Final-Project"
      >
        Flask + Pymongo API with a dead-simple package manager
      </Card>
      <Card title="Personal Website">
        This website, written in React and SCSS
      </Card>
    </CardGroup>
  </Page>
);

export default Projects;
