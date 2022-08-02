import React, { useState, useEffect } from 'react'

const CountDown = (props) => {
	const add_minutes = props.addMinutes

	const [isSubmited, setSubmited] = useState(false)

	const calculateTimeLeft = () => {
		let timeLeft = {}
		let difference = +add_minutes - +new Date()

		let calSeconds = Math.floor((difference / 1000) % 60)
		let calMinutes = Math.floor((difference / 1000 / 60) % 60)
		let calHours = Math.floor((difference / (1000 * 60 * 60)) % 24)

		if (difference >= 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: calHours < 10 ? '0' + calHours : calHours + '',
				minutes: calMinutes < 10 ? '0' + calMinutes : calMinutes + '',
				seconds: calSeconds < 10 ? '0' + calSeconds : calSeconds
			}
		}

		return timeLeft
	}

	const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft())

	const isCounter = () => {
		const daysNumber = parseInt(timeLeft.days)
		const hoursNumber = parseInt(timeLeft.hours)
		if (daysNumber != 0 || hoursNumber != 0 || parseInt(timeLeft.minutes) != 0 || parseInt(timeLeft.seconds) != 0) {
			return true
		} else {
			return false
		}
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			if (isCounter()) {
				setTimeLeft(calculateTimeLeft())
			} else {
				if (!isSubmited) {
					props.onFinish && props.onFinish()
					setSubmited(true)
				}
			}
		}, 1000)
		return () => clearTimeout(timer)
	})

	return (
		<div className="countdown">
			{timeLeft.hours > 0 && <span className="hours">{timeLeft.hours}</span>}
			<span className="minutes">{timeLeft.minutes}</span>
			<span className="seconds">{timeLeft.seconds}</span>
		</div>
	)
}

export default CountDown
