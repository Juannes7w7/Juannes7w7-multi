//Creamos las variables para iniciar el juego
var perro= "perro";
var gato= "gato" ;
var niño= "niño" ;
var si ="si";
var no = "no";
//Colocamos preguntas especificas con las cuales el usuario tiene que responder, si responde mal, saltamos un "error"
	var pre1=prompt("A quien seleccionas primero?");
	if(pre1 == perro)
	{
	var pre2=prompt("Quieres bajar del todo al perro?");
	if(pre2 == si)
	{
	var pre3=prompt("El perro ya esta abajo lo quieres amarrar?");
	if(pre3 == si)
	{
	var pre4=prompt("El perro esta amarrado, aquien eliges ahora?");
    if(pre4 == gato)
	{
	var pre5=prompt("Bajas al gato?");
	if(pre5 == no)
	{
	var pre6=prompt("Dejas al gato en la escalera?");
    if(pre6 == si)
    {
	var pre7=prompt("Bien, a quien escojes ahora?");
	if(pre7 == perro)
	{
	alert("PERDISTE, No puedes hacer nada con el perro,si lo subes, matara al niño");
	location.reload();
	}
	if(pre7 == niño)
	{	
	alert("PERDISTE, La escalera esta ocupada y si bajas al niño, el perro lo matara");
	location.reload();
	}
	if(pre7 == gato)
	{
	alert("PERDISTE, Si subes al gato, y pones el niño en la escalera igual no puedes hacer nada");
	location.reload();
	}
	}if(pre6 == no)
	{
	alert("PERDISTE, Decidete,Si lo bajas, el perro lo mata");
	location.reload();
	}						
	}if(pre5 == si)
	{
	alert("PERDISTE, Si dejas al gato abajo el perro lo matara");
	location.reload();
	}	
	}
	if(pre4 == niño)
	{
	var pre8=prompt("Bajas al niño del todo?");
	if(pre8 == no)
	{
	var pre9=prompt("Dejas niño en la escalera?");
	if(pre9 == si)
	{
	var pre10=prompt("Bien, a quien escojes ahora?");
	if(pre10 == perro)
	{
	alert("PERDISTE, No puedes hacer nada con el perro,si lo subes, matara al gato");
	location.reload();
	}
	if(pre10 == gato)
	{	
	alert("PERDISTE, La escalera esta ocupada y si solo puedes bajar al gato, el perro lo matara");
	location.reload();
	}
	if(pre10 == niño)
	{
	alert("PERDISTE, Si subes al niño, y pones al gato en la escalera igual no puedes hacer nada");
	location.reload();
	}
	}
	if(pre9 == no)
	{
	alert("PERDISTE, Mucho tiempo crack");
	location.reload();
	}
	}
	if(pre8 == si)
	{
	alert("PERDISTE, El perro stiene mucha fuerza rompe la cuerda y asesina al niño,");
	location.reload();
	}
	}
	}if(pre3 == no)
	{
	alert("PERDISTE, El perro a escapado");
	location.reload();
	}
    }if(pre2 == no)
	{
	var pre11=prompt("Quieres dejar al perro en la escalera ?");
	if(pre11 == si)
	{
	var pre12=prompt("Regresas arriba, quien sigue?");
	if(pre12 == gato)
    {
    var pre13=prompt("Tomas al gato,lo bajas del todo?");
	if(pre13 == si)
	{	
	var pre13a=prompt("Quieres amarrar al gato?");
    if(pre13a == si)
    {
	var pre14=prompt("Bien, a quien escojes ahora?");
	if(pre14 == perro)
	{
	var pre15=prompt("Tomas al perro, quieres bajarlo el todo?");
	if(pre15 == si)
    {
	alert("PERDISTE, El perro termina matando brutalmente al gato");
	location.reload();
	}if(pre15 == no)
	{
	var pre15a=prompt("Quieres subir al perro otra vez?")
    if(pre15a == si)
    {
	alert("PERDISTE, El perro viola al niño al niño");
	location.reload();
	}
	}
	}
	}
	if(pre13a == no)
	{
	alert("PERDISTE, El gato a escapado");
	location.reload();
	}
	if(pre14 == gato)
	{	
	var pre16=prompt("Quieres subir de nuevo al gato?");
	if(pre16 == si)
	{
	alert("No regreses sobre tus pasos, el gato estaba bien, vuelve a empezar");
	location.reload();	
	}
	if(pre16 ==no)
	{
	alert("No pendejo piensa, vuelve a empezar");
	location.reload();
	}
	}
	}
	if(pre13 == no)
	{
	alert("PERDISTE, Dejaste el celular en tu casa y tardaste tanto que tu novia ya se sabe la contraseña");
	}
	if(pre14 == niño)
	{
	var pre17=prompt("Quieres bajar al niño del todo?");
	if(pre17 == si)
	{
	var pre18=prompt("El niño y el gato juegan abajo, solo falta el perro,quierer bajarlo del todo");
	if(pre18 == si)
	{
	var pre19=prompt("El niño esta abajo, junto al gato amarrado, quieres amarrar al perro?");
	if(pre19 == si)
	{
	alert("Grande crack, ganaste experiencia");
	}
	}
	if(pre18 == no)
	{
	var pre18b=prompt("Quieres regresar al perro al incendio?");
	if(pre18b == si)
	{
	alert("PERDISTE, Si se muere el perro, te mato yo pendejo");
	location.reload();
	}
	if(pre18b == no)
	{
	alert("PERDISTE, Mucho tiempo crack");
	location.reload();
	}
	}
	if(pre19 == no)
	{
	alert("PERDISTE, que hueva");	
	location.reload();									
	}
	}
	if(pre17 == no)
	{
	alert("PERDISTE, No tienes mas opcion si seleccionas al niño");
	location.reload();
	}
	}
	}
	if(pre12 == niño)
	{
	var pre20=prompt("Quieres bajar del todo al niño");
	if(pre20 == si)
	{
	var pre21=prompt("Ok, tienes al gato en el incendio, al perro an la escalera y al niño abajo del todo,el esta bien, a quien escojes?");
	if(pre21 == niño)
	{
	alert("Por tus dudas, todo se derrumba sobre ti, no hay sobrevivientes");
	location.reload();
	}
	if(pre21 == gato)
	{
	var pre22=prompt("Quiere bajar del todo al gato?");
	if(pre22 == si)
	{
	var pre18c=prompt("Quieres amarrar al gato");
	if(pre18c == si)
	{
	var pre18a=prompt("El niño y el gato juegan abajo, solo falta el perro,quierer bajarlo del todo");
	if(pre18a == si)
	{
	var pre19a=prompt("Ok, tienes al niño abajo, junto al gato amarrado, quieres amarrar al perro?");
	if(pre19a == si)
	{
	alert("Felicitaciones,eres un heroe, las unidades de ayuda llegan luego de que llegaste con todos abajo, por tu responsabilidad y heroismo, te condecoran con una medalla");
	}
	}
	}
	if(pre18c == no)
	{
	alert("El gato escapa y por tu irressabilidad, pierdes tu empleo");
	}
    }
	if(pre22 == no)
	{
	alert("Dudaste demaciado, todos murieron en el incendio,Vuelve a empezar");
	location.reload();
	}					
	}
	if(pre21 == perro)
	{
	var pre23=prompt("Quieres subir al perro otra vez?");
	if(pre23 == si)
	{
	alert("Al regresar para subirlo otra vez, todos mueren,PERDISTE");
	location.reload();
	}
	if(pre23 == no)
	{
	var pre24=("Quieres bajar al perro del todo?");
	if(pre24 == si)
	{
	alert("El perro ataca brutalmente al niño y lo mata, PERDISTE");
	location.reload();
    }
	if(pre24 == no)
	{
	alert("Eres indeciso, el tiempo pasa rapido, todos mueren");
	location.reload();
    }
	}
	}
	}
	}
	}
	if(pre11 == no)
	{
	alert("Tardaste mucho en pensar, todos mueren,PERDISTE");
	}
    }
	}
	if(pre1 ==niño )
	{
	var pre25=prompt("Quieres bajar del todo al niño?");
	if(pre25 == si)
	{
	alert("PERDISTE, pendejo el perro violo al gato")
	location.reload();
	}
	if(pre25 == no)
	{
	alert("PERDISTE, pendejo el perro violo al gato")
	location.reload();
	}
	}
	if(pre1 == gato)
	{
	var pre26=prompt("Quieres bajar del todo al gato?")
	if(pre26 == si)
	{
	alert("PERDISTE, pendejo el perro violo al niño")
	location.reload();
	}
	if(pre26 == no)
	{
	alert("PERDISTE, pendejo el perro violo al niño")
	location.reload();
	}

	}					