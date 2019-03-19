//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
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







var WIDTH = window.innerWidth,
HEIGHT = window.innerHeight;

//GUI - Declare variable
var gui = null;

//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};

init();
render();

function init(){
  threejs = document.getElementById('threejs');

  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a renderer  ------------
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0xDD99DD, 1);
  renderer.shadowMap.Enabled = true;
  renderer.shadowMapSoft = true;

  threejs.appendChild(renderer.domElement);

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 1 , 1000);
  camera.position.set(3, -9, 4);
  camera.lookAt(scene.position);
  camera.rotation.y = de2ra(30);
  scene.add(camera);

  // Create a Cube Mesh with material ---------
  geometry = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  //color = Math.random() * 0xffffff;

  geometry1 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  //color = Math.random() * 0xffffff;
  geometry2 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry3 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry4 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry5 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry6 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry7 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry8 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry9 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  geometry10 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );
  //geometry11 = new THREE.BoxBufferGeometry( 0.4, 0.4, 0.4 );





/*  var material = new THREE.MeshLambertMaterial({
    //ambient: color,
    color: color,
    transparent: true
  });*/

  mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(0, 0, 0);
  mesh.rotation.set(0, 0, 0);
  mesh.rotation.y = de2ra(0);
  mesh.scale.set(1, 1, 1);
  mesh.doubleSided = true;
  mesh.castShadow = true;
  scene.add(mesh);

  mesh1 = new THREE.Mesh(geometry, material);
  mesh1.position.set(0, 0.4, 0);
  mesh1.rotation.set(0, 0, 0);
  mesh1.rotation.y = de2ra(0);
  mesh1.scale.set(1, 1, 1);
  mesh1.doubleSided = true;
  mesh1.castShadow = true;
  scene.add(mesh1);

  mesh2 = new THREE.Mesh(geometry, material);
  mesh2.position.set(0, 0.8, 0);
  mesh2.rotation.set(0, 0, 0);
  mesh2.rotation.y = de2ra(0);
  mesh2.scale.set(1, 1, 1);
  mesh2.doubleSided = true;
  mesh2.castShadow = true;
  scene.add(mesh2);

  mesh3 = new THREE.Mesh(geometry, material);
  mesh3.position.set(0, 1.2, 0);
  mesh3.rotation.set(0, 0, 0);
  mesh3.rotation.y = de2ra(0);
  mesh3.scale.set(1, 1, 1);
  mesh3.doubleSided = true;
  mesh3.castShadow = true;
  scene.add(mesh3);

  mesh4 = new THREE.Mesh(geometry, material);
  mesh4.position.set(0, 1.6, 0);
  mesh4.rotation.set(0, 0, 0);
  mesh4.rotation.y = de2ra(0);
  mesh4.scale.set(1, 1, 1);
  mesh4.doubleSided = true;
  mesh4.castShadow = true;
  scene.add(mesh4);

  mesh5 = new THREE.Mesh(geometry, material);
  mesh5.position.set(0.4, 0, 0);
  mesh5.rotation.set(0, 0, 0);
  mesh5.rotation.y = de2ra(0);
  mesh5.scale.set(1, 1, 1);
  mesh5.doubleSided = true;
  mesh5.castShadow = true;
  scene.add(mesh5);

  mesh6 = new THREE.Mesh(geometry, material);
  mesh6.position.set(0.8, 0, 0);
  mesh6.rotation.set(0, 0, 0);
  mesh6.rotation.y = de2ra(0);
  mesh6.scale.set(1, 1, 1);
  mesh6.doubleSided = true;
  mesh6.castShadow = true;
  scene.add(mesh6);

  mesh7 = new THREE.Mesh(geometry, material);
  mesh7.position.set(1.2, 0, 0);
  mesh7.rotation.set(0, 0, 0);
  mesh7.rotation.y = de2ra(0);
  mesh7.scale.set(1, 1, 1);
  mesh7.doubleSided = true;
  mesh7.castShadow = true;
  scene.add(mesh7);

  mesh8 = new THREE.Mesh(geometry, material);
  mesh8.position.set(1.6, 0, 0);
  mesh8.rotation.set(0, 0, 0);
  mesh8.rotation.y = de2ra(0);
  mesh8.scale.set(1, 1, 1);
  mesh8.doubleSided = true;
  mesh8.castShadow = true;
  scene.add(mesh8);

  mesh9 = new THREE.Mesh(geometry, material);
  mesh9.position.set(0, 1.6, -0.4);
  mesh9.rotation.set(0, 0, 0);
  mesh9.rotation.y = de2ra(0);
  mesh9.scale.set(1, 1, 1);
  mesh9.doubleSided = true;
  mesh9.castShadow = true;
  scene.add(mesh9);

  mesh10 = new THREE.Mesh(geometry, material);
  mesh10.position.set(0, 1.6, -0.8);
  mesh10.rotation.set(0, 0, 0);
  mesh10.rotation.y = de2ra(0);
  mesh10.scale.set(1, 1, 1);
  mesh10.doubleSided = true;
  mesh10.castShadow = true;
  scene.add(mesh10);


  mesh11 = new THREE.Mesh(geometry, material);
  mesh11.position.set(0, 1.6, -0.8);
  mesh11.rotation.set(0, 0, 0);
  mesh11.rotation.y = de2ra(0);
  mesh11.scale.set(1, 1, 1);
  mesh11.doubleSided = true;
  mesh11.castShadow = true;
  scene.add(mesh11);

  THREE.Vector3
  mesh11 = new THREE.Mesh(geometry, material);
  mesh11.position.set(0, 1.6, -0.8);
  mesh11.rotation.set(0, 0, 0);
  mesh11.rotation.y = de2ra(0);
  mesh11.scale.set(1, 1, 1);
  mesh11.doubleSided = true;
  mesh11.castShadow = true;
  scene.add(mesh11);




  lightingSystem();

  //GUI - Setup the GUI controller
  var controller = new function() {
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
  //  this.boxColor = color;
    //this.castShadow = true;
    this.boxOpacity = 1;
  }();

  var gui = new dat.GUI();
  var f1 = gui.addFolder('Scale');
  f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
    mesh.scale.x = (controller.scaleX);
    mesh1.scale.x = (controller.scaleX);
    mesh2.scale.x = (controller.scaleX);
    mesh3.scale.x = (controller.scaleX);
    mesh4.scale.x = (controller.scaleX);
    mesh5.scale.x = (controller.scaleX);
    mesh6.scale.x = (controller.scaleX);
    mesh7.scale.x = (controller.scaleX);
    mesh8.scale.x = (controller.scaleX);
    mesh9.scale.x = (controller.scaleX);
    mesh10.scale.x = (controller.scaleX);
      mesh11.scale.x = (controller.scaleX);
  });
  f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
    mesh.scale.y = (controller.scaleY);
    mesh1.scale.y = (controller.scaleY);
    mesh2.scale.x = (controller.scaleX);
    mesh3.scale.x = (controller.scaleX);
    mesh4.scale.x = (controller.scaleX);
    mesh5.scale.y = (controller.scaleY);
    mesh6.scale.y = (controller.scaleY);
    mesh7.scale.x = (controller.scaleX);
    mesh8.scale.x = (controller.scaleX);
    mesh9.scale.y = (controller.scaleY);
    mesh10.scale.x = (controller.scaleX);
    mesh11.scale.x = (controller.scaleX);

  });
  f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
    mesh.scale.z = (controller.scaleZ);
    mesh1.scale.z = (controller.scaleZ);
    mesh2.scale.z = (controller.scaleZ);
    mesh3.scale.z = (controller.scaleZ);
    mesh4.scale.z = (controller.scaleZ);
    mesh5.scale.z = (controller.scaleZ);
    mesh6.scale.z = (controller.scaleZ);
    mesh7.scale.z = (controller.scaleZ);
    mesh8.scale.z = (controller.scaleZ);
    mesh9.scale.z = (controller.scaleZ);
    mesh10.scale.z = (controller.scaleZ);
    mesh11.scale.z = (controller.scaleZ);
  });

  var f2 = gui.addFolder('Position');
  f2.add(controller, 'positionX', -5, 5).onChange( function() {
    mesh.position.x = (controller.positionX);
    mesh1.position.x = (controller.positionX);
    mesh2.position.x = (controller.positionX);
    mesh3.position.x = (controller.positionX);
    mesh4.position.x = (controller.positionX);
    mesh5.position.x = (controller.positionX);
    mesh6.position.x = (controller.positionX);
    mesh7.position.x = (controller.positionX);
    mesh8.position.x = (controller.positionX);
    mesh9.position.x = (controller.positionX);
    mesh10.position.x = (controller.positionX);
    mesh11.position.x = (controller.positionX);
  });
  f2.add(controller, 'positionY', -5, 5).onChange( function() {
    mesh.position.y = (controller.positionY);
    mesh1.position.y = (controller.positionY);
    mesh2.position.y = (controller.positionY);
    mesh3.position.y = (controller.positionY);
    mesh4.position.y = (controller.positionY);
    mesh5.position.y = (controller.positionY);
    mesh6.position.y = (controller.positionY);
    mesh7.position.y = (controller.positionY);
    mesh8.position.y = (controller.positionY);
    mesh9.position.y = (controller.positionY);
    mesh10.position.y = (controller.positionY);
    mesh11.position.y = (controller.positionY);


  });
  f2.add(controller, 'positionZ', -5, 5).onChange( function() {
    mesh.position.z = (controller.positionZ);
    mesh1.position.z = (controller.positionZ);
    mesh2.position.z = (controller.positionZ);
    mesh3.position.z = (controller.positionZ);
    mesh4.position.z = (controller.positionZ);
    mesh5.position.z = (controller.positionZ);
    mesh6.position.z = (controller.positionZ);
    mesh7.position.z = (controller.positionZ);
    mesh8.position.z = (controller.positionZ);
    mesh9.position.z = (controller.positionZ);
    mesh10.position.z = (controller.positionZ);
    mesh11.position.z = (controller.positionZ);
  });

  var f3 = gui.addFolder('Rotation');
  f3.add(controller, 'rotationX', -180, 180).onChange( function() {
    mesh.rotation.x = de2ra(controller.rotationX);
    mesh1.rotation.x = de2ra(controller.rotationX);
    mesh2.rotation.x = de2ra(controller.rotationX);
    mesh3.rotation.x = de2ra(controller.rotationX);
    mesh4.rotation.x = de2ra(controller.rotationX);
    mesh5.rotation.x = de2ra(controller.rotationX);
    mesh6.rotation.x = de2ra(controller.rotationX);
    mesh7.rotation.x = de2ra(controller.rotationX);
    mesh8.rotation.x = de2ra(controller.rotationX);
    mesh9.rotation.x = de2ra(controller.rotationX);
    mesh10.rotation.x = de2ra(controller.rotationX);
    mesh11.rotation.x = de2ra(controller.rotationX);
  });
  f3.add(controller, 'rotationY', -180, 180).onChange( function() {
    mesh.rotation.y = de2ra(controller.rotationY);
    mesh1.rotation.y = de2ra(controller.rotationY);
    mesh2.rotation.y = de2ra(controller.rotationY);
    mesh3.rotation.y = de2ra(controller.rotationY);
    mesh4.rotation.y = de2ra(controller.rotationY);
    mesh5.rotation.y = de2ra(controller.rotationY);
    mesh6.rotation.y = de2ra(controller.rotationY);
    mesh7.rotation.y = de2ra(controller.rotationY);
    mesh8.rotation.y = de2ra(controller.rotationY);
    mesh9.rotation.y = de2ra(controller.rotationY);
    mesh10.rotation.y = de2ra(controller.rotationY);
    mesh11.rotation.y = de2ra(controller.rotationY);
  });
  f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
    mesh.rotation.z = de2ra(controller.rotationZ);
    mesh1.rotation.z = de2ra(controller.rotationZ);
    mesh2.rotation.z = de2ra(controller.rotationZ);
      mesh3.rotation.z = de2ra(controller.rotationZ);
        mesh4.rotation.z = de2ra(controller.rotationZ);
        mesh5.rotation.z = de2ra(controller.rotationZ);
        mesh6.rotation.z = de2ra(controller.rotationZ);
          mesh7.rotation.z = de2ra(controller.rotationZ);
            mesh8.rotation.z = de2ra(controller.rotationZ);
            mesh9.rotation.z = de2ra(controller.rotationZ);
              mesh10.rotation.z = de2ra(controller.rotationZ);
                mesh11.rotation.z = de2ra(controller.rotationZ);
  });
  /*gui.addColor( controller, 'boxColor', color ).onChange( function() {
    mesh.material.color.setHex( dec2hex(controller.boxColor) );
    mesh1.material.color.setHex( dec2hex(controller.boxColor) );
  });*/
  //gui.add( controller, 'castShadow', false ).onChange( function() {
    //mesh.castShadow = controller.castShadow;
  //});
  gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
    material.opacity = (controller.boxOpacity);
  });
}

//Color converter
/*function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}*/

// Render Loop
function render () {
  requestAnimationFrame(render);
  //mesh.rotation.x += 0.01; //Continuously rotate the mesh
  //mesh.rotation.y += 0.01;
  //renderer.setClearColor("#000000");
  // Render the scene
  renderer.render(scene, camera);
};

function lightingSystem(){
  var object3d  = new THREE.DirectionalLight('white', 0.15);
  object3d.position.set(6,3,9);
  object3d.name = 'Back light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.35);
  object3d.position.set(-6, -3, 0);
  object3d.name   = 'Key light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.55);
  object3d.position.set(9, 9, 6);
  object3d.name = 'Fill light';
  scene.add(object3d);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 3, 30, 3 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 45;
  scene.add( spotLight );
}
