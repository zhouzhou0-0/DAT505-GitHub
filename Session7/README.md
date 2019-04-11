#### DAT505-GitHub####
examples:Drop the squares randomly and assign different materials to them.
Move the mouse to move your eyes
gomework:Create a set of eyeballs in different positions and follow the mouse around

### Usage ###
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```
Modify UVs to accommodate MatCap texture
```javascript
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for (  i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  //var uvs  = new THREE.Mesh(geometry.clone());
  for (var  j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
```
This code let the geometry follow the mouse around
```javascript
function render() {
	console.log(window.innerHeight)
	cubes.forEach(function(c,i){
	cubes[i].rotation.x = mouseY/window.innerHeight*2;
	cubes[i].rotation.y = mouseX/window.innerWidth*2;
});
```
