import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
	return (
		<>
			<div className='container'>
				<img className='logo' src={logo} alt='logo' />
				<div className='header__text'>
					<h1 className='header__title'>
						Wir bieten Dienstleistungen zum Entfernen von schlechten Bewertungen
						von Google an.
					</h1>
					<div className='header__descr'>
						Negative Bewertungen können Ihrem Unternehmen schaden. Sie können
						Kunden abschrecken, zu Umsatzeinbußen führen und den Ruf
						beschädigen. Lassen Sie uns Ihnen helfen, negative Bewertungen zu
						entfernen und Ihr Unternehmen wieder auf Kurs zu bringen.
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
