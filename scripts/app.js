requirejs.config({
	paths : {
		esri: '//js.arcgis.com/3.9/js/esri',
		dojo : '//js.arcgis.com/3.9/js/dojo/dojo',
		dijit : '//js.arcgis.com/3.9/js/dojo/dijit',
		dojox : '//js.arcgis.com/3.9/js/dojo/dojox'
	},
	baseUrl : "scripts/helpers",
	shim : {}
});


// Load the main app module to start the app
requirejs(['arcgis-gears']);