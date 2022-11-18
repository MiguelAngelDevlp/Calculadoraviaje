function costHotel(num) {
    return num * 140
}



function carCost(num) {
    let result = 0
    if (num >= 3 && num <= 6) {
        result = (num * 40) - 20
        return result
    }
    if (num >= 7) {
        result = (num * 40) - 50
        return result
    } else {
        return num * 40
    }
}



function costeAvion(city, num) {
    let result = 0

    if (city === "Oviedo") {
        result = num * 15
    } else if (city === "Tokyo") {
        result = num * 700
    } else if (city === "Madrid" || city === "Barcelona") {
        result = num * 90
    }

    if (num > 3) { 
        return result - (result * 0.1)
    } else {
        return result
    }
}

const nights = document.querySelector("#nights")
const places = document.querySelector("#places")
const calculateCost = document.querySelector("#button")
const costHotels = document.querySelector("#costHotel")
const travelCost = document.querySelector("#travelCost")
const carsCost = document.querySelector("#carCost")
const totalCost = document.querySelector("#totalCost")
const costeTotal = 0



function calcularCoste(cities, num) {
   costHotels.value = costHotel(nights.value)
   travelCost.value = costeAvion(places.value , nights.value)
   carsCost.value = carCost(nights.value)
}


calculateCost.onclick = () => {
    calcularCoste()
}


// function costeHotel(num) {
//     return num*140
// }

// function costeAvion(name,num) {
//     const result = 0
// if (name === "Oviedo") {
//     result = num*15
    
// } else if (name === "Tokio") {
//     result = num*700
// } else if(name === "Madrid" || name === "Barcelona"){
//     result = num *90
// }
// return result
// if (num > 3) {
//     return result-(result*0.1)
// }
// }

// function AlquilerCoche(num=40) {
//     const  result = 0
//   if (num >= 3 && num <=6) {
//     result = (num*40)-20
//     return result
//   } else if(num >=7 ){
//      result = (num*40)-50
//      return result
//   } else{
//     return num * 40
//   }
// }

// const coches = document.querySelector(".coches")
// const option = document.querySelector(".opciones")
// const send = document.querySelector(".enviar")
// const costHotel = document.querySelector("#mail")
// const costAvion = document.querySelector("#mail2")
// const costAlquiler = document.querySelector("#mail3")
// const costTotal = document.querySelector("#mail4")

// function calcularCost() {
//     send.onclick = () =>{
//      costHotel.value = costHotel(coches.value)
//      costAvion.value = costAvion(option.value, coches.value)
//      costAlquiler = costAlquiler(coches.value)
// }
//  }
