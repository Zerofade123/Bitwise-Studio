
import React from 'react'
import Converter from './converter.jsx'

export default function App() {
	return (
		<div className="app">
			<header className="hero">
				<h1>Bitwise Studio</h1>
				<p className="tagline">Understand computers at the binary level. Instantly. Visually. Correctly.</p>
			</header>
			<main>
				<Converter />
			</main>
			<footer className="footer">Bitwise Studio — Demo</footer>
		</div>
	)
}
