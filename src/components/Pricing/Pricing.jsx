import '../Pricing/Pricing.scss'

export default function Pricing() {
	return (
		<section className='pricing-page'>
			<div className='pricing-page_bg'></div>
			<div className='pricing-page__title'>
				<h4>PRICING</h4>
				<p className='choosing'>
					CHOOSE YOUR PACKAGE <br /> FOR WORKOUT
				</p>
			</div>

			<div className='tariffs-row'>
				<div className='basic-tariff'>
					<p className='name-tariff'>Basic</p>
					<img src='/basic-program.png' alt='' />
					<p className='trainer-tariff'>The Rock</p>
					<ul className='basic-tariff__list'>
						<li>
							<p>3 Times A Week</p>
						</li>
						<li>
							<p>Full Zoom</p>
						</li>
						<li>
							<p>PDF Module</p>
						</li>
						<li>
							<p>Meal Preparation</p>
						</li>
					</ul>
					<p className='price-basic'>
						{' '}
						<span> Rp500.000</span>/month
					</p>
					<a href='#' className='buy-btn'>
						Workout Now
					</a>
				</div>
				<div className='standar-tariff'>
					<div className='popular-tariff'>
						<img src='/Rectangle.png' alt='' />
						<p>Popular</p>
					</div>
					<p className='name-tariff'>Standar</p>
					<img src='/standar-program.png' alt='' />
					<p className='trainer-tariff'>Anna Jane</p>
					<ul className='standar-tariff__list'>
						<li>
							<p>4 Times A Week</p>
						</li>
						<li>
							<p>Full Zoom</p>
						</li>
						<li>
							<p>PDF Module</p>
						</li>
						<li>
							<p>Meal Preparation</p>
						</li>
						<li>
							<p>Suplement</p>
						</li>
					</ul>
					<p className='price-standar'>
						<span> Rp1.000.000</span>/month
					</p>
					<a href='#' className='buy-btn'>
						Workout Now
					</a>
				</div>
				<div className='premium-tariff'>
					<p className='name-tariff'>Premium</p>
					<img src='/premium-program.png' alt='' />
					<p className='trainer-tariff'>The Rock</p>
					<ul className='premium-tariff__list'>
						<li>
							<p>4 Times A Week</p>
						</li>
						<li>
							<p>Full Zoom</p>
						</li>
						<li>
							<p>PDF Module</p>
						</li>
						<li>
							<p>Meal Preparation</p>
						</li>
						<li>
							<p>Suplement</p>
						</li>
						<li>
							<p>Gym Equipment</p>
						</li>
					</ul>
					<p className='price-premium'>
						<span>Rp2.000.000</span>/month
					</p>
					<a href='#' className='buy-btn'>
						Workout Now
					</a>
				</div>
			</div>
		</section>
	)
}
