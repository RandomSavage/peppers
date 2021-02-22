
  // initialize Leaflet
let myMap = L.map('map-box').setView({lon: 0, lat: 0}, 2);

 // add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(myMap);

// show the scale bar on the lower left corner
L.control.scale().addTo(myMap);

// show a marker on the map
L.marker({lon: 0, lat: 0}).bindPopup('<h1>Make it clap to this!</h1>').addTo(myMap);
console.log(typeof(myMap));

// let circle = L.circle({lon: 0, lat: 0}, {color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: 500}).addTo(myMap);
// circle.bindPopup("I am a circle.");

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
  [51.519505, -0.066948]
]).addTo(myMap);

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(myMap);
        // myMap.locate({setView: true, maxZoom: 40});
}

myMap.on('click', onMapClick);
