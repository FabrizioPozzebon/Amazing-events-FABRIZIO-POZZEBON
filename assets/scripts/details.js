let containerDetails = document.getElementById("containerCards")
const arrayEvents = data.events
let parameter = location.search
let eventparameter = new URLSearchParams(parameter)
const idEvent = eventparameter.get("parameter")
const eventCard = arrayEvents.find(evento => evento._id === idEvent)

function showCard(array, placeHTML){
    placeHTML.innerHTML = `<div class="d-flex gap-3 flex-wrap justify-content-center align-items-center pb-5 mt-5">
    <div class="row g-0">
        <div class="col-md-7">
            <img style="height: 320px;" src="${array.image}" class="img-fluid rounded-start"
                alt="food-fair" title="food-fair">
        </div>
        <div class="col-md-5" >
            <div class="card-body">
                <h5 class="card-title">${array.name}</h5>
                <p class="card-text">${array.description}</p>
                <p class="card-text">Date: ${array.date}</p>
                <p class="card-text">Category: ${array.category}</p>
                <p class="card-text">Place: ${array.place}</p>
                <p class="card-text">Capacity: ${array.capacity}</p>
                <p class="card-text">assistance: ${array.assistance}</p>
                <p class="card-text">Price: ${array.price}</p>
            </div>
        </div>`
}

showCard(eventCard, containerDetails)
