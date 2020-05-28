//Un ejemplo de For

var boom1 = ["Juanes ", "Felipe ", "Javier "];
var boom2 = ["Amortegui", "Perez", "Melo"];

var resultado = [];
for(var x = 0; x < boom1.length; x++) {
  for (var y = 0; y < boom2.length; y++) {
    resultado.push(boom1[x] + boom2[y]);
  };
};

document.write(resultado + "<br>");