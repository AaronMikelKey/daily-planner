// Global vars
let today = new Date()
let weekday = today.getDay()
let month = today.getMonth()
let year = today.getFullYear()
let currentTime = Number(today.toLocaleString('en-US', { hour: '2-digit', hour12: false }).slice(0, 2).trim())
const container = document.getElementsByClassName('container')

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

// Get localstorage values if present
let savedData = JSON.parse(localStorage.getItem('savedData'))
if (!savedData) {
	savedData = {}
}
console.log(savedData)

// Row color
const timeNodes = document.getElementsByClassName('hour');
let timeArr = Object.values(timeNodes);

timeArr.forEach(time => {
	// Check for localStorage saved items
	if (savedData[time.textContent]) {
		console.log(savedData[time.textContent])
		$('.hour').each(function(item) {
			if ($(this).text() == time.textContent) {
				$(this).siblings('textarea').val(savedData[time.textContent])
			}
		})
	}
	//Convert time text to number for comparison
	let timeNumber = Number(time.textContent.toLocaleString('en-US', { hour: '2-digit', hour12: true }).slice(0,2).trim())
	if (timeNumber < 6) {timeNumber += 12} //add 12 to PM numbers
	timeNumber > currentTime ? time.nextElementSibling.classList.add('future') : null
	timeNumber == currentTime ? time.nextElementSibling.classList.add('present') : null
	timeNumber < currentTime ? time.nextElementSibling.classList.add('past') : null
})

// Get time block and textarea value, save to localstorage
$('.saveBtn').click(function (e) { 
	let time = $(this).siblings('.hour').text()
	let data = $(this).siblings('textarea').val()
	console.log(time, data)
	savedData[time] = data
	localStorage.setItem('savedData', JSON.stringify(savedData))
});