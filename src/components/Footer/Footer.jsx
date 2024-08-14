import '../Footer/Footer.scss'

export default function Footer() {
	return (
		<footer>
			<div className='footer-row'>
				<div className='stay-healthy'>
					<p className='stay-healthy__title'>StayHealthy</p>
					<p className='stay-healthy__subtitle'>
						Online Training, and Consultation About Diet and Exercise <br />{' '}
						tailored based on user needs.{' '}
					</p>
					<div className='stay-healthy__messengers'>
						<img className='youtube' src='/youtube-icon.png' alt='' />
						<img className='facebook' src='/facebook-icon.png' alt='' />
						<img className='instagram' src='/instagram-icon.png' alt='' />
					</div>
				</div>
				<div className='product'>
					<a href='#!' className='product__title'>
						Product
					</a>
					<ul>
						<li>
							<a href='#!'>Gym Equipment</a>
						</li>
						<li>
							<a href='#!'>Suplement</a>
						</li>
						<li>
							<a href='#!'>Blog</a>
						</li>
					</ul>
				</div>
				<div className='explore'>
					<ul>
						<li>
							<a href='#!'>Explore Us</a>
						</li>
						<li>
							<a href='#!'>FAQ</a>
						</li>
						<li>
							<a href='#!'>Privacy Policy</a>
						</li>
						<li>
							<a href='#!'>Term and Conditions </a>
						</li>
					</ul>
				</div>
				<div className='contact'>
					<a className='contact__title' href='#!'>
						Contact
					</a>
					<ul>
						<li>
							<a href='mailto:hi@stayhealthy.com'>hi@stayhealthy.com</a>
						</li>
						<li>
							<a href='tel:021123636'>021-123-636</a>
						</li>
						<li>
							<a href='#!'>stayhealthy.com</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
