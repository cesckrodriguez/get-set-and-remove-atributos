//podemos establecer atributos o cambiarlos con setAttribute ("atributo", "cambio");
let variable = document.getElementById("caja");

variable.setAttribute("nuevoAtributo", "range");
variable.setAttribute("type", "range");

document.write(variable.getAttribute("nuevoAtributo"));

document.write(variable.getAttribute("name"));
variable.removeAttribute("name");
