var type1 = L.layerGroup();

	L.marker([32.06167,118.77778]).bindPopup('This is A').addTo(type1),
	L.marker([32.16167,118.87778]).bindPopup('This is B').addTo(type1),
	L.marker([32.26167,118.97778]).bindPopup('This is C').addTo(type1),
	L.marker([32.36167,118.07778]).bindPopup('This is D').addTo(type1);


	var type2 = L.layerGroup();

	L.marker([32.06167,118.67778]).bindPopup('This is A').addTo(type2), {icon: L.AwesomeMarkers.icon({icon: 'spinner', markerColor: 'red', prefix: 'fa', spin:true}) }).addTo(map);
	L.marker([32.16167,118.57778]).bindPopup('This is B').addTo(type2),
	L.marker([32.26167,118.37778]).bindPopup('This is C').addTo(type2),
	L.marker([32.36167,118.47778]).bindPopup('This is D').addTo(type2);