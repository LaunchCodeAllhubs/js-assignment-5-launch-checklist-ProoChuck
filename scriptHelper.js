// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTargetDiv = document.getElementById("missionTarget");
   missionTargetDiv.innerHTML =`
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}"></img>
   `;
}

function validateInput(testInput) {
  let numInput = Number(testInput);
    if (testInput === "") {
      return "Empty";
    } else if (isNaN(numInput)) {
      return "Not a Number";
    } else if (isNaN(numInput) === false)
      return "Is a Number";   
}

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
  // Validate the empty form
  //let pilotStatus = document.getElementById("pilotName");
  if (validateInput(pilotName) === "Empty" && validateInput(copilotName) === "Empty" && 
  validateInput(fuelLevel) === "Empty" && validateInput(cargoMass) === "Empty"){
    alert("The form is Empty.  Please register some data.");
    return false;
  }

  // Validate the pilot name
  //let pilotStatus = document.getElementById("pilotName");
  if (validateInput(pilotName) === "Empty"){
    alert("All fields are required!  Please enter a pilot name.");
    return false;
  } else if (validateInput(pilotName) !== "Not a Number") {
    alert("Make sure to enter valid information for each field!  The pilot name must be a string.");
    return false;
  }

  // Validate the copilot name
  //let copilotStatus = document.getElementById("copilotName");
  if (validateInput(copilotName) === "Empty") {
    alert("All fields are required!  Please enter a copilot name.");
    return false;
  } else if (validateInput(copilotName) !== "Not a Number") {
    alert("Make sure to enter valid information for each field!  The copilot name must be a string.");
    return false;
  }

  // Validate the fuel level
  //let fuelStatus = document.getElementById(fuelLevel);
  if (validateInput(fuelLevel) === "Empty") {
    alert("All fields are required!  Please enter a fuel level.");
    return false;
  } else if (validateInput(fuelLevel) !== "Is a Number") {
    alert("Make sure to enter valid information for each field!  The fuel level must be a number.");
    return false;
  }

  // Validate the cargo mass
  //let cargoStatus = document.getElementById(cargoMass);
  if (validateInput(cargoMass) === "Empty") {
    alert("All fields are required!  Please enter a cargo mass.");
    return false;
  } else if (validateInput(cargoMass) !== "Is a Number") {
    alert("Make sure to enter valid information for each field!  The cargo mass must be a number.");
    return false;
  }
  
  // Update the `pilotStatus` and `copilotStatus` li elements.
  document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready for launch`;
  document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName} is ready for launch`;

  // Check the fuel level and cargo mass.
  if (Number(fuelLevel) < 10000) {
    // The fuel level is too low.
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "#C7254E";
  } else {
    // The fuel level is high enough.
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
  }

  if (Number(cargoMass) > 10000) {
    // The cargo mass is too high.
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "#C7254E";
  } else {
    // The cargo mass is low enough.
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
  }

  // If the shuttle is ready to launch, change the text of launchStatus to a particular shade of green, #419F6A or rgb(65, 159, 106), and display "Shuttle is ready for launch".
  if (Number(fuelLevel) >= 10000 && Number(cargoMass) <= 10000) {
    document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "#419F6A";
  }
  return true;
}

  


async function myFetch() {
    let planetsReturned;
  
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
    });
  
    return planetsReturned;
  }

  function pickPlanet(planets) {
    // Get the length of the planets array.
    let planetsLength = planets.length;
  
    // Generate a random number between 0 and the length of the planets array.
    let randomNumber = Math.floor(Math.random() * planetsLength);
  
    // Return the planet at the random index.
    return planets[randomNumber];
  }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
