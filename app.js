requirejs.config({
	paths : {
		esri: '//jsdev.arcgis.com/3.9/js/esri',
		dojo : '//jsdev.arcgis.com/3.9/js/dojo/dojo',
		dijit : '//jsdev.arcgis.com/3.9/js/dojo/dijit',
		dojox : '//jsdev.arcgis.com/3.9/js/dojo/dojox'
	},
	baseUrl : "scripts/helpers",
	shim : {}
});


// Load the main app module to start the app
requirejs(['arcgis-gears' ]);