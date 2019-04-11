#### DAT505-GitHub library ####
examples:It is about how to add basic geometry,scene,light and rotation,ect.
homework:According to the example given in the class,i added five rotating geometries to the scene.

### Usage ###
```html
<script src="js/three.js"></script>
```
This code creates a scene, a camera, and  geometric cubes, and it adds the cube to the scene. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element. Finally, it animates the cube within the scene for the camera.

```html
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#DC87C9");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.CubeGeometry(30, 30, 100);
  material1 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );
  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.CubeGeometry(30, 30, 100);
  material2 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh2 );
  // Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.CubeGeometry(30, 30, 100);
  material3 = new THREE.MeshBasicMaterial( { color: "#FFCC66" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh3 );

  geometry4 = new THREE.RingGeometry( 150, 175, 3 );
  material4 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;

  scene.add( mesh4 );

  geometry5 = new THREE.RingGeometry( 150, 175, 3 );
  material5 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
  mesh5 = new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;

  scene.add( mesh5 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.03; //Continuously rotate the mesh
  mesh1.rotation.y += 0.03;
  mesh2.rotation.y += 0.03; //Continuously rotate the mesh
  mesh2.rotation.z += 0.03;
  mesh3.rotation.z += 0.03;
  mesh3.rotation.x += 0.03;
  mesh4.rotation.y += 0.03;
  mesh4.rotation.x += 0.03;
  mesh5.rotation.y += 0.03;
  mesh5.rotation.z += 0.03;
  renderer.setClearColor("#DC87C9");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
```
