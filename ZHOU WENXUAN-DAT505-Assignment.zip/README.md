### ZHOU WENXUAN(B161006108)DAT505-Assignment###
The aim of the project is to create an abstract universe, with simple geometry showing multiple planets orbiting their stars.At the same time，you can drag the mouse to view if from different angles,which will magnify the effect when the mouse touches the rorating planet.

### Usage ###
* code js:
Configuration files. The planet's revolution radius, sphere radius and revolution Angle are defined

* Contributor.js:
This code sets the global default variables: screen width, height, default angular speed of planet revolution, zoom speed, etc

* main.js:

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
```javascript
function initLight() {//初始化光源
    var light = new THREE.DirectionalLight(0xffffff, 2.25);//方向光源
    light.position.set(200, 450, 500);

    light.castShadow = true;//投影，设为true，这个光源就会生成阴影
    light.shadowMapWidth = 1024;//阴影映射宽度
    light.shadowMapHeight = 1024;//阴影映射高度
    light.shadowMapDarkness = 0.95;//阴影暗度

    light.shadowCascade = true;//创建更好的阴影效果
    light.shadowCascadeCount = 3;//靠近摄相机视点会产生更具细节的阴影，而远离摄像机视点阴影的细节更少
    light.shadowCascadeNearZ = [-1.000, 0.995, 0.998];//阴影级联近处
    light.shadowCascadeFarZ = [0.995, 0.998, 1.000];//阴影级联远处
    light.shadowCascadeWidth = [1024, 1024, 1024];//阴影级联宽度数组
    light.shadowCascadeHeight = [1024, 1024, 1024];//阴影级联高度数组

    return light;
}
```
