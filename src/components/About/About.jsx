import '../About/About.scss'

export default function About() {
	return (
		<section className='about-page'>
			<div className='about-page_title'>
				<p>about us</p>
				<img className='qoutes-left' src='/quotes.png' alt='' />
				<img className='qoutes-right' src='/quotes.png' alt='' />
				<h5>
					Benefits of joining <br /> with us
				</h5>
			</div>
			<div className='about-page__info-row'>
				<div className='line__first'></div>
				<div className='line__second'></div>
				<div className='info_text'>
					<div className='years'>
						<ul>
							<li>
								<p className='value'>5+</p>
							</li>
							<li>
								<p className='description'>Years Of Journey</p>
							</li>
						</ul>
					</div>
					<div className='clients'>
						<ul>
							<li>
								<p className='value'>500+</p>
							</li>
							<li>
								<p className='description'>Happy Clients</p>
							</li>
						</ul>
					</div>
					<div className='members'>
						<ul>
							<li>
								<p className='value'>400+</p>
							</li>
							<li>
								<p className='description'>Dedicated Members</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='about-page__menu'>
				{' '}
				<div className='flexible'>
					<img src='/menu__flexible.png' alt='' />
					<div className='flexible__text'>
						<p className='menu__name'>flexible class</p>
						<p className='menu__description'>
							you can adapt the class to your busy life very easily <br />{' '}
							Workout everytime and everywhere.
						</p>
					</div>
				</div>
				<div className='trainers'>
					<img src='/menu__trainers.png' alt='' />
					<div className='trainers__text'>
						<p className='menu__name'>Best Trainers</p>
						<p className='menu__description'>
							Our trainers is very profesional, very motivated and <br /> funny.
						</p>
					</div>
				</div>
				<div className='progress'>
					<img src='/menu__progress.png' alt='' />
					<div className='progress__text'>
						<p className='menu__name'>Track Progress</p>
						<p className='menu__description'>
							See your Progress and workout features for tracking <br /> your
							healthy.
						</p>
					</div>
				</div>
				<div className='friends'>
					<img src='/menu__friends.png' alt='' />
					<div className='friends__text'>
						<p className='menu__name'>Meet New Friends</p>
						<p className='menu__description'>
							we have the big classes in the online workout, you <br /> canmeet
							our new member for sharing and chill out.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
