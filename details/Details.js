import { data } from "../json/result.js";
import { airlines } from "../json/airlines.js";
const getTime = (dateTimeString) => {
    let dateTime = new Date(dateTimeString);
    let beautifiedTime = dateTimeString? dateTime.getHours() + ":" + dateTime.getMinutes(): "Please check Airline";
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
    let beautifiedDate = dateTimeString? dateTime.getDate() +"-" +months[dateTime.getMonth()] + "-" + dateTime.getFullYear(): "Please check Airline";
    return beautifiedDate;
  };
  const getFlightCompany = (code, airlines) => {
    let airlineName = airlines.Data.filter((flight) => flight.iata === code);
    return airlineName[0].name;
  };
  const getFlightTag = (Name) => {
    console.log(airlines);
    return tag;
  };
let flight = JSON.parse(localStorage.getItem("flight"));
let element = document.getElementById("flights");
let header= document.getElementById("name");
header.innerText=getFlightCompany(flight.ValidatingAirlineCode,airlines)
element.innerHTML = `
<div class="direction">Amount: ${
  flight.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount
} ${flight.AirItineraryPricingInfo.ItinTotalFare.TotalFare.CurrencyCode}
</div>
<div class="ArrDep">
    <div>Arrival Time
    </div>
    <div>${getDate(
      flight.OriginDestinationOptions[0].FlightSegments[0].ArrivalDateTime
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
      flight.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime
    )} ${getTime(
  flight.OriginDestinationOptions[0].FlightSegments[0].DepartureDateTime
)}</div>
</div>`;
