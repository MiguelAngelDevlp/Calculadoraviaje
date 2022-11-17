function costeHotel(num) {
    return num*140
}

function costeAvion(name,num) {
    const result = 0
if (name === "Oviedo") {
    result = num*15
    
} else if (name === "Tokio") {
    result = num*700
} else if(name === "Madrid" || name === "Barcelona"){
    result = num *90
}
return result
if (num > 3) {
    return result-(result*0.1)
}
}

function AlquilerCoche(num=40) {
    const  result = 0
  if (num >= 3 && num <=6) {
    result = (num*40)-20
    return result
  } else if(num >=7 ){
     result = (num*40)-50
     return result
  }
}

const coches = document.querySelector(".coches")
const option = document.querySelector(".opciones")
const send = document.querySelector(".enviar")
const costHotel = document.querySelector("#mail")
const costAvion = document.querySelector("#mail2")
const costAlquiler = document.querySelector("#mail3")
const costTotal = document.querySelector("#mail4")

function calcularCost() {
    send.onclick = () =>{
     const inputValue = coches.value + costHotel.value + costAlquiler.value + costAvion.value + option.value
     costTotal.textContent = inputValue
    }
}

