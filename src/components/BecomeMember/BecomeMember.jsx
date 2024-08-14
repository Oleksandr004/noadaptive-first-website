import '../BecomeMember/BecomeMember.scss'

export default function BecomeMember() {
	return (
		<section className='become-member'>
			<div className='rectangle-bg'>
				<div className='become-member_text'>
					<p className='title'>
						Become a member of this <br /> workout class
					</p>
					<div className='title-row'>
						<input type='text' placeholder='Email Address' name='' id='' />
						<a className='title-row__btn'>Join Now</a>
					</div>
				</div>
				<div className='become-member_img'>
					<img src='/become-member.png' alt='' />
				</div>
			</div>
		</section>
	)
}
