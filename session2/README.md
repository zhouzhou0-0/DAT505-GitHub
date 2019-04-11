#### DAT505-GitHub ####
examples:Twelve small squares were created in the scene and two of them were given different textures.
homework:I added three geometries with different texture:cloud,lavatile and water.

### Usage ###
```html
<script src="build/three.js"></script>
```
Adds texture to geometry
```javascript
var texture1 = new THREE.TextureLoader().load("texture/water.jpg");
var material1= new THREE.MeshBasicMaterial({map:texture1});

var texture2 = new THREE.TextureLoader().load("texture/lavatile.jpg");
var material2= new THREE.MeshBasicMaterial({map:texture2});

var texture3 = new THREE.TextureLoader().load("texture/cloud.png");
var material3= new THREE.MeshBasicMaterial({map:texture3});

```
