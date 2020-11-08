/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2lhbmx1Y2FzOTAiLCJhIjoiY2toNjg0a2ZnMDltejJzb2FobXR0YWw4cyJ9.0viOwDEwR4EcKrciz0-8-Q';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gianlucas90/ckh6krqwc048519mwvwp3dgis', // style for production
    scrollZoom: false,
    // center: [-118.113491, 34.111745], // starting position [lng, lat]
    // zoom: 10, // starting zoom
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
