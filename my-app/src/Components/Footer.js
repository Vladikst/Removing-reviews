import React from 'react'

const Footer = () => {
	const date = new Date()
	const year = date.getFullYear()

	return (
		<div className='footer__text'>
			© {year} <a href='#'>Removing-Reviews.com</a> Impressum Datenschutz AGB
		</div>
	)
}

export default Footer
