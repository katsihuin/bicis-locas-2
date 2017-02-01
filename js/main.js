function validateForm()
{
	/* validar los campos requeridos */
	if (!validateName() || !validateLastName() || !validateEmail() || !validatePassword() || !validateTipoBici())
	{
		jsShow("commentPrompt");
		producePrompt("Formulario debe estar validado para poder registrarte", "commentPrompt", "red");
		setTimeout(function(){jsHide("commentPrompt");}, 2000);
	}	
	else
	{
		jsShow("commentPrompt");
		producePrompt("Formulario Validado Exitósamente", "commentPrompt", "green");
	}
}


/* Muestra mensaje validación*/
function jsShow(id)
{
	document.getElementById(id).style.display="block";
}

/* Oculta mensaje validación*/
function jsHide(id)
{
	document.getElementById(id).style.display="none";
}

/* Envia Mensaje al usuario*/
var colores =   ["rojo", "amarillo"];
var colores = {valid:"verde", error:"rojo", normal:"blanco"};
var estilo = {color:"coc", colorFondo:"dds", opacity:1};

function producePrompt(message, promptLocation, color)
{
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}

/* Valida Nombre*/
function validateName()
{
	var inputName = document.getElementById("commentName");
	var name =  inputName.value;

	inputName.value = firstToUpperCase(name);

	if (name.length == 0)
	{
		producePrompt("Tu Nombre es requerido", "commentNamePrompt", "red");
		return false;
	}
	else if (!name.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que la primera letra de su Nombres sea mayúsculas y contenga SOLO caracteres de la A-Z", "commentNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Bienvenido(a) " + name, "commentNamePrompt", "green");
		return true;
	}	

}

/* Valida Apellido*/
function validateLastName()
{
	var lastName = document.getElementById("commentLastName").value;
	if (lastName.length == 0)
	{
		producePrompt("Tu Apellido es requerido", "commentLastNamePrompt", "red");
		return false;
	}
	else if (!lastName.match(/^[A-Z][a-z]*[a-zA-Z]$/)) 
	{
		producePrompt("Compruebe que la primera letra de su Apellido sea mayúscula y contenga SOLO caracteres de la A-Z", "commentLastNamePrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Apellido Válido ✔", "commentLastNamePrompt", "green");
		return true;
	}	
}

/* Valida Email*/
function validateEmail()
{
	var email = document.getElementById("commentEmail").value;
	if (email.length == 0)
	{
		producePrompt("Correo Electrónico es requerido", "commentEmailPrompt", "red");
		return false;
	}
	else if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
	{
		producePrompt("Compruebe que el Correo Electrónico contenga un formato válido. Ej: name@domain.com", "commentEmailPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Correo Electrónico Válido ✔", "commentEmailPrompt", "green");
		return true;
	}
}

/* Valida Contraseña*/
function validatePassword()
{
	var password = document.getElementById("commentPassword").value;
	if (password.length == 0)
	{
		producePrompt("Contraseña es requerida", "commentPasswordPrompt", "red");
		return false;
	}
	else if (!password.match(/.{6,}/)) 
	{
		producePrompt("Compruebe que la contraseña tenga al menos 6 caracteres", "commentPasswordPrompt", "red");
		return false;
	}
	else if (password == "PASSWORD" || password == "password" || password == "123456" || password == "098754") 
	{
		producePrompt("La contraseña no puede ser igual a 'password' ó '123456' ó '098754'", "commentPasswordPrompt", "red");
		return false;
	}
	else 
	{
		producePrompt("Contraseña Válida ✔", "commentPasswordPrompt", "green");
		return true;
	}
}

/* Valida Tipo de bici*/
function validateTipoBici()
{
	var tipo = document.getElementById("commentTipo").value;
	if (tipo == 0)
	{
		producePrompt("Seleccione un tipo de bici de las opciones presentadas", "commentTipoPrompt", "white");
		return false;
	}
	else 
	{
		producePrompt("Bici seleccionada ✔", "commentTipoPrompt", "green");
		return true;
	}
}

/* Valida formato de nombre de usuario en Twitter*/
function validateTwitter()
{
	var twitter = document.getElementById("commentTwitter").value;
	if (twitter.length == 0) 
	{
		jsShow("commentTwitterPrompt");
		producePrompt("Este campo es opcional", "commentTwitterPrompt", "blue");
		setTimeout(function(){jsHide("commentTwitterPrompt");}, 2000);
	}
	else if (!twitter.match(/^(\w){1,15}$/)) 
	{
		jsShow("commentTwitterPrompt");
		producePrompt("Compruebe que el Nombre de Usuario en Twitter no contenga más de 15 caracteres, símbolos, guiones o espacios", "commentTwitterPrompt", "red");
		setTimeout(function(){jsHide("commentTwitterPrompt");}, 2000);
	}
	else 
	{
		producePrompt("Nombre de Usuario en Twitter Válido ✔", "commentTwitterPrompt", "green");
		return true;
	}
}

/* Valida Informacion */
function validateInfo()
{
	var info = document.getElementById("commentInfo").value;
	if (info.checked==true) 
	{
		producePrompt("¡Gracias, estaremos en contacto contigo muy pronto!", "commentInfoPrompt", "green");
		return true;
	}
}


function firstToUpperCase(_texto)
{
	var result = _texto[0].toUpperCase() + _texto.slice(1);
	var mayus = result.split(" ");
	
	console.log(result.split(" "));
	return result;
}

// Cargar primero el DOM para ejecutar 
document.addEventListener ('DOMContentLoaded', 
	function showTooltip()
{
	var inputs = document.getElementsByTagName("input");
	for (var i=0; i<inputs.length; i++)
	{
		// Prueba para ver si el span existe primero
		if (inputs[i].parentNode.getElementsByTagName("span")[0]) 
		{
			// Si el span existe, en el enfoque mostrar el texto del span
			inputs[i].onfocus = function () 
			{
				this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
			}
			// Cuando se retira el foco del span, ocultar el texto del span
			inputs[i].onblur = function () 
			{
				this.parentNode.getElementsByTagName("span")[0].style.display = "none";
			}
		}
	}
	// Repita las mismas pruebas que las de arriba para select
	var selects = document.getElementsByTagName("select");
	for (var k=0; k<selects.length; k++)
	{
		if (selects[k].parentNode.getElementsByTagName("span")[0]) 
		{
			selects[k].onfocus = function () 
			{
				this.parentNode.getElementsByTagName("span")[0].style.display = "inline";
			}
			selects[k].onblur = function () 
			{
				this.parentNode.getElementsByTagName("span")[0].style.display = "none";
			}
		}
	}

addEventListener(showTooltip);
});