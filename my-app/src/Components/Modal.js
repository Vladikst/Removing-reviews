import React from 'react'
import close from '../images/close.png'

const Modal = ({ isOpen, onClose, children }) => {
	return (
		<>
			{isOpen && (
				<div className='modal'>
					<div className='modal__wrapper'>
						<div className='modal__content'>
							<button className='modal__close-btn' onClick={() => onClose()}>
								<img src={close} alt='close' />
							</button>
							{children}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Modal
