//Este es el codigo para crear un cubo que rota con esferas en los angulos
//29/04/2020
//Echo por:Juan Esteban Amortegui Correa
//Creamos nuestras variables base
var renderer;
var scene;
var camera;
//Creamos la esena, camara y demas,para que pueda tomar los objetos
    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, window.innerWidth /window.innerHeight, 0.1, 1000);
//Estructuras basicas para el objeto renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0x000000, 1.0);
        renderer.setSize(window.innerWidth, window.innerHeight);
//Activamos componentes de dobnde va a estar la figura
        renderer.physicallyCorrectLights = true;
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.shadowMap.enabled = true;
//Tomamos un tono de la biblioteca
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
//Creamos una figura y su material
        var planeGeometry = new THREE.PlaneGeometry(20, 20);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0x220434});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
//Rotacion de el objeto
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = -2;
        plane.position.z = 0;
        scene.add(plane);
//Creamos el cubo
        var cubeGeometry = new THREE.BoxGeometry(6, 4, 6);
//El comando opacity nos indica si lo queremos mas visible 
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 'red',transparent:true, opacity:0.2});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//Agregamos la camara
        cube.castShadow=true;
        scene.add(cube);

        camera.position.x = 15;
        camera.position.y = 16;
        camera.position.z = 13;
        camera.lookAt(scene.position);

        var ambient = new THREE.AmbientLight(0x50E779,0.3);
        scene.add(ambient);
        var light = new THREE.DirectionalLight(0xffffff, 1, 100, 2 );
        light.position.set(10,20 , 20);
        light.castShadow = true;
        scene.add(light);

        document.body.appendChild(renderer.domElement);
        addVertices(cube);
        render();
}
//Llamamos la animacion
function addVertices(mesh) {
    var vertices = mesh.geometry.vertices;
    var vertexMaterial = new THREE.MeshPhongMaterial({color: 0x1053DB});
    vertices.forEach(function (vertex) {
        var vertexSphere = new THREE.SphereGeometry(0.15);
        var vertexMesh = new THREE.Mesh(vertexSphere, vertexMaterial);
        vertexMesh.position.copy(vertex);
        scene.add(vertexMesh);
    });
}
//Definimos las variables de posicion
function render() {
    var rotSpeed = 0.01;
    camera.position.x = camera.position.x * Math.cos(rotSpeed) +
    camera.position.z * Math.sin(rotSpeed);
    camera.position.z = camera.position.z * Math.cos(rotSpeed) -
    camera.position.x * Math.sin(rotSpeed);
    camera.lookAt(scene.position);

    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener("DOMContentLoaded", function(event) {
    init();
});
window.addEventListener('resize', handleResize, false);