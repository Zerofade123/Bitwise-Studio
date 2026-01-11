
import React, { useState, useEffect } from 'react'

function decimalToBinarySteps(n) {
	if (n === 0) return ['0']
	const steps = []
	let x = Math.abs(n)
	while (x > 0) {
		steps.push(`${x} ÷ 2 = ${Math.floor(x / 2)} remainder ${x % 2}`)
		x = Math.floor(x / 2)
	}
	return steps
}

function binaryToDecimalSteps(s) {
	const clean = s.replace(/[^01]/g, '')
	if (clean === '') return []
	const bits = clean.split('').reverse()
	const steps = bits.map((b, i) => `${b} × 2^${i} = ${b * Math.pow(2, i)}`)
	const value = bits.reduce((acc, b, i) => acc + b * Math.pow(2, i), 0)
	steps.push(`Sum = ${value}`)
	return steps
}

export default function Converter() {
	const [decimal, setDecimal] = useState('')
	const [binary, setBinary] = useState('')
	const [hex, setHex] = useState('')
	const [explain, setExplain] = useState(false)
	const [steps, setSteps] = useState([])

	useEffect(() => {
		if (decimal === '') return
		const n = parseInt(decimal, 10)
		if (isNaN(n)) return
		setBinary(n.toString(2))
		setHex(n.toString(16).toUpperCase())
		setSteps(explain ? decimalToBinarySteps(n) : [])
	}, [decimal, explain])

	useEffect(() => {
		if (binary === '') return
		const n = parseInt(binary, 2)
		if (isNaN(n)) return
		setDecimal(String(n))
		setHex(n.toString(16).toUpperCase())
		setSteps(explain ? binaryToDecimalSteps(binary) : [])
	}, [binary, explain])

	useEffect(() => {
		if (hex === '') return
		const n = parseInt(hex, 16)
		if (isNaN(n)) return
		setDecimal(String(n))
		setBinary(n.toString(2))
		setSteps([])
	}, [hex])

	return (
		<section className="converter">
			<div className="row">
				<label>Decimal</label>
				<input value={decimal} onChange={e => setDecimal(e.target.value.replace(/[^0-9\-]/g, ''))} placeholder="e.g. 42" />
			</div>
			<div className="row">
				<label>Binary</label>
				<input value={binary} onChange={e => setBinary(e.target.value.replace(/[^01]/g, ''))} placeholder="e.g. 101010" />
			</div>
			<div className="row">
				<label>Hex</label>
				<input value={hex} onChange={e => setHex(e.target.value.replace(/[^0-9a-fA-F]/g, ''))} placeholder="e.g. 2A" />
			</div>

			<div className="controls">
				<label>
					<input type="checkbox" checked={explain} onChange={e => setExplain(e.target.checked)} /> Explain steps
				</label>
			</div>

			{explain && steps.length > 0 && (
				<div className="explain">
					<h3>Explanation</h3>
					<ol>
						{steps.map((s, i) => (
							<li key={i}>{s}</li>
						))}
					</ol>
				</div>
			)}
		</section>
	)
}
