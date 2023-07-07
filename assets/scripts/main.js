let cards = document.getElementById("cards")
let datosEventos = data.events
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
      <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
    </div>
  </div>`
}
function printModel(events) {
    for (let evento of events){
        cards.innerHTML += model(evento)
    }
}
printModel(datosEventos)

