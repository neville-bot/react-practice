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
  price.innerText = `Price: Rs.${currentFlight.price}`;
  // add them to card
  newFlightCard.append(flightName, travelLocations, rating, price);
  // add card to div
  cardContainer.appendChild(newFlightCard);
}
function sortByPrice() {
  // add logic to sort flights by price. If data-sort is asc,
  // sort by ascending price, if desc, sort by price descending. then swap
  // asc to dsc and vice versa.
  // grab array of flights from cards
  let flights = Array.from(document.querySelectorAll(".card"));
  //  check if data-sort is asc or dsc
  // if asc, sort by ascending price
  let ascOrDsc = document.querySelector("#sortPrice").dataset.sort;
  if (ascOrDsc === "asc") {
    flights.sort(function(a, b) {
      return (
        b.children[3].innerText.replace(/[^0-9]/g, "") -
        a.children[3].innerText.replace(/[^0-9]/g, "")
      );
    });
    document.querySelector("#sortPrice").dataset.sort = "dsc";
  } else {
    // if dsc, sort by descending price
    flights.sort(function(a, b) {
      return (
        a.children[3].innerText.replace(/[^0-9]/g, "") -
        b.children[3].innerText.replace(/[^0-9]/g, "")
      );
    });
    document.querySelector("#sortPrice").dataset.sort = "asc";
  }
  const cardContainer = document.querySelector("#flight-items");
  cardContainer.childNodes.forEach((card) => cardContainer.removeChild(card));
  flights.forEach((flight) => cardContainer.appendChild(flight));
}

function sortByRating() {
  // grab all the cards
  let flights = Array.from(document.querySelectorAll(".card"));
  // check the dataset (asc or dsc)
  let ascOrDsc = document.querySelector("#sortRating").dataset.sort;
  // if asc, sort method through the price innerText
  if (ascOrDsc === "asc") {
    flights.sort(function(a, b) {
      return (
        b.children[2].innerText.replace(/[^0-9]/g, "") -
        a.children[2].innerText.replace(/[^0-9]/g, "")
      );
    });
    // set the sort rating to dsc
    document.querySelector("#sortRating").dataset.sort = "dsc";
  } else {
    // if dsc, sort method throught the price innertext
    flights.sort(function(a, b) {
      return (
        a.children[2].innerText.replace(/[^0-9]/g, "") -
        b.children[2].innerText.replace(/[^0-9]/g, "")
      );
    });
    // set the sort rating to asc
    document.querySelector("#sortRating").dataset.sort = "asc";
  }
  const cardContainer = document.querySelector("#flight-items");
  cardContainer.childNodes.forEach((child) => cardContainer.removeChild(child));
  flights.forEach((flight) => cardContainer.appendChild(flight));
}
