import { data } from "./json/result.js";
import { airlines } from "./json/airlines.js";
const getTime = (dateTimeString) => {
  let dateTime = new Date(dateTimeString);
  let beautifiedTime = dateTimeString
    ? dateTime.getHours() + ":" + dateTime.getMinutes()
    : "Please check Airline";
  return beautifiedTime;
};
const getDate = (dateTimeString) => {
  let dateTime = new Date(dateTimeString);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let beautifiedDate = dateTimeString
    ? dateTime.getDate() +
      "-" +
      months[dateTime.getMonth()] +
      "-" +
      dateTime.getFullYear()
    : "Please check Airline";
  return beautifiedDate;
};
const getFlightCompany = (code, airlines) => {
  let airlineName = airlines.filter((flight) => flight.iata === code);
  return airlineName[0].name;
};
const getFlightTag = (Name) => {
  console.log(airlines);
  return tag;
};

const handleClick = (e) => {
  var elms = document.querySelectorAll("[id='inputs']");
  var unchecked = [];
  for (var i = 0; i < elms.length; i++) {
    if (!elms[i].checked) {
      unchecked.push(elms[i].name);
    }
  }
  var tags = [];
  for (var i = 0; i < unchecked.length; i++) {
    flights = airlines.Data;
    for (var j = 0; j < flights.length; j++) {
      if (flights[j].name == unchecked[i]) {
        tags.push(flights[j].iata);
      }
    }
  }
  let objectsArray = data.Data.PricedItineraries;
  let new_data = [];
  console.log(tags);
  for (var i = 0; i < objectsArray.length; i++) {
    let curr = data.Data.PricedItineraries[i].ValidatingAirlineCode;
    if (!tags.includes(curr)) {
      new_data.push(data.Data.PricedItineraries[i]);
    }
  }
  displayFucntion(new_data, airlines);
};

const displayFucntion = (f, airlines) => {
  let flightsArray = f;
  airlines = airlines.Data;
  document.getElementById("flights").innerHTML = flightsArray
    .map((flight) => {
      return `<div class="Details" id="detailBlock">
                        <div class="direction">${getFlightCompany(
                          flight.ValidatingAirlineCode,
                          airlines
                        )}
                        </div>
                        <div class="direction">Amount: ${
                          flight.AirItineraryPricingInfo.ItinTotalFare.TotalFare
                            .Amount
                        } ${
        flight.AirItineraryPricingInfo.ItinTotalFare.TotalFare.CurrencyCode
      }
                        </div>
                        <div class="ArrDep">
                            <div>Arrival Time
                            </div>
                            <div>${getDate(
                              flight.OriginDestinationOptions[0]
                                .FlightSegments[0].ArrivalDateTime
                            )} ${getTime(
        flight.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime
      )}
                            </div>
                        </div>
                        <div class="direction">${flight.DirectionInd}
                        </div>
                        <div class="ArrDep">
                            <div>Departure Time</div>
                            <div>${getDate(
                              flight.OriginDestinationOptions[0]
                                .FlightSegments[0].DepartureDateTime
                            )} ${getTime(
        flight.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime
      )}</div>
                        </div>
          </div>`;
    })
    .join("");
};
displayFucntion(data.Data.PricedItineraries, airlines);
flights = [
  "Air India",
  "Malmo Aviation",
  "Turkish Airlines",
  "Austral Lineas Aereas",
  "British Airways",
  "American Airlines",
  "Etihad Airways",
];
var elms = document.querySelectorAll("[id='inputs']");
for (var i = 0; i < elms.length; i++) {
  elms[i].onclick = handleClick;
  elms[i].name = flights[i];
}
var elms = document.querySelectorAll("[id='detailBlock']");
for (let i = 0; i < elms.length; i++) {
  elms[i].onclick = (e) => {
    localStorage.setItem("flight", JSON.stringify(data.Data.PricedItineraries[i]));
    location.href = "details/Details.html";
  }
  //console.log(elms)
}
