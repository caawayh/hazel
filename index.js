/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-text")
const convertBtn = document.getElementById("convert-btn")

const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

let text = ``

convertBtn.addEventListener("click", function() {
    lengthText.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet |                          ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meter`
    volumeText.textContent= `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} galloons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    massText.textContent = `${inputEl.value} kilograms = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilograms`
})