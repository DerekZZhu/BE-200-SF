const sources = [
    "http://ohp.parks.ca.gov/ListedResources/Detail/623",
    "https://web.archive.org/web/20150518010503/http://www.sfgate.com/bayarea/article/Our-SF-The-rags-to-riches-story-of-Union-Square-6262277.php",
    "https://www.sfgate.com/news/article/S-F-s-new-Palace-Hotel-celebrates-a-century-3221144.php",
    "http://thepalacehotel.org/#GC",
    "https://www.businessinsider.com/twitch-headquarters-san-francisco-office-tour-2018-12",
    "https://cdnc.ucr.edu/?a=d&d=NWS19380617-01.1.7&e=-------en--20--1--txt-txIN--------1",
    "https://www.google.com/books/edition/The_Woman_Who_Ate_Chinatown/J49inXbkyJgC?hl=en&gbpv=1&pg=PA127&printsec=frontcover",
    "http://emperornortontrust.org/blog/2017/6/27/emperor-norton-c1871-72",
    "https://www.wellsfargohistory.com/museum/",
    "https://www.sfgate.com/news/article/10-YEARS-AFTER-101-California-massacre-victims-2567142.php",
    "https://www.tclf.org/landscapes/transamerica-redwood-park",
    "https://www.skyscrapercenter.com/building/wd/772",
    "https://www.scientologynews.org/image-gallery/press-releases/san-francisco-grand-opening.html"
]

for(var i = 1; i < sources.length+1; i++) {
    const source = document.createElement('li')
    source.innerHTML = `<a href=${sources[i-1]}>Source ${i}</>`
    document.getElementById('source_list').appendChild(source)
}