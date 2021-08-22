(function($){
    "use strict"; // Start of use strict     
	$(document).ready(function($){
		// GOOGLE MAP
		$('.sv-ggmaps').each(function(){
			var id = $(this).attr('id');
	    	var seff = $('#'+id);
	        var zoom = $(this).attr('data-zoom'),
	        style = $(this).attr('data-style'),
	        control = $(this).attr('data-control'),
	        scrollwheel = $(this).attr('data-scrollwheel'),
	        disable_ui = $(this).attr('data-disable_ui'),
	        draggable = $(this).attr('data-draggable'),
	        lat = $(this).attr('data-lat'),
	        lon = $(this).attr('data-lon'),
	        marker = $(this).attr('data-market');
	        var latlng = new google.maps.LatLng(lat, lon);
	        var stylez;
	        switch(style){
	            case 'grayscale' :
	                stylez = [ {featureType: 'all',  stylers: [{saturation: -100},{gamma: 0.50}]} ];
	                break;

	            case 'blue' :
	                stylez = [ {featureType: 'all',  stylers: [{hue: '#0000b0'},{invert_lightness: 'true'},{saturation: -30}]} ];
	                break;

	            case 'dark' :
	               stylez = [ {featureType: 'all',  stylers: [{ hue: '#ff1a00' },{ invert_lightness: true },{ saturation: -100  },{ lightness: 33 },{ gamma: 0.5 }]} ];
	                break;

	            case 'pink' :
	                stylez = [ {"stylers": [{ "hue": "#ff61a6" },{ "visibility": "on" },{ "invert_lightness": true },{ "saturation": 40 },{ "lightness": 10 }]} ];
	                break;

	            case 'light' :
	                stylez = [ {"featureType": "water","elementType": "all","stylers": [{"hue": "#e9ebed"},{"saturation": -78},{"lightness": 67},{"visibility": "simplified"}]
	                },{"featureType": "landscape","elementType": "all","stylers": [{"hue": "#ffffff"},{"saturation": -100},{"lightness": 100},{"visibility": "simplified"}]
	                },{"featureType": "road","elementType": "geometry","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": 31},{"visibility": "simplified"}]
	                },{"featureType": "poi","elementType": "all","stylers": [{"hue": "#ffffff"},{"saturation": -100},{"lightness": 100},{"visibility": "off"}]
	                },{"featureType": "road.local","elementType": "geometry","stylers": [{"hue": "#e9ebed"},{"saturation": -90},{"lightness": -8},{"visibility": "simplified"}]
	                },{"featureType": "transit","elementType": "all","stylers": [{"hue": "#e9ebed"},{"saturation": 10},{"lightness": 69},{"visibility": "on"}]
	                },{"featureType": "administrative.locality","elementType": "all","stylers": [ {"hue": "#2c2e33"},{"saturation": 7},{"lightness": 19},{"visibility": "on"}]
	                },{"featureType": "road","elementType": "labels","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": 31},{"visibility": "on"}]
	                },{"featureType": "road.arterial","elementType": "labels","stylers": [{"hue": "#bbc0c4"},{"saturation": -93},{"lightness": -2},{"visibility": "simplified"}]} ];

	                break;

	            case 'blue-essence' :
	                stylez = [ {featureType: "landscape.natural",elementType: "geometry.fill",stylers: [{ "visibility": "on" },{ "color": "#e0efef" }]
	                },{featureType: "poi",elementType: "geometry.fill",stylers: [{ "visibility": "on" },{ "hue": "#1900ff" },{ "color": "#c0e8e8" }]
	                },{featureType: "landscape.man_made",elementType: "geometry.fill"
	                },{featureType: "road",elementType: "geometry",stylers: [{ lightness: 100 },{ visibility: "simplified" }]
	                },{featureType: "road",elementType: "labels",stylers: [{ visibility: "off" }]
	                },{featureType: 'water',stylers: [{ color: '#7dcdcd' }]
	                },{featureType: 'transit.line',elementType: 'geometry',stylers: [{ visibility: 'on' },{ lightness: 700 }]} ];

	                break;

	            case 'bentley' :
	                stylez = [ {featureType: "landscape",stylers: [{hue: "#F1FF00"},{saturation: -27.4},{lightness: 9.4},{gamma: 1}]
	                },{featureType: "road.highway",stylers: [{hue: "#0099FF"},{saturation: -20},{lightness: 36.4},{gamma: 1}]
	                },{featureType: "road.arterial",stylers: [{hue: "#00FF4F"},{saturation: 0},{lightness: 0},{gamma: 1}]
	                },{featureType: "road.local",stylers: [{hue: "#FFB300"},{saturation: -38},{lightness: 11.2},{gamma: 1}]
	                },{featureType: "water",stylers: [{hue: "#00B6FF"},{saturation: 4.2},{lightness: -63.4},{gamma: 1}]
	                },{featureType: "poi",stylers: [{hue: "#9FFF00"},{saturation: 0},{lightness: 0},{gamma: 1}]} ];

	                break;

	            case 'retro' :
	                stylez = [ {featureType:"administrative",stylers:[{visibility:"off"}]
	                },{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]
	                },{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]
	                },{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]
	                },{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-17},{gamma:0.36}]
	                },{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]} ];

	                break;
				case 'satellite' :
	               styles: [ {elementType: 'geometry', stylers: [{color: '#242f3e'}]},  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
					{ featureType: 'administrative.locality', elementType: 'labels.text.fill',  stylers: [{color: '#d59563'}]
					},  {  featureType: 'poi', elementType: 'labels.text.fill',  stylers: [{color: '#d59563'}]  },
					{ featureType: 'poi.park',  elementType: 'geometry',  stylers: [{color: '#263c3f'}] },
					{  featureType: 'poi.park',  elementType: 'labels.text.fill',  stylers: [{color: '#6b9a76'}] },
					{  featureType: 'road',  elementType: 'geometry', stylers: [{color: '#38414e'}] },
					{  featureType: 'road',  elementType: 'geometry.stroke',   stylers: [{color: '#212a37'}] },
					{  featureType: 'road', elementType: 'labels.text.fill',  stylers: [{color: '#9ca5b3'}] },
					{  featureType: 'road.highway',  elementType: 'geometry',   stylers: [{color: '#746855'}] },
					{ featureType: 'road.highway',   elementType: 'geometry.stroke',  stylers: [{color: '#1f2835'}] },
					{ featureType: 'road.highway',  elementType: 'labels.text.fill',   stylers: [{color: '#f3d19c'}] },
					{ featureType: 'transit', elementType: 'geometry',   stylers: [{color: '#2f3948'}] 	},
					{ featureType: 'transit.station', elementType: 'labels.text.fill',  stylers: [{color: '#d59563'}] },
					{ featureType: 'water',  elementType: 'geometry',  stylers: [{color: '#17263c'}] },
					{  featureType: 'water', elementType: 'labels.text.fill',  stylers: [{color: '#515c6d'}] },
					{  featureType: 'water',   elementType: 'labels.text.stroke', stylers: [{color: '#17263c'}] }  ];

	                break;

	            case 'cobalt' :
	                stylez = [ {featureType: "all",elementType: "all",stylers: [{invert_lightness: true},{saturation: 10},{lightness: 30},{gamma: 0.5},{hue: "#435158"}]} ];
	                break;

	            case 'brownie' :
	                stylez = [ {"stylers": [{ "hue": "#ff8800" },{ "gamma": 0.4 }]} ];
	                break;

	            default :
	                stylez = '';

	        };

	        var settings = {
	            zoom: Number(zoom),
	            center: latlng,
	            mapTypeControl: control,
	            mapTypeControlOptions: {
	                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
	            },
	            scrollwheel: scrollwheel,
	            disableDefaultUI: disable_ui,
	            draggable: draggable,

	        };

	        var map = new google.maps.Map(document.getElementById(id), settings);
	        var mapType = new google.maps.StyledMapType(stylez, { name:style.charAt(0).toUpperCase() + style.slice(1) });
	        map.mapTypes.set('tehgrayz', mapType);
	        map.setMapTypeId('tehgrayz');
			
			// Marker + Box Info
	        
                    var companyPos = new google.maps.LatLng(lat, lon);
                    var companyMarker = new google.maps.Marker({
                        position: companyPos,
                        map: map,
                        icon: marker,
                        zIndex: 99999
                    });
	        
		})
	    // END GOOGLE MAP
	});
})(jQuery);