const coolers = ["red", "orange", "yellow", "green", "blue", "purple", "indigo"]

var map = L.map('map', {attributionControl: false}).setView([37.78755, -122.40661], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    id:'mapbox/dark-v10'
}).addTo(map);

const markerMap = new Map()
const panMap = new Map()

for (var i = 0; i < data.length; i++) {
    var marker = L.marker(data[i].coords).addTo(map)
    markerMap.set(i, marker)
    panMap.set(i, data[i].coords)

    document.getElementById("scroll").appendChild(generate_card(data[i].name, data[i].text, i))
    const image = document.getElementById(`card-image-${i}`)
    image.style.backgroundImage = `url('${data[i].img}')`
}

function generate_card(location, text, id) {
    const card = document.createElement('div')
    var color = coolers[id%coolers.length]
    card.setAttribute('class', 'card')
    card.setAttribute('id', `${id}`)
    card.innerHTML = `<div class="card-face card-face-front card-${color}" id="${id}">
                        <div class="card-image" id="card-image-${id}"></div>
                        <h2 id="${id}">${location}</h2>
                      </div>
                      <div class="card-face card-face-back card-${color}" id="${id}">
                        <p class="card-details" id="${id}">
                            ${text}
                        </p>
                      </div>`
    card.addEventListener("mouseover", function(e){
        var index = parseInt(e.target.getAttribute('id').replace(/\D/g,''));
        map.flyTo(panMap.get(index), 18)
    })
    return card
}

for(var i = 0; i < data.length -1; i++) {
    let loc1 = data[i].coords
    let loc2 = data[i+1].coords
    L.Routing.control({
        waypoints: [
            L.latLng(loc1[0], loc1[1]),
            L.latLng(loc2[0], loc2[1])
        ],
        show:false,
        createMarker: function() { return null; }
    }).addTo(map);
}

function recordKeyDown(e) {
    let pressed = e.keyCode
    if (pressed === 37) {
        document.getElementById("scroll").scrollLeft -= 5
    } else if (pressed === 39) {
        document.getElementById("scroll").scrollLeft += 5
    }
  }
document.addEventListener("keydown", recordKeyDown);