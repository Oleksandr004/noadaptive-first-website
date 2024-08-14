import '../Nutritions/Nutritions.scss'
export default function Nutritions() {
	return (
		<section className='nutritions-page'>
			<div className='nutritions-page__container'>
				<div className='nutritions-page_image'>
					<div className='discipline'></div>
					<div className='man'></div>
					<div className='woman'></div>
					<div className='eating-healthy'></div>
				</div>
				<div className='nutritions-page__text'>
					<p className='nutritions'>Nutritions</p>
					<h3>
						meal preparation for <br /> workout
					</h3>
					<p className='nutritions-info'>
						Don’t worry we have the best nutritionist for your workout, <br />{' '}
						firstly consult with our experts, we can make your meal <br />{' '}
						preparation based on Total Daily Energy Expenditure.
					</p>
					<a href='#!' className='nutrition-btn'>
						Join Now
					</a>
				</div>
			</div>
		</section>
	)
}
