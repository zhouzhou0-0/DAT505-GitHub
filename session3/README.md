#### DAT505-GitHub ####
example: GUI
homework:The assignment was to do a art geometry,so i created a penrose triangle surrounded by the spherical wireframe.It exploits visual illusion and at a particular angle,you can se different things.

### Usage ###
```html
  <script src="build/three.min.js"></script>
  ```
This code creates a penrose triangle
  ```javascript
  Create the bottom box
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
  ```
  This code add all of the parts in a group and add them to the scene and let it rotate.
```javascript
  // Add all of the parts in a group and add them to the scene
  var group = new THREE.Group()
  group.add(bottomMesh)
  group.add(upMesh)
  group.add(topMesh)
  group.add(topPlaneMesh)
  group.add(topTriMesh)
  scene.add(group)

  var render = function(){
    group.rotation.y -= 0.005;
requestAnimationFrame(render)
renderer.render(scene, camera)
  }
  var length = 12, width = 8;
```
