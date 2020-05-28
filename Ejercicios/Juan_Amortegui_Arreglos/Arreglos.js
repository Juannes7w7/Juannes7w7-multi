//Este es mi trabajo sobre arreglos y sus variables
//Hecho por: Juan Esteabn Amortegui Correa Fecha:04/03/2020


//Declaracion de un arreglo

//Se declara una variable y se asigna al arreglo
var fruta = [];
document.write("Que tiene el arreglo de fruta: " + fruta + "Esta vacio <br>");

//Segunda forma de declarar un arreglo
var fruta=new Array();
fruta = ["Guama"];  //Ahora fruta vale Guama

document.write("<br> Que tiene ahora el arreglo de fruta: " + fruta + "<br>");

//Voy a llenar un nuevo arreglo con muchas frutas
var frutas = ["Manzanas", "Bananos", "Piñas", "Naranjas", "Peras"];
//Lo voy el arreglo en pantalla
document.write("<br>Estas son las frutas del arreglo: " + frutas + "<br>");
//Voy a escojer una fruta del arreglo
document.write("<br>Esta es la fruta escogida del arreglo: " + frutas[2] + "<br>");
document.write("<br>Estas son las frutas escogidas del arreglo: " + frutas[0] + ", " + frutas[1] + "<br>"); // Se coloca (", ") para separarlas

//Quiero saber cual es mi primera fruta
var primera = frutas[0];
//Quiero saber cual es la ultima fruta de mi arreglo
var ultima = frutas[frutas.length -1];// se usa (lenght -1) para pedir el arreglo desde 1 y no 0

document.write("<br>Esta es la primera fruta de mi arreglo: " + primera + "<br>");
document.write("<br> Esta es la ultima fruta de mi arreglo: " + ultima + "<br>");

//Añadir un nuevo elemnto al final del areglo
var nuevalongitud = frutas.push("Papaya");
//Aqui muestro el tamaño de mi arreglo y los elemnetos del mismo
document.write("<br>Esta es la ultma longuitud el arreglo de frutas: " + nuevalongitud + "<br>");
//De esta manera se muestra el todal del arreglo
document.write("<br>Estas son las frutas de todo el arreglo: " + frutas + "<br>");

//Agregar mas elemntos
var nuevalongitud = frutas.push("Limon", "Freijoa");
//Mostar el valor del arreglo y cuales son los elemntos
document.write("<br>Esta es la nueva longuitud el arreglo de frutas: " + nuevalongitud +"<br>");
//De esta manera se muestra el todal del arreglo
document.write("<br>Estas son las nuevas frutas de todo el arreglo: " + frutas + "<br>");

//Eliminar elemento del arrglo
var ultima = frutas.pop();
document.write("<br> Esta es la ultima fruta de mi arreglo: " + ultima + "<br>");




