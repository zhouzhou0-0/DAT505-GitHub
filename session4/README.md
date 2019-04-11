#### DAT505-GitHub ####
examoles:By array creating 64 rotating cubes,each of the eight groups has a uniform color.
homework:The homework required creating a set of small cubes that rotated at different speeds.
### Usage ###
```html
  <script src="build/three.min.js"></script>
  <script src="js/OrbitControls.js"></script>
  ```
This code creates a two dimensional grid of objects, and position them accordingly.Then it sets geometry size and random color.
  ```javascript
  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -35; x < 40; x += 5) { // Start from -35 and sequentially add one every 5 pixels
    for (var y = -35; y < 40; y += 5) {
      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color
      var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF/*position:Math.random(),rot:Math.random()*/});
      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
  ```
  This code allows the geometry to rotate at random angles.
  ```javascript
  mesh.rotation.x=360*Math.random();
  ```
