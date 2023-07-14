let cards = document.getElementById("cards")
let datosEventos = data.events
let checkbox = document.getElementById("checkbox")
let mapCategories = datosEventos.map(category => category.category)
let categories = new Set(mapCategories)
let cat = Array.from(categories)

function model(evento) {
    return `<div class=" card shadow bg-success-subtle">
    <img src="${evento.image}" class="card-img-top" alt="food-fair"
      title="food-fair">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-around align-items-center"> 
      <p class="card-text">$${evento.price}</p>
      <a href="./assets/pages/details.html?parameter=${evento._id}" class="btn btn-primary">Details</a>
    </div>
  </div>`
}

function printModel(events) {
  let card = ''
  if (events.length == 0) {
    card = `<p class="display-3">No similarities found</p>`
    cards.innerHTML = card
    return;
  }
    for (let evento of events){
        cards.innerHTML += model(evento)
    }
}
printModel(datosEventos)

function createCheckbox(checkbox) {
  return `<div class="col-sm-4 col-md-3 col-lg-1">
  <input type="checkbox" name="party" id="${checkbox}" value="${checkbox}">
  <label class="box-one" for="${checkbox}">${checkbox}</label>
</div>`
}

function printCheckbox(categories, checkbox) {
  for (const element of categories){
    checkbox.innerHTML += createCheckbox(element)
}
}
printCheckbox(cat, checkbox)

function showValue(input){
  let valueImputSearch = input.value
  return valueImputSearch
}

function checkboxFilter(){
  let checks = document.querySelectorAll("input[type='checkbox']:checked")
  let ArrayCh = []
  checks.forEach((values)=>ArrayCh.push(values.value))
  return ArrayCh
}

function searchFilter(events, inputValue){
  let eventName = events.filter(dato => dato.name.toLowerCase().includes(inputValue.toLowerCase()))
  return eventName 
}

function crossFilter(arrayCategories, searchValue){
  let crossflts = datosEventos;
  if (arrayCategories.length > 0){
    crossflts = crossflts.filter(event => arrayCategories.includes(event.category))
  }
  if (searchValue) {
    crossflts = crossflts.filter(event => event.name.toLowerCase().includes(searchValue.toLowerCase()))
  }
  return crossflts
}

const inputSearch = document.getElementById("search")
inputSearch.addEventListener("keydown", () => {
  cards.innerHTML = ""
  let checkboxfiltered = checkboxFilter()
  const value = showValue(inputSearch)
  eventName = crossFilter(checkboxfiltered, value)
  printModel(eventName)
})

checkbox.addEventListener("change", ()=>{
  cards.innerHTML = ""
  let checkboxfiltered = checkboxFilter()
  const value = showValue(inputSearch)
  let catFilter = crossFilter(checkboxfiltered, value)
  printModel(catFilter)
} )
