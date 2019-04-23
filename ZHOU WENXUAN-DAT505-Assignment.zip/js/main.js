//当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件A ready event occurs when the DOM (document object model) is loaded and the page (including the image) is fully rendered
$(document).ready(function () {

    function initRepository(size) {//初始化网格Initialize mesh
        var repository = createMesh(
            new THREE.SphereGeometry(parseInt(size), 20, 20),//构造球体，半径长度为size，水平方向长度20，垂直方向长度20Construct the sphere with radius size, horizontal length 20 and vertical length 20
            "./earth.jpg"//材质属性The material properties
        );
        repository.position = {//设置x，y和z坐标的值Set the values of x, y, and z coordinates
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

    function initContributors(data, scene) {//创建行星群Creation of planetary group
        var contributors = [];
        for (var i = 0; i < data.planets.length; i++) {//遍历各个行星，设置属性Walk through the planets and set the properties
            var planet = data.planets[i],//行星对象Planetary object
                color = Math.random() * 0xffffff,//随机颜色Random color
                radius = planet['size'] * 0.3,//设置行星球体半径Set the radius of the planet sphere
                rail_radius = planet.distance * 900 + 1000,//设置绕恒星公转半径Set the radius of revolution around the star
                speed = planet.speed,//设置公转速度Set the revolution speed
                contributor = new Contributor(scene, radius, rail_radius,
                    speed, color);//创建行星Create a planet
            contributors.push(contributor);//加入行星队列变量中Add to the planetary alignment variable
        }
        return contributors;//返回行星队列Back to planet queue
    }

    function initLight() {//初始化光源Initializing light source
        var light = new THREE.DirectionalLight(0xffffff, 2.25);//方向光源Direction of the light source
        light.position.set(200, 450, 500);

        light.castShadow = true;//投影，设为true，这个光源就会生成阴影Projection, set to true, this light source will generate shadows
        light.shadowMapWidth = 1024;//阴影映射宽度Shadow width
        light.shadowMapHeight = 1024;//阴影映射高度Shadow map height
        light.shadowMapDarkness = 0.95;//阴影暗度Shadows darker

        light.shadowCascade = true;//创建更好的阴影效果Create better shadow effects
        light.shadowCascadeCount = 3;//靠近摄相机视点会产生更具细节的阴影，而远离摄像机视点阴影的细节更少Moving closer to the camera's view produces more detailed shadows, while moving farther away from the camera's view produces less detail
        light.shadowCascadeNearZ = [-1.000, 0.995, 0.998];//阴影级联近处Shadow cascading near
        light.shadowCascadeFarZ = [0.995, 0.998, 1.000];//阴影级联远处Shadows cascade in the distance
        light.shadowCascadeWidth = [1024, 1024, 1024];//阴影级联宽度数组Shadow cascading width array
        light.shadowCascadeHeight = [1024, 1024, 1024];//阴影级联高度数组Shadow cascading height array

        return light;
    }

    var scene = new THREE.Scene();//创建场景容器Creating a scene container
    var clock = new THREE.Clock();// 准备计时器Preparation timer

    var data = CODE.data//配置数据The configuration data
    var starSize = data.star[0]['size'];//恒星大小The star size
    var repository = initRepository(starSize);//创建恒星Create a star
    var contributors = initContributors(data, scene);//创建行星群Creation of planetary group
    var light = initLight();//初始化光源Initializing light source

    // 加入一个地面Add a ground
    var plane = new THREE.Mesh(//网格对象MESH.创建一个网格需要一个几何体，以及一个或多个材质MESH object MESH. Creating a MESH requires a geometry and one or more materials
        new THREE.PlaneGeometry(10000, 10000, 50, 50),//宽度, 高度, 宽度段数, 高度段数Width, height, width segment, height segment
        new THREE.MeshBasicMaterial({//材质The material
            color: 0x555555,
            wireframe: true
        })
    );

    scene.add(repository);//场景容器加入恒星Scene container adds star
    scene.add(plane);//场景容器加入地面The scene container joins the ground
    scene.add(light);//场景容器加入光源Scene containers add light sources

    var renderer = new THREE.WebGLRenderer();//渲染器The renderer
    renderer.setSize(window.innerWidth, window.innerHeight);//渲染器大小，窗体的尺寸Renderer size, form size
    document.body.appendChild(renderer.domElement);

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);//设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里（视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far）
    camera.position.z = 8000;//位置location

    // Controls
    cameraControls = new THREE.TrackballControls(camera, renderer.domElement);//视角控制遵从TrackballControls类方法View controls follow the TrackballControls class method

    function render() {
        var delta = clock.getDelta();
        cameraControls.update(delta);// 更新控制器状态Update controller status
        renderer.render(scene, camera);// 渲染场景Render the scene

        for (var i = 0; i < contributors.length; i++) {
            contributors[i].update();//行星位置更新Planetary position update
        }
    }

    function animate() {
        requestAnimationFrame(animate);//控制动画Control the animation
        render();//渲染页面To render the page
    }

    function onMouseMove(event) {
        var projector = new THREE.Projector();//声明一个projectorprojector
        var vector = new THREE.Vector3(//建立几何体的vertice(顶点)Vertice for geometry
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1,
            0.5);
        projector.unprojectVector(vector, camera);//将屏幕上点的位置转换成Three.js场景中的坐标Convert the position of the points on the screen to the coordinates in the three. js scene

        //在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。Form a ray in the viewpoint coordinate system. The starting vector of the ray is the camera, and the direction vector of the ray is the point from the camera to the click point. This vector should be normalized.
        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());//

        //射线和模型求交，选中一系列直线Intersect the ray with the model and select a series of lines
        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            //选中第一个射线相交的物体Select the object where the first ray intersects
            var mesh = intersects[0].object;
            if (!mesh.is_contributor)
                return;
            mesh.model.highlight();
        }
    }

    //更新投影矩阵Update projection matrix
    function onWindowResize(event) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    $(window).bind("resize", onWindowResize);//绑定投影矩阵随窗口大小变化更新The binding projection matrix is updated as the window size changes
    $(window).bind("mousemove", onMouseMove);//绑定鼠标拖动效果Bind the mouse drag effect

    animate();//开始start
});
