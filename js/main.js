window.addEventListener('load', getLocation);

let geolocationInput = null

function getLocation() {
  geolocationInput = document.querySelector('#geolocationInput')
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGetCurrentPositionSuccess, onGetCurrentPositionError);
  } else {
    geolocationInput.innerHTML = "Não foi possível utilizar a API de geolocalização no seu browser atual";
  }
}

async function onGetCurrentPositionSuccess(position) {
  const latitude = position.coords.latitude,
        longitude = position.coords.longitude
  geolocationInput.innerHTML = `Latitude: ${latitude} Longitude: ${longitude}`;
  geolocationInput.innerHTML = await fetchGeoLocationWithGoogleMapsReturningAddress(latitude, longitude)
}

function onGetCurrentPositionError(error){
  switch(error.code) {
    case error.PERMISSION_DENIED:
      geolocationInput.innerHTML = "Você negou acesso a sua localização"
      break;
    case error.POSITION_UNAVAILABLE:
      geolocationInput.innerHTML = "Sua localização está indisponível"
      break;
    case error.TIMEOUT:
      geolocationInput.innerHTML = "Tempo de requisição expirou"
      break;
    case error.UNKNOWN_ERROR:
      geolocationInput.innerHTML = "Um erro desconhecido ocorreu"
      break;
  }
}

async function fetchGeoLocationWithGoogleMapsReturningAddress(lat, lng){
  const reverseGeocodingGoogleMapsUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAfT5eJwacqT02LPYTp-XxWCAN43zBFA-M`
  const jsonResponse = await (await fetch(reverseGeocodingGoogleMapsUrl)).json()
  return jsonResponse.results[0].formatted_address;
}