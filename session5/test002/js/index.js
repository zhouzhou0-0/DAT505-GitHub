var renderer, scene, camera;
var cubes = [];
var randomSpeedX = [];

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
  H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(0, 55, 85);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 1000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
    for (var x = -10; x <= 10; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -10; y <= 10; y += 5) {

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      //var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      if (x==-5 && y==-5){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      } else if (x==5 && y ==5){
        boxMaterial = new THREE.MeshLambertMaterial({color: 0xF8B195});
      } else {
        boxMaterial = new THREE.MeshLambertMaterial({color: 0x355C7D});
      }

      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = y;
      mesh.rotation.x = Math.random() * 2 * Math.PI;
      mesh.rotation.y = Math.random() * 2 * Math.PI;
      mesh.rotation.z = Math.random() * 2 * Math.PI;
      var rotValX =(Math.random() *0.05) - 0.025;
      var rotValY =(Math.random() *0.05) - 0.025;
      var scValX =Math.random() - 0.5;
      var scValY =Math.random() - 0.5;
      var scValZ =Math.random() - 0.5;
      rotX.push(rotValX);
      rotY.push(rotValY);
      scaleX.push(scValX);
      scaleY.push(scValY);
      scaleZ.push(scValZ);
      scaleCube.push(scValX);
      scene.add(mesh);
      cubes.push(mesh);
 }
}

  console.log(cubes);
  document.body.appendChild(renderer.domElement);
}

var scaleCube = -3;

function drawFrame(){
  requestAnimationFrame(drawFrame);

  scaleCube +=0.02;
  if (scaleCube > 3) scaleCube = -5;

  cubes.forEach(function(c,i){
    c.rotation.x = 0.2;//Rotate the object that is reference
    c.rotation.y = 0.1;
    c.scale.x = scaleCube;
  });

   console.log(scaleCube)


//console.log(randomRotationX);
/*for (var i = 0; i < 5; i ++){
  cubes[6].rotation.x += randomSpeedX[6];
  cubes[18].rotation.x += randomSpeedX[18];
}*/
  renderer.render(scene, camera);
}


init();
drawFrame()
