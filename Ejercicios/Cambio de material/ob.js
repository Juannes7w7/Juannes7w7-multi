//Este codigonos va a contruir una figura geometrica
//Creado por Juan Esteban Amortegui
//22/04/2020
//elemntos funcionales para la animacion: Escena, Camara, Render, El objeto

//Estos comandos ya son propios y no es necesario modificalos
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Digo la distancia para en cubo en cada eje x,y y z de cada objeto
//El TorusGeometry es como una dona
var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
//Le cambiamos el material
//El MeshNormalMaterial no requiere color ya que este tiene un color base
var material = new THREE.MeshNormalMaterial();
//var material = new THREE.transparent(opacity);
//Este lo queria usar pero me saltava error
var torus = new THREE.Mesh( geometry, material );
scene.add( torus );

//Posicion de la camara
camera.position.z = 30;

var animate = function () {
	requestAnimationFrame ( animate );
	//Asignar rotacion para la dona
	torus.rotation.x += 0.01;
	torus.rotation.y += 0.02;

	renderer.render( scene, camera );
};
animate();

