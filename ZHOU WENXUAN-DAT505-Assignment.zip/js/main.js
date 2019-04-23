//当 DOM（文档对象模型） 已经加载，并且页面（包括图像）已经完全呈现时，会发生 ready 事件
$(document).ready(function () {

    function initRepository(size) {//初始化网格
        var repository = createMesh(
            new THREE.SphereGeometry(parseInt(size), 20, 20),//构造球体，半径长度为size，水平方向长度20，垂直方向长度20
            "./earth.jpg"//材质属性
        );
        repository.position = {//设置x，y和z坐标的值
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

    function initContributors(data, scene) {//创建行星群
        var contributors = [];
        for (var i = 0; i < data.planets.length; i++) {//遍历各个行星，设置属性
            var planet = data.planets[i],//行星对象
                color = Math.random() * 0xffffff,//随机颜色
                radius = planet['size'] * 0.3,//设置行星球体半径
                rail_radius = planet.distance * 900 + 1000,//设置绕恒星公转半径
                speed = planet.speed,//设置公转速度
                contributor = new Contributor(scene, radius, rail_radius,
                    speed, color);//创建行星
            contributors.push(contributor);//加入行星队列变量中
        }
        return contributors;//返回行星队列
    }

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

    var scene = new THREE.Scene();//创建场景容器
    var clock = new THREE.Clock();// 准备计时器

    var data = CODE.data//配置数据
    var starSize = data.star[0]['size'];//恒星大小
    var repository = initRepository(starSize);//创建恒星
    var contributors = initContributors(data, scene);//创建行星群
    var light = initLight();//初始化光源

    // 加入一个地面
    var plane = new THREE.Mesh(//网格对象MESH.创建一个网格需要一个几何体，以及一个或多个材质
        new THREE.PlaneGeometry(10000, 10000, 50, 50),//宽度, 高度, 宽度段数, 高度段数
        new THREE.MeshBasicMaterial({//材质
            color: 0x555555,
            wireframe: true
        })
    );

    scene.add(repository);//场景容器加入恒星
    scene.add(plane);//场景容器加入地面
    scene.add(light);//场景容器加入光源

    var renderer = new THREE.WebGLRenderer();//渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);//渲染器大小，窗体的尺寸
    document.body.appendChild(renderer.domElement);

    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);//设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里（视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far）
    camera.position.z = 8000;//位置

    // Controls
    cameraControls = new THREE.TrackballControls(camera, renderer.domElement);//视角控制遵从TrackballControls类方法

    function render() {
        var delta = clock.getDelta();
        cameraControls.update(delta);// 更新控制器状态
        renderer.render(scene, camera);// 渲染场景

        for (var i = 0; i < contributors.length; i++) {
            contributors[i].update();//行星位置更新
        }
    }

    function animate() {
        requestAnimationFrame(animate);//控制动画
        render();//渲染页面
    }

    function onMouseMove(event) {
        var projector = new THREE.Projector();//声明一个projector
        var vector = new THREE.Vector3(//建立几何体的vertice(顶点)
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1,
            0.5);
        projector.unprojectVector(vector, camera);//将屏幕上点的位置转换成Three.js场景中的坐标

        //在视点坐标系中形成射线,射线的起点向量是照相机， 射线的方向向量是照相机到点击的点，这个向量应该归一标准化。
        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());//

        //射线和模型求交，选中一系列直线
        var intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            //选中第一个射线相交的物体
            var mesh = intersects[0].object;
            if (!mesh.is_contributor)
                return;
            mesh.model.highlight();
        }
    }

    //更新投影矩阵
    function onWindowResize(event) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    $(window).bind("resize", onWindowResize);//绑定投影矩阵随窗口大小变化更新
    $(window).bind("mousemove", onMouseMove);//绑定鼠标拖动效果

    animate();//开始
});
