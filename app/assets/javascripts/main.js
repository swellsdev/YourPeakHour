$( document ).ready(function() {
  setMapWindowResizeEvent();	
  GetTrafficLocationData();
});

function setMapWindowResizeEvent(){
	$( window ).resize(function() {
	  $("#map-canvas").width($("main").width())
	});
	$( window ).resize();
}