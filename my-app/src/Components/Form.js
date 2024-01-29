import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import Modal from './Modal'

const Form = () => {
	const [modalInfoIsOpen, setModalInfoOpen] = useState(false)

	const handleModalToggle = () => {
		setModalInfoOpen(!modalInfoIsOpen)
	}

	const validationSchema = Yup.object({
		name: Yup.string().required('Name eingeben.'),
		phone: Yup.string().matches(
			/^[\+]{1}[0-9]{6,14}$/,
			'Telefonnummer eingeben.'
		),
		email: Yup.string()
			.email('E-Mail-Adresse eingeben.')
			.matches(
				/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				'E-Mail-Adresse eingeben.'
			),
	})

	const formik = useFormik({
		initialValues: {
			name: '',
			phone: '',
			email: '',
		},
		validationSchema,
		onSubmit: values => {
			// Здесь вы можете выполнить дополнительные действия при отправке формы
			// например, отправить данные на сервер
			handleModalToggle()
		},
	})

	return (
		<>
			<div className='header__box'>
				<h2>Kontaktieren Sie uns noch heute, um mehr zu erfahren!</h2>
				<form onSubmit={formik.handleSubmit}>
					<div className='header__box-user'>
						<input
							className={`${formik.errors.name ? 'input-error' : ''}`}
							type='text'
							name='name'
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<label>Name</label>
						{formik.touched.name && formik.errors.name ? (
							<div className='error'>{formik.errors.name}</div>
						) : null}
					</div>

					<div className='header__box-user'>
						<input
							className={`${formik.errors.phone ? 'input-error' : ''}`}
							type='tel'
							name='phone'
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<label>Telefonnummer</label>
						{formik.touched.phone && formik.errors.phone ? (
							<div className='error'>{formik.errors.phone}</div>
						) : null}
					</div>

					<div className='header__box-user'>
						<input
							className={`${formik.errors.email ? 'input-error' : ''}`}
							type='email'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<label>Email</label>
						{formik.touched.email && formik.errors.email ? (
							<div className='error'>{formik.errors.email}</div>
						) : null}
					</div>

					{/* // TODO тут будет чекбокс с конфд  */}

					<button type='submit'>
						<span className='btn-anim1'></span>
						<span className='btn-anim2'></span>
						<span className='btn-anim3'></span>
						<span className='btn-anim4'></span>
						Einreichen
					</button>
				</form>
			</div>
			<Modal isOpen={modalInfoIsOpen} onClose={handleModalToggle}>
				<div className='modal__text'>
					Vielen Dank, dass Sie sich beworben haben. Wir werden uns in Kürze mit
					Ihnen in Verbindung setzen.
				</div>
			</Modal>
		</>
	)
}

export default Form
