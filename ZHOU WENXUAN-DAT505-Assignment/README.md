### ZHOU WENXUAN B161006108###
### DAT505-Assignment###
This project is to do an immersive interactive experience, exploring the connection between human beings and the universe.
The aim of the project is to create an abstract universe, with simple geometry showing multiple planets orbiting their stars.At the same time，you can drag the mouse to view if from different angles,which will magnify the effect when the mouse touches the rorating planet.

### Usage ###
```html
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/three.min.js"></script>
<script src="js/tween.min.js"></script>
<script src="js/TrackballControls.js"></script>
<script src="js/Contributor.js"></script>
<script src="js/code.json"></script>
<script src="js/main.js"></script>
```
* code js:
Configuration files. The planet's revolution radius, sphere radius and revolution Angle are defined.

* Contributor.js:
This code sets the global default variables: screen width, height, default angular speed of planet revolution, zoom speed, etc.

* main.js:

This code creates the sphere, defines the size and position of the sphere and gives the material to the object.
```javascript
  function initRepository(size) {
var repository = createMesh(
    new THREE.SphereGeometry(parseInt(size), 20, 20),
    "./earth.jpg"
);
repository.position = {
    x: 0,
    y: 0,
    z: 1000
  }
  return repository;
}
function createMesh(geom, imageFile) {
    var texture = THREE.ImageUtils.loadTexture(imageFile);
    var mat = new THREE.MeshNormalMaterial({ map: texture });
    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}
```
This code creates a group of planets, traverses the planets, and sets properties and defines the random color of the planets and the speed and radius of their orbits around the star.
```javascript
function initContributors(data, scene) {
    var contributors = [];
    for (var i = 0; i < data.planets.length; i++) {
        var planet = data.planets[i],
            color = Math.random() * 0xffffff,
            radius = planet['size'] * 0.3,
            rail_radius = planet.distance * 900 + 1000,
            speed = planet.speed,
            contributor = new Contributor(scene, radius, rail_radius,
                speed, color);
        contributors.push(contributor);
    }
    return contributors;
}
```
This code creates a light source and a shadow. Set this to true and the shadow will be generated.
```javascript
function initLight() {
    var light = new THREE.DirectionalLight(0xffffff, 2.25);
    light.position.set(200, 450, 500);

    light.castShadow = true;
    light.shadowMapWidth = 1024;
    light.shadowMapHeight = 1024;
    light.shadowMapDarkness = 0.95;
```
This code creates better shading, with more detailed shading near the camera view and less detail away from the camera view.
```javascript
light.shadowCascade = true;
light.shadowCascadeCount = 3;
light.shadowCascadeNearZ = [-1.000, 0.995, 0.998];
light.shadowCascadeFarZ = [0.995, 0.998, 1.000];
light.shadowCascadeWidth = [1024, 1024, 1024];
light.shadowCascadeHeight = [1024, 1024, 1024];
```
This code creates a ground.
```javascript
var plane = new THREE.Mesh(/
    new THREE.PlaneGeometry(10000, 10000, 50, 50),
    new THREE.MeshBasicMaterial({
        color: 0x555555,
        wireframe: true
    })
);
```
View controls follow TrackballControls.
```javascript
cameraControls = new THREE.TrackballControls(camera, renderer.domElement);
```
