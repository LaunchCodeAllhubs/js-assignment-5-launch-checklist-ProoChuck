// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

  // Pick a random planet from the listedPlanets array.
  let randomPlanet = pickPlanet(listedPlanets);

  // Add the information about the random planet to the missionTarget div.
  addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
   })

    //After troubleshooting with TA, all addEventListeners and scriptHelpers functions need to be called within window.addEventListener.
    // Validate the pilot name
    //let list = document.getElementById("faultyItems").value
    let list = ["pilotStatus", "copilotStatus", "fuelStatus", "cargoStatus"];
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]").value
    let copilotName = document.querySelector("input[name=copilotName]").value
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value
    let cargoMass = document.querySelector("input[name=cargoMass]").value
    formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);
    });
});