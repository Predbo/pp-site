function updateGroupGeometry(mesh, geometry) {

	mesh.children[0].geometry.dispose();
	mesh.children[1].geometry.dispose();

	mesh.children[0].geometry = new THREE.WireframeGeometry(geometry);
	mesh.children[1].geometry = geometry;

}

function chooseFromHash(mesh) {

	var data = {
		text : "PP",
		size : 20,
		height : 2,
		curveSegments : 12,
		font : "optimer",
		weight : "bold",
		bevelEnabled : true,
		bevelThickness : 1,
		bevelSize : 1
	};

	function generateGeometry() {

		var loader = new THREE.FontLoader();
		loader.load('../js/' + data.font + '_' + data.weight + '.typeface.js', function(font) {

			var geometry = new THREE.TextGeometry(data.text, {
				font : font,
				size : data.size,
				height : data.height,
				curveSegments : data.curveSegments,
				bevelEnabled : data.bevelEnabled,
				bevelThickness : data.bevelThickness,
				bevelSize : data.bevelSize
			});
			geometry.center();

			updateGroupGeometry(mesh, geometry);

		});

	}

	//Hide the wireframe
	mesh.children[0].visible = false;

	generateGeometry();

}
