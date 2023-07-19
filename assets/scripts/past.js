import { printModel, printCheckbox, showValue, crossFilter } from "../modules/functions.js";
let cards = document.getElementById("cards")
let checkbox = document.getElementById("checkbox")
const inputSearch = document.getElementById("search")

let datosEventos =

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(respuesta => respuesta.json())
.then(data =>{
  datosEventos = data.events
  let cat = datosEventos.map(event => event.category)
  let newCategories = Array.from(new Set(cat))
  printModel(datosEventos, cards)
  printCheckbox(newCategories, checkbox)
  inputSearch.addEventListener("input",() => {
    let boxCheck = document.querySelectorAll("input[type='checkbox']:checked")
    let arrayCheck = []
    let values = showValue(inputSearch)
    boxCheck.forEach((values) => arrayCheck.push(values.value))
    cards.innerHTML = ""
    let crossFilter = crossFilter(datosEventos, values, arrayCheck)
    printModel(crossFilter, cards)
  })
  checkbox.addEventListener("change", () =>{
    let boxCheck = document.querySelectorAll("input[type='checkbox']:checked")
    let arrayCheck = []
    let values = showValue(inputSearch)
    boxCheck.forEach((values) =>arrayCheck.push(values.value))
    cards.innerHTML = ""
    let crossFilter = crossFilter(datosEventos, values, arrayCheck)
    printModel(crossFilter, cards)
  })
})
.catch(error => console.error(error.message))

