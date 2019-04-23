var Contributor = (function () {

    //创建行星对象Create a planet object
    function Contributor(scene, radius, rail_radius, speed, color) {
        this.is_select = false;
        this.scene = scene;
        this.radius = radius;
        this.rail_radius = rail_radius;
        this.speed = speed;
        this.color = color;
        this.is_highlight = false;
        this.build();
    }

    Contributor.prototype.build = function () {
        var mesh = new THREE.Mesh(
            new THREE.SphereGeometry(this.radius, 20, 20),
            new THREE.MeshBasicMaterial({
                color: parseInt("0x" + this.color),
                wireframe: false
            })
        );

        this.mesh = mesh;

        mesh.model = this;
        mesh.is_contributor = true;

        this.mesh.position.z = 1000;

        this.mesh.lookAt(new THREE.Vector3(0, 0, 1000));

        this.scene.add(this.mesh);//将行星对象加入到场景容器Add the planet object to the scene container
    };


    Contributor.prototype.highlight = function () {
        if (this.is_highlight) {
            return;
        }
        this.is_highlight = true;
        var that = this;
        //产生平滑的动画效果Produces smooth animation
        new TWEEN.Tween(this.mesh.scale).to({
                x: 4,
                y: 4,
                z: 4
            }, 2000)
            .easing(TWEEN.Easing.Elastic.Out).start();
        setTimeout(function () {
            new TWEEN.Tween(that.mesh.scale).to({
                    x: 1,
                    y: 1,
                    z: 1
                }, 2000)
                .easing(TWEEN.Easing.Elastic.Out).start();
        }, 2000);
        this.is_highlight = false;
    };

    Contributor.prototype.update = function () {//行星位置更新Planetary position update
        var time = Date.now() * 0.0005 * this.speed;
        this.mesh.position.x = Math.sin(time) * this.rail_radius;
        this.mesh.position.y = Math.cos(time) * this.rail_radius;
        TWEEN.update();

    };

    return Contributor;

})();
