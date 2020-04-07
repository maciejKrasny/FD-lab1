function initMap() {
  var location = {
    lat: 52.2051045,
    lng: 15.378528
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location
  });
}

document.addEventListener('DOMContentLoaded', () => initMap());