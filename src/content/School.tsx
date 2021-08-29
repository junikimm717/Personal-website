import { Card, CardGroup } from "../components/Card";
import Page, { Description } from "../components/Page";

const School = () => (
  <Page title="School">
    <Description>
      I am currently a sophomore at{" "}
      <a
        href="https://ohs.stanford.edu"
        style={{ textDecoration: "underline" }}
        target="new"
      >
        Stanford Online High School
      </a>
      , where I participate in a number of activities.
    </Description>
    <CardGroup>
      <Card title="2020-21 AP Calculus BC TA">
        For the 2020-21 school year, I was the TA of the AP Calculus BC Class
        under Ms. Revathi Sundaresan, holding office hours and review sessions
        for major tests.
      </Card>
      <Card title="2021-22 Peer Tutor for Mathematics and Chemistry">
        For the 2021-22 school year, I am a peer tutor of all mathematics
        courses up to Calculus BC and all chemistry courses.
      </Card>
      <Card title="OHS Chemistry Olympiad Club">
        I am currently a member of the OHS Chemistry Olympiad Club, which holds
        regular sessions concerning concepts in the USNCO.
      </Card>
      <Card title="OHS Math Competition Club">
        I currently participate in the OHS Math Competition Club, which proctors
        and participates in numerous math contests.
      </Card>
    </CardGroup>
  </Page>
);

export default School;
