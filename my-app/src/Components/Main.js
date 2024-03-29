import React from 'react'
import icon from '../images/icon.ico'
import image from '../images/image_1.jpg'

const Main = () => {
	return (
		<div className='container'>
			<div className='help__image'>
				<img src={image} alt='reviews' />
			</div>

			<div className='help__text'>
				<div className='help__descr'>
					Wir verstehen, wie wichtig gute Google-Bewertungen für Ihr Unternehmen
					sind.
				</div>
				<div className='help__descr'>
					Deshalb bieten wir Ihnen professionelle Unterstützung bei der
					Entfernung negativer Bewertungen.
				</div>
				<div className='help__descr'>
					Wir arbeiten mit einem Team von Experten zusammen, die sich mit den
					Richtlinien von Google auskennen.
				</div>
				<div className='help__descr'>
					Wir werden alle rechtlichen Schritte unternehmen, um sicherzustellen,
					dass Ihre negativen Bewertungen entfernt werden.
				</div>
			</div>

			<div className='help__advantages'>Unsere Dienstleistungen umfassen:</div>
			<div className='help__advantages-text'>
				<div className='help__advantages-item'>
					<img src={icon} alt='icon' />
					<p>Analyse Ihrer aktuellen Bewertungen</p>
				</div>
				<div className='help__advantages-item'>
					<img src={icon} alt='icon' />
					<p>Erstellung eines Plans zur Entfernung negativer Bewertungen</p>
				</div>
				<div className='help__advantages-item'>
					<img src={icon} alt='icon' />
					<p>Durchführung der erforderlichen Maßnahmen</p>
				</div>
				<div className='help__advantages-item'>
					<img src={icon} alt='icon' />
					<p>Nachverfolgung der Ergebnisse</p>
				</div>
			</div>

			<div className='help__guarantee'>
				Wir garantieren Ihnen, dass wir alles in unserer Macht Stehende tun, um
				Ihre negativen Bewertungen zu entfernen.
			</div>
		</div>
	)
}

export default Main
