let cards = document.getElementById("cards")
let datosEventos = data.events
let currentDate = data.currentDate
function model(evento) {
    return `<div class="card shadow bg-success-subtle">
    <img src="${evento.image}" class="card-img-top" alt="food-fair"
      title="food-fair">
    <div class="card-body">
      <h5 class="card-title h-50">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
      </div>
      <div class="card-footer d-flex justify-content-around align-items-center">
      <p class="card-text">$${evento.price}</p>
      <a href="../pages/details.html" class="btn btn-primary">Details</a>
    </div>
  </div>`
}
function printModel(events, currentDate) {
    for (let evento of events){
        if(currentDate < evento.date){
          cards.innerHTML += model(evento)
        }
    }
}
printModel(datosEventos, currentDate)