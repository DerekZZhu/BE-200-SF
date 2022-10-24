data = [
    {
        "name":"Union Square",
        "text":"Originally a sand dune, in 1850, the Union Square area was turned into a public park and monument to the sailors in the US Navy. One of the first pieces of public property in San Francisco, Union Square is a popular hub for weddings, conventions, dining, and nightlife. A lesser known fact about the square is that the final confirmed murder by the Zodiac killer was heavily believed to have been initiated here. The leading theory is that taxi driver Paul Lee Stine picked up an unnamed man around the Union Square area and his body was found an hour later in Presidio Heights.",
        "coords":[37.78755, -122.40661],
        "img":""
    },
    {
        "name":"Palace Hotel",
        "text":"Built in 1875, the Place hotel is one of the most notable historical landmarks in San Francisco. Currently it is known as the “new Palace Hotel” as it was razed and rebuilt after an earthquake in 1906. Lesser known is the fact that 29th President Warren G. Harding died in suite 8064 in 1923. The hotel’s long history also boasts of hosting Hawaii’s late monarch and the opening session of the United Nations.",
        "coords":[37.78812, -122.4019],
        "img":""
    },
    {
        "name":"Twitch",
        "text":"This 9 floor office building is the headquarters of one of the largest streaming services across the US. Surrounded by restaurants and other STEM oriented facilities, the Twitch building serves as a small reminder of the socio-technological powerhouses that are housed in Silicon Valley. Another fun fact is that Emmett Shear, the co-founder of Twitch was a UW early entrance student before dropping out to attend Yale and inevitably starting twitch.",
        "coords":[37.791, -122.40335],
        "img":""
    },
    {
        "name":"Chinatown Gate",
        "text":"The San Francisco Chinatown Gate acts as a portal into a cultural area that has survived the test of time. One of the largest Chinese enclaves in the entire nation, SF’s Chinatown traces its roots back to the 1850s where immigrants arrived in droves, motivated by the riches of the west and helped to construct the transcontinental railroad. Today the area is densely populated (around 750 people per block on average) and attracts more tourists than the Golden Gate Bridge.",
        "coords":[37.79068, -122.4056],
        "img":""
    },
    {
        "name":"Intersection of Grant Ave and California St.",
        "text":"Did you know that the United States had an emperor? Joshua Norton, a famed resident of San Francisco, declared himself to be the Emperor of the US in 1859. While wielding no real power, the people of SF treated him as a king and his wild antics (he called for the dissolution of the US and printed currency of himself) cemented a long lasting legacy that inspired authors like Mark Twain and Robert Stevenson. In 1880, Norton up and died at the intersection of Grant Avenue and California Street.",
        "coords":[37.79249, -122.40596],
        "img":""
    },
    {
        "name":"Wells Fargo Museum",
        "text":"The Wells Fargo Museum is a very modern building on the outside but when you enter you’ll be greeted by relics of the company’s past. Wells Fargo is well known for its financial power and economic staple and to glimpse a view of how far they have come the museum represents just one of the ways the city stays in touch with its rich history. On a more obscure tidbit of history, a self proclaimed “reincarnation of first president George Washington” named Frederick Coombs is stated to have walked the Montgomery Street (which the museum is on).",
        "coords":[37.79336, -122.4028],
        "img":""
    },
    {
        "name":"101 California",
        "text":"Built in 1983, 101 California is a sleek multi-faceted skyscraper with 32 elevators (what the hell???). Housing multiple financial institutions like Morgan Stanley and Invesco, 101 California is known as one of the largest and most prominent business centers at the heart of San Francisco’s financial district. A fact many forget though is that 101 California was at the heart of a mass shooting in 1993. After 8 fatalities and 6 wounded, the 101 California Street shooting would push for California to ban assault rifles in the state.",
        "coords":[37.79314, -122.39848],
        "img":""
    },
    {
        "name":"Transamerica Redwood Park",
        "text":"Constructed in 1972 the Transamerica Redwood Park is named after the 80 redwood trees from the Santa Cruz Mountains. Hidden within the park is a plaque dedicated to two dogs named Bummer and Lazarus. These two dogs are famed for their rat catching skills in the 1850s and were fan favorites among San Francisco’s denizens.",
        "coords":[37.79516, -122.40228],
        "img":""
    },
    {
        "name":"Transamerica Tower",
        "text":"Transamerica building II, electric boogaloo. The Transamerica Pyramid is the second tallest skyscraper in SF and is designed to have a sleek futuristic design. It is thought to have been the target of a terrorist threat known as the Bojinka plot which was thankfully thwarted in 1995.",
        "coords":[37.79517, -122.40277],
        "img":""
    },
    {
        "name":"Church of Scientology",
        "text":"This was actually the original Transamerica building. Built with a glazed white terracotta facade and sporting distinct architectural greco-roman themes, this triangle wedge of a building was a bank in 1909 but was sold in 2003. The building is now in the hands of the Church of Scientology.",
        "coords":[37.79585, -122.40353],
        "img":""
    }
]

const coolers = ["green", "orange", "purple"]

var map = L.map('map', {attributionControl: false}).setView([37.78755, -122.40661], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    id:'mapbox/dark-v10'
}).addTo(map);

const clickMap = new Map()

for (var i = 0; i < data.length; i++) {
    var marker = L.marker(data[i].coords).addTo(map)
    clickMap.set(data[i].name, marker)

    document.getElementById("scroll").appendChild(generate_card(data[i].name, data[i].text))
}

function generate_card(location, text) {
    const card = document.createElement('div')
    var color = coolers[Math.floor(Math.random() * coolers.length)]
    card.setAttribute('class', 'card')
    // card.innerHTML = `<h2>${location}</h2><p>${text}</p>`
    card.innerHTML = `<div class="card-face card-face-front card-${color}">
                        <div class="card-image"></div>
                        <h2>${location}</h2>
                      </div>
                      <div class="card-face card-face-back card-${color}">
                        <p class="card-details">
                            ${text}
                        </p>
                      </div>`
    return card
}