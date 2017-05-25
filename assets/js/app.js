function initMap() {
  var laboratoriaLima = {lat: -12.119455, lng: -77.0329046};
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: laboratoriaLima
});

var markadorLaboratoria = new google.maps.Marker({
  position: laboratoriaLima,
  map:map
});

var latitud,longitud;
var funcionExito=function(posicion){
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;

var miUbicacion = new google.maps.Marker({
  position: {lat:latitud, lng:longitud},
  map:map
});

  map.setZoom(18);
  map.setCenter({lat:latitud, lng:longitud});
}
 
var funcionError = function (error){
  alert="Tenemos un problema";
}
 
function buscar(){
     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
}
  document.getElementById("encuentrame").addEventListener("click",buscar);
}



