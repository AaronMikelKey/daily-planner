// Global vars
let today = new Date()
let weekday = today.getDay()
let month = today.getMonth()
let year = today.getFullYear()
let currentTime = today.toLocaleString('en-US', { hour: 'numeric', hour12: true })
console.log(currentTime)
const container = document.getElementsByClassName('container')
const saveButtonArr = document.getElementsByClassName('saveBtn')

// Convert day number to string
const days = [
	  'Sunday',
	  'Monday',
	  'Tuesday',		  
	  'Wednesday',
	  'Thursday',
	  'Friday',
	  'Saturday']
//Convert month number to string
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
]
// Append date to currentDay
let documentDate = document.getElementById('currentDay')
documentDate.textContent = days[weekday] + ', ' + months[month] + ' ' + today.getDate() + ' ' + year

// Row color

const timeNodes = document.getElementsByClassName('hour');
let timeArr = Object.values(timeNodes);

timeArr.forEach(time => {
	let timeNumber = time.textContent.toLocaleString('en-US', { hour: 'numeric', hour12: true })
	console.log(timeNumber < currentTime)
	timeNumber < currentTime ? time.nextElementSibling.classList.add('future') : null
	timeNumber == currentTime ? time.nextElementSibling.classList.add('present') : null
	timeNumber > currentTime ? time.nextElementSibling.classList.add('past') : null
})

