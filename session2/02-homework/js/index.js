//Global variables
var scene, camera, renderer;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6;
var geometry7, material7, mesh7;
var geometry8, material8, mesh8;
var geometry9, material9, mesh9;
var geometry10, material10, mesh10;
var geometry11, material11, mesh11;
var geometry12, material12, mesh12;
var geometry13, material13, mesh13;
var geometry14, material14, mesh14;
var geometry15, material15, mesh15;
var geometry16, material16, mesh16;


var texture1 = new THREE.TextureLoader().load("texture/water.jpg");
var material1= new THREE.MeshBasicMaterial({map:texture1});

var texture2 = new THREE.TextureLoader().load("texture/lavatile.jpg");
var material2= new THREE.MeshBasicMaterial({map:texture2});

var texture3 = new THREE.TextureLoader().load("texture/cloud.png");
var material3= new THREE.MeshBasicMaterial({map:texture3});


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
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh1 );
  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.CubeGeometry(30, 30, 100);
  mesh2 = new THREE.Mesh( geometry2, material1 );
  mesh2.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh2 );
  // Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.CubeGeometry(30, 30, 100);
  mesh3 = new THREE.Mesh( geometry3, material1 );
  mesh3.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh3 );

  geometry4 = new THREE.RingGeometry( 150, 175, 3 );
  mesh4 = new THREE.Mesh( geometry4, material1 );
  mesh4.position.z = -1000;

  scene.add( mesh4 );

  geometry5 = new THREE.RingGeometry( 150, 175, 3 );
  mesh5 = new THREE.Mesh( geometry5, material1 );
  mesh5.position.z = -1000;

  scene.add( mesh5 );

  // Create a Cube Mesh with basic material ---------
  geometry6 = new THREE.CubeGeometry(30, 30, 100);
  mesh6 = new THREE.Mesh( geometry6, material2 );
  mesh6.position.z = -1000;
  mesh6.position.x = -500;

  // Add mesh to scene
  scene.add( mesh6 );
  // Create a Cube Mesh with basic material ---------
  geometry7 = new THREE.CubeGeometry(30, 30, 100);
  mesh7 = new THREE.Mesh( geometry7, material2 );
  mesh7.position.z = -1000;
  mesh7.position.x = -500;

  // Add mesh to scene
  scene.add( mesh7 );
  // Create a Cube Mesh with basic material ---------
  geometry8 = new THREE.CubeGeometry(30, 30, 100);
  mesh8 = new THREE.Mesh( geometry8, material2 );
  mesh8.position.z = -1000;
  mesh8.position.x = -500;

  // Add mesh to scene
  scene.add( mesh8 );

  geometry9 = new THREE.RingGeometry( 150, 175, 3 );
  mesh9 = new THREE.Mesh( geometry9, material2 );
  mesh9.position.z = -1000;
  mesh9.position.x = -500;

  scene.add( mesh9 );

  geometry10 = new THREE.RingGeometry( 150, 175, 3 );
  mesh10 = new THREE.Mesh( geometry10, material2 );
  mesh10.position.z = -1000;
  mesh10.position.x = -500;

  scene.add( mesh10 );

  // Create a Cube Mesh with basic material ---------
  geometry11 = new THREE.CubeGeometry(30, 30, 100);
  mesh11 = new THREE.Mesh( geometry11, material3 );
  mesh11.position.z = -1000;
  mesh11.position.x = 500;

  // Add mesh to scene
  scene.add( mesh11 );
  // Create a Cube Mesh with basic material ---------
  geometry12 = new THREE.CubeGeometry(30, 30, 100);
  mesh12 = new THREE.Mesh( geometry12, material3 );
  mesh12.position.z = -1000;
  mesh12.position.x = 500;

  // Add mesh to scene
  scene.add( mesh12 );
  // Create a Cube Mesh with basic material ---------
  geometry13 = new THREE.CubeGeometry(30, 30, 100);
  mesh13 = new THREE.Mesh( geometry13, material3 );
  mesh13.position.z = -1000;
  mesh13.position.x = 500;

  // Add mesh to scene
  scene.add( mesh13 );

  geometry14 = new THREE.RingGeometry( 150, 175, 3 );
  mesh14 = new THREE.Mesh( geometry14, material3 );
  mesh14.position.z = -1000;
  mesh14.position.x = 500;

  scene.add( mesh14 );

  geometry15 = new THREE.RingGeometry( 150, 175, 3 );
  mesh15 = new THREE.Mesh( geometry15, material3 );
  mesh15.position.z = -1000;
  mesh15.position.x = 500;

  scene.add( mesh15 );





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
  mesh6.rotation.x += 0.03; //Continuously rotate the mesh
  mesh6.rotation.y += 0.03;
  mesh7.rotation.y += 0.03; //Continuously rotate the mesh
  mesh7.rotation.z += 0.03;
  mesh8.rotation.z += 0.03;
  mesh8.rotation.x += 0.03;
  mesh9.rotation.y += 0.03;
  mesh9.rotation.x += 0.03;
  mesh10.rotation.y += 0.03;
  mesh10.rotation.z += 0.03;
  mesh11.rotation.x += 0.03; //Continuously rotate the mesh
  mesh11.rotation.y += 0.03;
  mesh12.rotation.y += 0.03; //Continuously rotate the mesh
  mesh12.rotation.z += 0.03;
  mesh13.rotation.z += 0.03;
  mesh13.rotation.x += 0.03;
  mesh14.rotation.y += 0.03;
  mesh14.rotation.x += 0.03;
  mesh15.rotation.y += 0.03;
  mesh15.rotation.z += 0.03;
  renderer.setClearColor("#DC87C9");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
