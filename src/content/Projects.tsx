import { Card, CardGroup } from "../components/Card";
import Page, { Description } from "../components/Page";

const Projects = () => (
  <Page title="Projects">
    <Description>
      Below are some notable/landmark projects I have done so far
    </Description>
    <CardGroup>
      <Card title="MAA Tester" href="https://maatester.com">
        A Web App for keeping track of progress while preparing for math
        contests.
      </Card>
      <Card
        title="Patternmatch"
        href="https://git.junickim.me/junikimm717/patternmatch"
      >
        An R Script designed to help filter HRMS Peaks with halogenated
        compounds in linear time (has multicore support on UNIX)
      </Card>
      <Card title="mt" href="https://gitlab.com/jpkg/mt">
        A Perl script for automatically opening meetings using a TOML
        configuration file
      </Card>
      <Card
        title="Latin 1 Final Project"
        href="https://github.com/junikimm717/OLA11-Final-Project"
      >
        A rudimentary API written in Flask + Pymongo that can automatically
        download latin vocabulary and conjugate it (only works for regular verbs
        and nouns)
      </Card>
      <Card title="Personal Website">
        This website, written in React and SCSS
      </Card>
    </CardGroup>
  </Page>
);

export default Projects;
