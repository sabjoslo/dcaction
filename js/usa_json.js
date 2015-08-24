var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 40, lng: -100}
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson('http://eric.clst.org/wupl/Stuff/gz_2010_us_040_00_500k.json');
}