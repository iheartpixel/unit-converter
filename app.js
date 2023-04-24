const inputEl = document.querySelector("#input-el")
const btnConvert = document.querySelector("#btn-convert")
const lengthPart = document.querySelector("#length")
const volumePart = document.querySelector("#volume")
const massPart = document.querySelector("#mass")

btnConvert.addEventListener("click", render)

function convertLength() {
    let feet = inputEl.value * 3.28084
    let meters = inputEl.value * 0.3048
    return `${inputEl.value} meters = ${feet.toFixed(3)} feet | ${inputEl.value} feet = ${meters.toFixed(3)} meters`
}

function convertVolume() {
    let liters = inputEl.value * 3.78541
    let gallons = inputEl.value * 0.264172
    return `${inputEl.value} liters = ${gallons.toFixed(3)} gallons | ${inputEl.value} gallons = ${liters.toFixed(3)} liters`
}

function convertMass() {
    let kilos = inputEl.value * 0.453592
    let pounds = inputEl.value * 2.20462
    return `${inputEl.value} kilos = ${pounds.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilos.toFixed(3)} kilos`
}

function render() {
    lengthPart.textContent = convertLength()
    volumePart.textContent = convertVolume()
    massPart.textContent = convertMass()
}