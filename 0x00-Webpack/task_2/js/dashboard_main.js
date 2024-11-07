import '../css/main.css'
const _ = require('lodash')
const $ = require('jquery')
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');
$('body').prepend('<div id="logo"></div>')

let clickCount = 0
function updateCounter() {
	clickCount++
	$('#count').text(`${clickCount} clicks on the button`)
}

$('button').on('click',  _.debounce( updateCounter, 500, { leading: true, trailing: false }))
