//Este es el codigo para crear uan silulacion del muestra tierra
//13/05/2020
//Echo por:Juan Esteban Amortegui Correa
//Creamos nuestras variables base
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(450,window.innerWidth/window.innerHeight, 0.1, 1000);
//Creamos el render
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//Posicion de camara
camera.position.set(0, 0, 10);
//Iluminacion y luces
var light = new THREE.AmbientLight( 0x888888 )
scene.add( light )
//Luz
var light = new THREE.DirectionalLight( 0xfdfcf0, 1 )
//Posicion de la luz
light.position.set(10,10,10)
scene.add( light )
//Objetos de la tierra
var Geometry = new THREE.SphereGeometry(5, 100,100 );
var Material = new THREE.MeshPhongMaterial({
//Expecificaciones de el material
	map: new THREE.ImageUtils.loadTexture("Tierra.jpg"),
	color: 0xaaaaaa,
	specular: 0x333333,
	shininess: 25
});
//Creamos la tierra con los objetos
var earth = new THREE.Mesh(Geometry, Material);
scene.add(earth);
//Creamos el relieve
var Geometry1 = new THREE.SphereGeometry(10.3,  50, 50);
var Material1 = new THREE.MeshPhongMaterial({
//Expecificaciones de el material
  map: new THREE.ImageUtils.loadTexture("Clouds.jpg"),
  transparent: true,
  opacity: 0.1
});
//Creamos la esena del espacio
var clouds = new THREE.Mesh(Geometry1, Material1);
scene.add(clouds);
//Material del espacio
var Geometry2 = new THREE.SphereGeometry(1000, 50, 50);
var Material2 = new THREE.MeshPhongMaterial({
//Expecificaciones de el material
  map: new THREE.ImageUtils.loadTexture("galaxy.png"),
  side: THREE.DoubleSide,
  shininess: 0
});
var starField = new THREE.Mesh(Geometry2, Material2);
scene.add(starField);
//Creamos la luna
var Geometry3 = new THREE.SphereGeometry(0.7, 50,50);
var Material3 = new THREE.MeshPhongMaterial({
//Expecificaciones de el material
  map: THREE.ImageUtils.loadTexture("Luna.jpg")
});
var moon = new THREE.Mesh(Geometry3, Material3);
moon.position.set(35,0,0);
scene.add(moon);
//Animamos y creamos variables para que el movimiento sea calculado naturalmente
var r = 7;
var theta = 0;
var dTheta = 2 * Math.PI / 1000;
//Ordenamos la rotacion
var render = function() {
  earth.rotation.y += .0028;
  clouds.rotation.y += .00025;

//Asignamos la rotacion de la luna, pero en un punto para que no rote sobre ella misma sino sobre la tierra      
  theta += dTheta;
  moon.position.x = r * Math.cos(theta);
  moon.position.z = r * Math.sin(theta);

  renderer.render(scene, camera);
  requestAnimationFrame(render);
};
//Y mostramos
render();