import { Card, CardGroup } from "../components/Card";
import Page, { Description } from "../components/Page";

const Achievements = () => (
  <Page title="Achievements">
    <Description>
      I have competed in numerous academic olympiads and competitions as of the
      date of writing.
    </Description>
    <CardGroup>
      <Card
        title="2021 USAJMO Qualifier"
        href="https://www.maa.org/sites/default/files/pdf/AMC/usamo/2021/JMO%20List.pdf"
      >
        I scored 141/150 on the AMC 10A and 10/15 on the AIME I, which qualified
        me for the 2021 United States of America Junior Mathematical Olympiad.
      </Card>
      <Card
        title="USACO Platinum Competitor"
        href="http://usaco.org/current/data/jan21_gold_results.html"
      >
        In the Gold Division of the January Contest in the 2021 USA Computing
        Olympiad, I scored 917 out of 1000 and was promoted to the Platinum
        Division.
      </Card>
      <Card title="2021 USNCO National Exam Qualifier">
        I qualified for the National Exam in the US National Chemistry Olympiad
        through the Silicon Valley Division.
      </Card>
      <Card
        title="2021 ACSL Gold Medalist"
        href="https://www.scores.acsl.org/leaderboard/finals/i/g/"
      >
        I receieved a Gold Medal in the National Final of the Intermediate
        Division of the American Computer Science League (ACSL) by scoring 40
        out of 40 points.
      </Card>
      <Card
        title="2021 Canadian Computing Competition"
        href="https://cemc.uwaterloo.ca/contests/past_contests/2021/2021CCCResults.pdf"
      >
        I finished in the top 75 out of 2920 competitors in the Senior Division
        of the 2021 Canadian Computing Competition with a score of 58/75.
      </Card>
      <Card title="2021 National Latin Exam">
        I received a Summa Cum Laude Gold Medal in the 2021 National Latin Exam
        Beginning Latin Exam.
      </Card>
      <Card title="CS Mines HSPC" href="https://mines21.kattis.com/standings">
        I led a team of three students and placed second out of 56 teams in the
        High School Programming Competition hosted by the Colorado School of
        Mines.
      </Card>
    </CardGroup>
  </Page>
);

export default Achievements;
