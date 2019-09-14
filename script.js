var userLocation = [];

function mobileView() 
{
  var x = document.getElementById("menu");
  var loginblock = document.getElementById("login");
  
  if (x.className === "main-nav"){
    x.className += " responsive";
    loginblock.className +=" unactive";
  } else {
    x.className = "main-nav";
    loginblock.className = "nav-links";
  }
  
  
};
var locText = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, handleErrors);
  } else {
    locText.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  locText.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 
  userLocation[0] =  position.coords.latitude;
  userLocation[1] = position.coords.longitude;
}
  
function handleErrors(error)
{
  switch(error.code){
    case error.PERMISSION_DENIED:
      locText.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      locText.innerHTML = "Location information is unavailable"
      break;
    case error.TIMEOUT:
      locText.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      locText.innerHTML = "An unknown error occurred."
      break;
      
  }
  
}

// function myMap()
// {
  
//   var mapLocation = document.getElementById("map");
//   mapLocation.innerHTML = "called myMap()"
//   var mapOptions= {
    // center: new google.maps.LatLng(33.6415766, -117.823444),
//     zoom: 10
//   };
//   var map = new google.map.Map(mapLocation, mapOptions);
// }

var zoomsize = 12.5;

function increaseZoom()
{
zoomsize+=1;
}
function decreaseZoom()
{
zoomsize-=1;
}
function myMap() {
var mapProp= {
      center: new google.maps.LatLng(userLocation[0], userLocation[1]),
  zoom:zoomsize,
};
  var userLocationImage = "https://cdn.glitch.com/deea8123-5e22-4072-88f6-8a1b0ecc2c64%2FWebp.net-resizeimage%20(1).png?v=1566444271221";
  var map = new google.maps.Map(document.getElementById("map"),mapProp);
  var goldenGatePosition = {lat: userLocation[0],lng: userLocation[1]};

	waterLocations(map);
  
  
  var marker = new google.maps.Marker({
  position: goldenGatePosition,
  map: map,
  title: 'Your Current Location',
  icon: userLocationImage
  });
  
}

var locations = [
  ["aldrich hall", 33.648543, -117.841262],
  ["langston library", 33.647168, -117.841084],
  ["donald bren hall",33.643271, -117.842001]];

    
function waterLocations(map){
     for(var i=0; i< locations.length; i++)
    {
      var waterStation = locations[i];
      var marker = new google.maps.Marker({
          position: {lat: waterStation[1],lng: waterStation[2]},
          map: map,
          title: locations[0]
        });
    }
}
