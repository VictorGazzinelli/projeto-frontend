const getCurrentLocation = require('./geolocation')

window.addEventListener('load', getLocation);

let geolocationInput = null

function getLocation() {
  geolocationInput = document.querySelector('#geolocationInput')
  getCurrentLocation(geolocationInput)
}

// v0.3.0

function getNumbersWithUndefined(){
  let arr = new Array()
  for(let i = 0; i <= 5 ; i++)
    arr =  i == 3 ? [...arr, undefined] : [...arr, i]
  return arr
}
let numbers = getNumbersWithUndefined()

let sum = numbers.reduce((i,j = 0) => i + j)

console.log(`A soma dos numeros é ${sum}`)