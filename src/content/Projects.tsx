import { Card, CardGroup } from '../components/Card';
import Page, { Description } from '../components/Page';

const Projects = () => (
	<Page title='Projects'>
		<Description>
			Below are some notable/landmark projects I have done so far
		</Description>
		<CardGroup>
			<Card title='Go-Stop Tools' href='https://gostoptools.github.io'>
				A series of projects for assisting my endeavors into the game of
				Go-Stop.
			</Card>
			<Card title='MAA Tester' href='https://maatester.com'>
				A Web App for keeping track of progress while preparing for the AMC and
				AIME.
			</Card>
			<Card
				title='Patternmatch'
				href='https://git.junickim.me/junikimm717/patternmatch'
			>
				An R Script designed to help filter GC-HRMS data for halogenated
				compounds in a research project on the human exposome.
			</Card>
			<Card title='mt' href='https://github.com/junikimm717/mt'>
				A Rust program for joining zoom meetings through a TOML configuration
				file.
			</Card>
			<Card
				title='Latin 1 Final Project'
				href='https://github.com/junikimm717/OLA11-Final-Project'
			>
				Flask + Pymongo server with a bash-based package manager for installing
				vocabulary
			</Card>
			<Card title='Personal Website'>
				This website, written in React and SCSS
			</Card>
		</CardGroup>
	</Page>
);

export default Projects;
