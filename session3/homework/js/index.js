
			// Create a scene
            var scene = new THREE.Scene()

            // Create an orthographic camera
            var camera = new THREE.OrthographicCamera(window.innerWidth/-2, window.innerWidth/2, window.innerHeight/2, window.innerHeight/-2, 2, 2000)
            camera.position.set(500, 500, 500)
            camera.lookAt(scene.position)

            // Create renderer object and add it to the HTML file
            var renderer = new THREE.WebGLRenderer({antialias: true})
            renderer.setSize(window.innerWidth, window.innerHeight)
            document.body.appendChild(renderer.domElement)

            //Create circle
            var geometry = new THREE.SphereBufferGeometry( 350, 16, 16);
            var material = new THREE.MeshBasicMaterial( {color: 0xDD99DD} );
            material = new THREE.MeshBasicMaterial( {wireframe : true} );
            var sphere = new THREE.Mesh( geometry, material );
            scene.add( sphere );
            sphere.position.set(125,125,125)


            // Create the bottom box
            var bottomBox = new THREE.BoxGeometry(50, 50, 300)
            // Material to be used for the mesh
            var material = new THREE.MeshLambertMaterial({color: "0xDD99DD", flatShading: true})
            var bottomMesh = new THREE.Mesh(bottomBox, material)

            // Up box
            var upBox = new THREE.BoxGeometry(50, 300, 50)
            var upMesh = new THREE.Mesh(upBox, material)
            upMesh.position.set(0,125,125)

            // Top box
            var topBox = new THREE.BoxGeometry(150, 50, 50)
            var topMesh = new THREE.Mesh(topBox, material)
            topMesh.position.set(100,250,125)

            // Top plane
            var topPlane = new THREE.PlaneGeometry(50, 50, 32)
            var topPlaneMesh = new THREE.Mesh(topPlane, material)
            topPlaneMesh.position.set(200, 275, 125)
            topPlaneMesh.rotation.x = THREE.Math.degToRad(-90)

            // Top side triangle
            var topTri = new THREE.Geometry()
            topTri.vertices.push(new THREE.Vector3(0,0,0))
            topTri.vertices.push(new THREE.Vector3(50,0,0))
            topTri.vertices.push(new THREE.Vector3(50,50,0))
            topTri.faces.push(new THREE.Face3(0,1,2))
            topTri.computeFaceNormals()

            // Create the mesh and set its position in space
            var topTriMesh = new THREE.Mesh(topTri, material)
            topTriMesh.position.set(225,275,150)
            topTriMesh.rotation.z = THREE.Math.degToRad(180)

            // Add all of the parts in a group and add them to the scene
            var group = new THREE.Group()
            group.add(bottomMesh)
            group.add(upMesh)
            group.add(topMesh)
            group.add(topPlaneMesh)
            group.add(topTriMesh)
            scene.add(group)


            // Create a light source
            var light = new THREE.DirectionalLight("white", 1.8)
            light.position.set(60, 100, 20)
            scene.add(light)

            // Rendering the scene continuosly
            var render = function(){
            	group.rotation.y -= 0.005;
			  	requestAnimationFrame(render)
			  	renderer.render(scene, camera)
            }
            var length = 12, width = 8;

  var shape = new THREE.Shape();
  shape.moveTo( 0,0 );
  shape.lineTo( 0, width );
  shape.lineTo( length, width );
  shape.lineTo( length, 0 );
  shape.lineTo( 0, 0 );

  var extrudeSettings = {
  	steps: 2,
  	depth: 16,
  	bevelEnabled: true,
  	bevelThickness: 1,
  	bevelSize: 1,
  	bevelSegments: 1
  };





            render()
