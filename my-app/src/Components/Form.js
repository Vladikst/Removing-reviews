import React, { useState } from 'react'
import Modal from './Modal'

const Form = () => {
	const [modalInfoIsOpen, setModalInfoOpen] = useState(false)

	const handleModalToggle = () => {
		setModalInfoOpen(!modalInfoIsOpen)
	}

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
					<a onClick={handleModalToggle}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						Einreichen
					</a>
				</form>
			</div>
			<Modal isOpen={modalInfoIsOpen} onClose={handleModalToggle}>
				<p modal__text>
					Vielen Dank, dass Sie sich beworben haben. Wir werden uns in Kürze mit
					Ihnen in Verbindung setzen.
				</p>
			</Modal>
		</>
	)
}

export default Form
