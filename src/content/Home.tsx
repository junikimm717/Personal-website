import React from 'react';
import Header from '../components/Header';
import Page, { Description } from '../components/Page';

const Home = () => (
	<React.Fragment>
		<Header />
		<Page title='About Me'>
			<Description>
				I am a sophomore at Stanford Online High School who is interested in
				Unix-like operating systems, web development, and general-purpose
				scripting. Since my first encounter with programming via the USA
				Computing Olympiad, I have explored beyond the bounds of competitive
				programming in a journey to find myself. <br /> <br /> Outside of
				programming, I participate extensively in competition math and train
				casually in the sports of fencing and boxing.
				<br /> <br /> I also have a particular affinity for the Korean game of
				Go-Stop, which I play on a regular basis.
			</Description>
		</Page>
	</React.Fragment>
);

export default Home;
