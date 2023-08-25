import React from 'react';
import '../components/AboutPage.css';

const AboutPage = () => {
	return (
   
		<div>
   
			<h1>About the IMBAD Team</h1>
			<p>
				<h3><b>IMBAD</b> (I'M BAD)</h3> Are a team of five talented and determined women who are
				Pursuit fellows, training to become full-stack software developers.<br/>
				Together we are utilizing the React skills we have learned thus far to
				create a "Youtube Clone" application. Using YouTube's API, we're
				crafting a platform that allows users to seamlessly explore, search, and
				play YouTube videos directly on our application. As we navigate the
				intricacies of integrating APIs and refining user interfaces, we're
				building a space that mirrors the functionality of the renowned YouTube
				platform.
			</p>
			<br></br>
			<div className="image-container">
				<img src="src/assets/iris.jpeg" alt="Iris" className="profile-image" />
			</div>
			<h2>IRIS</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat
				elementum mi ut suscipit. Aliquam erat volutpat. Quisque tincidunt
				tortor nisi, nec iaculis augue semper non. Vestibulum ante ipsum primis
				in faucibus orci luctus et ultrices posuere cubilia curae; Aenean at
				nulla vel ipsum sollicitudin tempus. Suspendisse fermentum sodales
				tortor, hendrerit scelerisque nulla congue ut. Donec ut efficitur dui.
				Sed justo libero, ornare sit amet leo vitae, porttitor laoreet ipsum.
				Aenean auctor porta libero, a dapibus enim vehicula sit amet. Sed a
				lacus cursus, hendrerit dui ut, imperdiet sem. In velit velit, vulputate
				a odio nec, fermentum porttitor elit.
			</p>
			<br></br>

			<div className="image-container">
				<img
					src="src/assets/Marcia.jpeg"
					alt="Marcia"
					className="profile-image"
				/>
			</div>
			<h2>MARCIA</h2>
			<p>
				Marcia is a driven home-based bakery owner who's passionate about
				creating custom cakes and treats. As a Pursuit fellow on the path to
				full-stack software development, she merges her love for crafting from
				scratch with her desire of learning to code. Marcia enjoys traveling,
				exploring new cultures, and trying new foods.
			</p>
			<br></br>

			<div className="image-container">
				<img
					src="src/assets/Bethany.jpeg"
					alt="Bethany"
					className="profile-image"
				/>
			</div>
			<h2>BETHANY</h2>
			<p>
				Bethany (nicknamed Fig) is a freelance illustrator and multimedia artist
				who has interest in all forms of expression and creativity. Currently a
				barista and studying full-time under the Pursuit Fellowship for a career
				in tech, Bethany enjoys Dungeons & Dragons in her free time with their
				friends, and has a passion for all things Halloween. Bethany uses
				she/they pronouns and speaks English and Spanish fluently.
			</p>
			<br></br>

			<div className="image-container">
				<img src="src/assets/Nicki.jpg" alt="Nicki" className="profile-image" />
			</div>
			<h2>ANICKA</h2>
			<p>
				Nicki is a multi-creative entrepreneur whom is updating her arsenal of
				skills in order to positively impact communities and eventually the
				world. She is a mobile cosmetologist specializing in Natural Hair Care.
				In her free time (that doesn't really exist) she fine tunes her
				interpersonal and intrapersonal skills through group collaborations
				whilst navigating the complexities that is the individual human
				existence.
			</p>
			<br></br>

			<div className="image-container">
				<img
					src="src/assets/daryna.jpeg"
					alt="Daryna"
					className="profile-image"
				/>
			</div>
			<h2>DARYNA</h2>
			<p>
				Daryna is entrepreneurial marketing professional with background in
				sales and event planning. Currently enrolled in Full Stack web
				development school Pursuit. Experienced networker with vast contacts in
				multiple industries in NYC and beyond. She is focusing on seeking out
				top creative talent and bringing them together with other innovators to
				create partnerships that generate amazing new products, campaigns and
				long-lasting relationships. Daryna is also very passionate about the
				startup industry and excited to build relationships with teams of people
				building amazing products, and helping them make connections to people
				who can help them achieve their vision. Fluent is English, Ukrainian and
				English.
			</p>
		</div>
	);
};

export default AboutPage;
