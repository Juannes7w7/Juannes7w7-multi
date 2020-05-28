//Este esta es m segunda parte del parcial
//Hecho por: Juan Esteabn Amortegui Correa Fecha:11/03/2020

//Pedimos el nombre
var nombre = prompt("Cual es tu nombre?");
var codigo = prompt("Cual es tu codigo?" + "\n" + "Ejem 001");

alert("Hola " + nombre + "\n" + "Tu codigo es: " + codigo)
//Se declara una variable y se asigna al arreglo para el estudiante 1
var estu_1=[];
estu_1[0]=prompt("Fecha de nacimiento en DD/MM/AA");

//f1 es la fecha que pide
//f2 es "11/03/2020"

getEdad(estu_1[0]);
function getEdad(a){
	var Hoy = "11/03/2020";
	var dias = RestaDeFechas(a, Hoy);
	var edad = dias/365;
	alert("Años: " + Math.floor(edad) + "\n" + "Dias: " + dias);

}
//Esta es la funcion para operar los dias vividos
function RestaDeFechas(f1,f2){
	var aFecha1 = f1.split('/');
	var aFecha2 = f2.split('/');
	var fFecha1 = Date.UTC(aFecha1[2], aFecha1[1]-1, aFecha1[0]);
	var fFecha2 = Date.UTC(aFecha2[2], aFecha2[1]-1, aFecha2[0]);
	var dif = fFecha2 - fFecha1;
	var dias = Math.floor(dif / (1000 * 60 * 60 *24));
	return dias;

}
alert("Continua con tu proceso para saber tu promedio " + nombre);
