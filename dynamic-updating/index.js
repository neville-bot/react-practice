function addFlightToCard() {
  // add logic to add new flight items to card
  // grab array of flights from window
  const currentFlight = flightList[flightList.length - 1];
  // grab div where cards are being stored
  const cardContainer = document.querySelector("#flight-items");
  // create new flight card
  const newFlightCard = document.createElement("ul");
  newFlightCard.className = "card";
  // create new li's for each item in array
  const flightName = document.createElement("li");
  flightName.innerText = `Flightname: ${currentFlight.name}`;
  const travelLocations = document.createElement("li");
  travelLocations.innerText = `${currentFlight.origin} to ${currentFlight.destination}`;
  const rating = document.createElement("li");
  rating.innerText = `Rating: ${currentFlight.rating}*`;
  const price = document.createElement("li");
  price.innerText = `Price: ${currentFlight.price}`;
  // add them to card
  newFlightCard.append(flightName, travelLocations, rating, price);
  // add card to div
  cardContainer.appendChild(newFlightCard);
  // delete flight from list
}
