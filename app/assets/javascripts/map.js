function InitializeMap(data) {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(-37.814189, 144.962028),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
	var map = new google.maps.Map(mapCanvas, mapOptions)
	var markers = [];
	if(data){
		for(i=0;i<data.length;i++){
			var location = data[i];
			var latLng = new google.maps.LatLng(location.LAT, location.LONG);
			var marker = new google.maps.Marker({
        		position: latLng,
        	});
        	markers.push(marker);
		}
		var mc = new MarkerClusterer(map, markers);
	}
}

function GetTrafficLocationData(){
	var request = $.ajax({
		type: "GET",
		url : "https://traffic-data-api.herokuapp.com/locations", 
		dataType : "json"
	});
	request.done(function(data){
  			console.log(data);
  			InitializeMap(data.data);
	});
	request.fail(function(jqXHR, textStatus){
		console.log(jqXHR);
		alert("something went wrong :( "+textStatus);
	});
}