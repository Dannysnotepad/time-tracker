/*
 *Time tracker
 *from
 *Dannys Notepad
 */


//Variables for greet display
let formBody = document.getElementById('formBody')
const date = new Date()
const greetHour = (new Date()).getHours()
const timeGreet = document.getElementById('timeGreet')
const dateFormat = date.toDateString();
const timeFormat = date.toLocaleTimeString();
const documentBody = document.querySelector('body')






// display date
let dateEl = document.getElementById('dateEl1')
dateEl.textContent = 'Date: ' + dateFormat


// display time
let timeEl = document.getElementById('dateEl2')
timeEl.textContent = 'Time: ' + timeFormat

// UPDATE TIME
setInterval(() => {
  timeEl.textContent = 'Time: ' + (new Date()).toLocaleTimeString()
  
  
  //Logic to greet with time
  if (greetHour >= 0 && greetHour <= 11) {
    timeGreet.textContent = 'Good Morning 🌄!'
  } else if (greetHour >= 12 && greetHour <= 16) {
    timeGreet.textContent = 'Good Afternoon 🌅!'
  } else if (greetHour >= 17) {
    timeGreet.textContent = 'Good Evening 🌇!'
  }
  
  //code to make the background color change depending on the time of the day
  if (greetHour >= 0 && greetHour <= 11) {
    documentBody.style.backgroundColor = 'whitesmoke'
  } else if (greetHour >= 12 && greetHour <= 16) {
    documentBody.style.backgroundColor = 'gold'
    timeGreet.style.color = 'darkblue'
    nameGreet.style.color = 'snow'
  } else if (greetHour >= 17) {
    documentBody.style.backgroundColor = 'gray'
    timeGreet.style.color = 'whitesmoke'
  }
  
  
}, 1000)

formBody.addEventListener("submit", (e) => {
  e.preventDefault()

  let userName = document.getElementById("userName")

  if (userName.value == '') {

    let errorMsg = document.getElementById('formError')

    errorMsg.textContent = 'Enter name your name'
    setTimeout(() => {
      errorMsg.textContent = ''
    }, 5000)

  } else {
    // perform operation with form input
    let nameGreeting = document.getElementById('nameGreet')
    nameGreeting.textContent = `Hello ${userName.value}!`
  }


});