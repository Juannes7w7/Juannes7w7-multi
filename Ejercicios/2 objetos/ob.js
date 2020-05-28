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
var geometry1 = new THREE.BoxGeometry( 10, 10, 10);
//Usamos un comando Cylinder propio de la biblioteca
var geometry2 = new THREE.CylinderGeometry( 10, 10, 5, 20);
//Digo el material de cada objeto
var material1 = new THREE.MeshBasicMaterial({color: 0x420F88 });
//Dividimos los materiales para poder diferenciar el color
var material2 = new THREE.MeshBasicMaterial({color: 0x31F959});
//Despues colocamos los materiales y las geometrias undicadas, diferentes para que no salte error el codigo
var cube = new THREE.Mesh( geometry1, material1 );
var cylinder = new THREE.Mesh( geometry2, material2 );
//Mostramos los elementos
scene.add( cube );
scene.add( cylinder );
//Posicion de la camara
camera.position.z = 3;
camera.position.z = 30;
//Diferenciamos el - y + en la posicion para que no aparezca uno sobre otro
cube.position.x-=10;
cylinder.position.x+=10

var animate = function () {
	requestAnimationFrame ( animate );
	//Asignar rotacion para el cubo
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.02;
	//Asignar rotacion para el cilindro
	cylinder.rotation.x += -0.01;
	cylinder.rotation.y += -0.02;

	renderer.render( scene, camera );
};
//Y animamos
animate();