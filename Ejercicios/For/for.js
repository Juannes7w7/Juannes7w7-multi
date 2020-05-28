//Estos son ejemplos con for
//Este ejercico muestra diferentes formas de usar el for
//Crado por Juanes Amotregui

for (i=0; i<=6; i++) {
	//Instrucciones o acciones para el for
	document.write("Esto funciona " + "<br>");
}
//For con numeros
document.write("<br>" + "For con numeros" + "<br>");
for (i=0; i<=15; i++) {
	document.write(i + "<br>");
}
//For con variables
document.write("<br>" + "For con variables" + "<br>");
var numerotaz=25;
for (i=1; i<=numerotaz; i++) {
	document.write(i + "<br>");
}
//For con semana
document.write("<br>" + "For con semana" + "<br>");
var semana=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo" ];
for (i=0; i<=semana.length; i++) {
	document.write(semana[i]+ "<br>");
}
//For con meses
document.write("<br>" + "For con meses" + "<br>");
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (i=0; i<=meses.length; i++) {
	document.write(meses[i]+ "<br>");
}
//Desde 1900 cuales años han sido biciestos
document.write("<br>" + "For desde 1900 cuales años han sido biciestos" + "<br>");
var Año1 = 1900;
var Año2 = 2020;
for (Año1; Año1<=Año2; Año1++){
  if (((Año1 % 4 == 0) && (Año1 % 100 != 0 )) || (Año1 % 400 == 0)){
    document.writeln("<br>" + Año1 + ' Es bisiesto. ');
  }
//Esto es por si quiero saber cuales no fueron bisiestos pero lo dejo en comentarios para no llenar la pagina
  //else {
  //  document.writeln( Año1 + ' No es bisiesto ');
  //}
}