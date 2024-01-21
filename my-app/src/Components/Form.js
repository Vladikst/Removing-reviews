import React from 'react'

const Form = () => {
	return (
		<>
			<div className='header__box'>
				<h2>Kontaktieren Sie uns noch heute, um mehr zu erfahren!</h2>
				<form>
					<div className='header__box-user'>
						<input type='text' name='' required='' />
						<label>Name</label>
					</div>
					<div className='header__box-user'>
						<input type='tel' name='' required='' />
						<label>Telefonnummer</label>
					</div>
					<div className='header__box-user'>
						<input type='email' name='' required='' />
						<label>Email</label>
					</div>
					<a href='#'>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Einreichen
					</a>
				</form>
			</div>
		</>
	)
}

export default Form
