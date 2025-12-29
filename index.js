/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const conversions = {
    metersToFeet: function(value) {return value * 3.281},
    feetToMeters: function(value) {return value / 3.281},
    litresToGallons: function(value) {return value * 0.264},
    gallonsToLitres: function(value) {return value / 0.264},
    kilosToPounds: function(value) {return value * 2.204},
    poundsToKilos: function(value) {return value / 2.204}
}


const inputEl = document.getElementById("input")
const convertEl = document.getElementById("convert-btn")

const lenOutput = document.getElementById("len-output")
const volOutput = document.getElementById("vol-output")
const massOutput = document.getElementById("mass-output")
const convertBtn = document.getElementById("convert-btn")


//BUTTON CLICK EVENT
convertBtn.addEventListener("click", convertNumber)

//ENTER KEY EVENT
inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convertNumber()
    }
})


function convertNumber(){
    //GET INPUT AS A NUMBER
    const value = parseFloat(inputEl.value)
    if (!value){
        alert("Please enter a number!")
        return
    } 
    //LENGTH CONVERSION
    const metersToFeetResult = conversions.metersToFeet(value).toFixed(3)
    const feetToMetersResult = conversions.feetToMeters(value).toFixed(3)
    lenOutput.textContent = `${value} metres = ${metersToFeetResult} feet | 
                                ${value} feet =  ${feetToMetersResult} meters`

    //VOLUME CONVERSION
    const litresToGallonsResult = conversions.litresToGallons(value).toFixed(3)
    const gallonsToLitresResult = conversions.gallonsToLitres(value).toFixed(3)
    volOutput.textContent = `${value} liters = ${litresToGallonsResult} gallons | 
                                ${value} gallons = ${gallonsToLitresResult} gallons`

    //MASS CONVERSION
    const kilosToPoundsResult = conversions.kilosToPounds(value).toFixed(3)
    const poundsToKilosResult = conversions.poundsToKilos(value).toFixed(3)
    massOutput.textContent = `${value} kilos = ${kilosToPoundsResult} pounds | 
                                ${value} pounds = ${poundsToKilosResult} kilos`
}



