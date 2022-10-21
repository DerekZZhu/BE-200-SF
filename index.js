var map = L.map('map', {attributionControl: false}).setView([37.78755, -122.40661], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([37.78755, -122.40661]).addTo(map);
L.marker([51.9, -0.1]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").bindPopup();

