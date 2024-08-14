import '../Programs/Programs.scss'

export default function Programs() {
	return (
		<section className='programs-page'>
			<div className='progrmas-page__container'>
				<h2>Programs</h2>
				<p className='program-page__subtitle'>
					We Have a programs to help <br /> your workouts
				</p>
				<div className='programs-row'>
					<div className='first-program'>
						<div className='first-program__img'></div>
						<p className='first-program__name'>Full Body Workout</p>
						<p className='first-program__coach'>By The Rock</p>
						<p className='first-program__about'>
							You can do it in your own home, all in under 30 <br /> mins? just
							need a mat and som . . .
						</p>
						<a href='#'>Check out this program!</a>
					</div>
					<div className='second-program'>
						<div className='second-program__img'></div>
						<p className='second-program__name'>Bodyweight Workout</p>
						<p className='second-program__coach'>By Timi Tarner</p>
						<p className='second-program__about'>
							No need equipments, just your body, your soul, <br /> and your
							spirit. You can do . . .
						</p>
						<a href='#'>Check out this program!</a>
					</div>
					<div className='third-program'>
						<div className='third-program__img'></div>
						<p className='third-program__name'>Dumbell Workout</p>
						<p className='third-program__coach'>By Frank Jane</p>
						<p className='third-program__about'>
							This is a workout you can do at home just using <br /> a set of
							barbells. The workout is . . .
						</p>
						<a href='#'>Check out this program!</a>
					</div>
				</div>
			</div>
		</section>
	)
}
