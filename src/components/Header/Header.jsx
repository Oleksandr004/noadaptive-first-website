import '../Header/Header.scss'
export default function Header() {
	return (
		<header className='header'>
			<div className='logo'>
				<a href='#!'>StayHealthy</a>
			</div>
			<nav>
				<ul>
					<li>
						<a href='#!'>Home</a>
					</li>
					<li>
						<a href='#!'>Program</a>
					</li>
					<li>
						<a href='#!'>Nutritions</a>
					</li>
					<li className='pricing'>
						<a href='#!'>Pricing</a>
					</li>
					<li>
						<a href='#!'>About</a>
					</li>
				</ul>
			</nav>
			<div className='header-btn'>
				<a href='#!'>Join Now</a>
			</div>
		</header>
	)
}
