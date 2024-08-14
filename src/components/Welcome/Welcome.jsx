import '../Welcome/Welcome.scss'

export default function Welcome() {
	return (
		<section className='welcome-page'>
			<div className='container'>
				<div className='welcome__page-text'>
					<p className='welcome__text-welcome'>Welcome to the club</p>
					<h1>
						Choose Your Programs, <br />
						Pick Your Meal, <br />
						Let’s Get Healthy.
					</h1>
					<p className='welcome-text__information'>
						StayHealty provides Online Training, and Consultation About Diet and
						Exercise tailored based <br /> on user needs. We will provide a
						training model that can be accessed anytime and <br />
						anywhere with the best trainers.
					</p>
				</div>
				<div className='welcome-btns'>
					<ul>
						<li>
							<a className='join-btn' href='#!'>
								Join Now
							</a>
						</li>
						<li>
							<a className='contact-btn' href='#!'>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div className='welcome-video'>
					<div className='play-btn'>
						<img
							className='play-btn__center'
							src='/play-btn-center.png'
							alt=''
						/>
						<img className='play-btn__bg' src='/play-btn.png' alt='' />
					</div>
					<div className='men-png'></div>
				</div>
			</div>
		</section>
	)
}
