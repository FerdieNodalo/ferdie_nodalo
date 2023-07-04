const Home = () => {
	return (
		<main className='home' id='home'>
			<section className='home_content'>
				<h1>
					Hi, I'm <span>Ferdie Nodalo</span>
				</h1>

				<div className='text_animate'>
					<h3>Full-Stack Web Developer</h3>
				</div>

				<p>
					A recent graduate from KodeGo bootcamp with a passion for building
					websites. I love coding and take a professional approach to my work. I
					am dedicated to expanding my skills and knowledge to grow as a web
					developer in this dynamic field.
				</p>

				<div className='btn_box'>
					<a href='#contact' className='btn'>
						Contact Me
					</a>
					<a
						href='https://drive.google.com/file/d/16yJJ0Z4TmJxiOvXQphlBJ4hgfJ5fIu7z/view?usp=sharing'
						className='btn'
					>
						Resume
					</a>
				</div>

				<div className='social_media-icons'>
					<a href='https://www.facebook.com/kafrederick.nodalo/'>
						<i className='bx bxl-facebook'></i>
					</a>
					<a href='https://www.linkedin.com/in/ferdie-nodalo-38a092270/'>
						<i className='bx bxl-linkedin-square'></i>
					</a>
					<a href='https://github.com/FerdieNodalo?tab=repositories'>
						<i className='bx bxl-github'></i>
					</a>
				</div>

				<div className='home_img-hover'></div>
			</section>
		</main>
	);
};

export default Home;
