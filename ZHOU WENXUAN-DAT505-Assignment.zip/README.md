### ZHOU WENXUAN(B161006108)DAT505-Assignment###
The aim of the project is to create an abstract universe, with simple geometry showing multiple planets orbiting their stars.At the same time，you can drag the mouse to view if from different angles,which will magnify the effect when the mouse touches the rorating planet.

### Usage ###
* code js:
Configuration files. The planet's revolution radius, sphere radius and revolution Angle are defined

* Contributor.js:
This code sets the global default variables: screen width, height, default angular speed of planet revolution, zoom speed, etc

* main.js:

```javascript
  function initRepository(size) {//初始化网格
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
