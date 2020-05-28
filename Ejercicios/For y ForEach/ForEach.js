//Un ejemplo de ForEach

var boom1 = ["Juanes ", "Felipe ", "Javier "];
var boom2 = ["Amortegui", "Perez", "Melo"];

var resultado = [];
boom1.forEach(function(valor1) {
  boom2.forEach(function(valor2) {
    resultado.push(valor1 + valor2);
  });
});

document.write(resultado + "<br>");