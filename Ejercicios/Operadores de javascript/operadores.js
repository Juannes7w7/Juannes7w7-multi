//Operadores basicos
//Con el operador + sirve para adicionar o sumar
var num1=5
var num2=4;
document.write("Preguntamos cuanto es 5 + 4?" + "<br>");
var num3=num1+num2;
document.write("Y la suma da nos " + num3 + "<br>");

//Con el operador - sirve para restar
document.write("<br>" + "Preguntamos cuanto es 5 - 4?" + "<br>");
var num4=num1-num2;
document.write("Y la resta da nos " + num4 + "<br>");

//Con el operador * sirve  para multiplicar algo
document.write("<br>" + "Preguntamos cuanto es 5 * 4?" + "<br>");
var num5=num1*num2;
document.write("Y la multiplicacion nos da "+ num5 + "<br>");

//Con el operador / sirve dividir algo
document.write("<br>" + "Preguntamos cuanto es 5 / 4?" + "<br>");
var  num6=num1/num2;
document.write("Y la divicion nos da "+ num6 + "<br>");

//Operadores "mas complejos"
//Con el operador ++ incremntamos una "variable"
var num7=15;
num7++;
document.write("<br>" + "Cuanto incrementa 15?" + "<br>")
document.write("El incremento es " + num7 + "<br>");

//Con el operador --  disminuir una "variable"
var num8=15;
num8--;
document.write("<br>" + "Cuanto disminuye 15?" + "<br>")
document.write("La disminucion es de " + num8 + "<br>");

//Con el operador == es de igualdad a una "variable"
document.write("<br>" + "Igualamos 5 a 4" + "<br>");
num9=num1==num2
document.write("La igualacion queda de 5 = " + num9 + "<br>");
document.write("Y como no es igual el 5 y 4 no dice false" + "<br>");
document.write("Pero si declaramos otra variable con el valor 5 ya no saltara false, sino true que es verdadero" + "<br>");
var num10=5
num11=num1==num10
document.write("La igualacion queda de 5 = " + num11 + "<br>");

//Con el operador === son estrictamente iguales
document.write("<br>" + "Igualamos estrictamente 5 a 4" + "<br>");
num12=num1===num2
document.write("La igualacion queda de 5 = " + num12 + "<br>");
document.write("Y como no es igual el 5 y 4 no dice false" + "<br>");
document.write("Pero si declaramos otra variable con el valor 5 ya no saltara false, sino true que es verdadero" + "<br>");
var num10=5
num13=num1===num10
document.write("La igualacion queda de 5 = " + num13 + "<br>");
//Similar al ==

//El operador +++ no supe manegarlo  y este ejemplo es el mas cercano que encontre en internet
document.write("<br>" + "Este ejemplo es el mas cercano que encontre en internet" + "<br>");
var num14=5
var num14 = 7;
num14 = num14++ + --num14;
document.write(num14 + "<br>");

//El operador ==== no supe manegarlo ni encontarlo en internet