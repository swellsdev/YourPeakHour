$( document ).ready(function() {
  setMapWindowResizeEvent();
  google.maps.event.addDomListener(window, 'load', InitializeMap);	
  GetTrafficLocationData();
});

function setMapWindowResizeEvent(){
	$( window ).resize(function() {
	  $("#map-canvas").width($("main").width())
	});
	$( window ).resize();
}