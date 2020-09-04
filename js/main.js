window.addEventListener('load', getLocation);

let geolocationInput = null

async function getLocation() {
  geolocationInput = document.querySelector('#geolocationInput')
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGetCurrentPositionSuccess, onGetCurrentPositionError);
  } else {
    geolocationInput.innerHTML = "Não foi possível utilizar a API de geolocalização no seu browser atual";
  }
}

function onGetCurrentPositionSuccess(position) {
  geolocationInput.innerHTML = `Latitude: ${position.coords.latitude} Longitude: ${position.coords.longitude}`;
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