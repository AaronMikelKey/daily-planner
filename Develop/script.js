// Global vars
let today = new Date();
let weekday = today.getDay()
let month = today.getMonth();
let year = today.getFullYear();
const container = document.getElementsByClassName('container')

// Convert day number to string
let days = [
	  'Sunday',
	  'Monday',
	  'Tuesday',		  
	  'Wednesday',
	  'Thursday',
	  'Friday',
	  'Saturday']
//Convert month number to string
let months = [
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

// Create row item 
let row1 = document.createElement('div')
let row2 =  document.createElement('div')
row1.setAttribute('class', 'row')
row2.setAttribute('class', 'row')

let hour1 = document.createElement('div');
hour1.textContent = '9 AM';
hour1.setAttribute('class', 'hour')
row1.appendChild(hour1)
let hour2 = document.createElement('div');
hour2.textContent = '9 AM';
hour2.setAttribute('class', 'hour')
row2.appendChild(hour2)

let textArea1 = document.createElement('textarea')
row1.append(textArea1)
let textArea2 = document.createElement('textarea')
row2.append(textArea2)

let saveButton1 = document.createElement('div')
saveButton1.setAttribute('class', 'saveBtn')
let saveIcon1 = document.createElement('i')
saveIcon1.setAttribute('class', 'fa fa-4x fa-solid fa-folder')
saveButton1.textContent = 'Save'
saveButton1.append(saveIcon1)
row1.append(saveButton1)
let saveButton2 = document.createElement('button')
saveButton2.setAttribute('class', 'saveBtn')
let saveIcon2 = document.createElement('i')
saveIcon2.setAttribute('class', 'fa fa-4x fa-solid fa-folder')
saveButton2.append(saveIcon2)
row2.append(saveButton2)

container[0].append(row1)
container[0].append(row2)