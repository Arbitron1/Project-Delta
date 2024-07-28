mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', 
    center: listing.geometry.coordinates, 
    zoom: 9,
});

const marker = new mapboxgl.Marker({color:'red'})
.setLngLat(listing.geometry.coordinates)  //Listing.geometry
.setPopup(
     new mapboxgl.Popup({offset: 25}).setHTML(
    `<h4>${listing.location}</h4><p>Exact location will be provided after booking</p>`
    )
)
.addTo(map);



// map.on('load', () => {
//     // Load an image from an external URL.
//     map.loadImage(
//         'https://docs.mapbox.com/mapbox-gl-js/assets/cat.png',
//         (error, image) => {
//             if (error) throw error;

//             // Add the image to the map style.
//             map.addImage('cat', image);

//             // Add a data source containing one point feature.
//             map.addSource('point', {
//                 'type': 'geojson',
//                 'data': {
//                     'type': 'FeatureCollection',
//                     'features': [
//                         {
//                             'type': 'Feature',
//                             'geometry': {
//                                 'type': 'Point',
//                                 'coordinates': [-77.4144, 25.0759]
//                             }
//                         }
//                     ]
//                 }
//             });
//         });
//     });