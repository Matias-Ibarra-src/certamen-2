"use strict";
var editar = document.getElementById("editar");
editar.addEventListener("click", function () {
    var seccion1 = document.getElementById("seccion1");
    var seccion2 = document.getElementById("seccion2");
    seccion1.removeAttribute('disabled');
    seccion2.removeAttribute('disabled');
});
var actualizar = document.getElementById("actualizar");
var region = document.getElementById("region");
var comuna = document.getElementById("comuna");
region.addEventListener("change", function () {
    while (comuna.firstChild) {
        comuna.removeChild(comuna.firstChild);
    }
    ;
    switch (region.value) {
        case "0":
            var chanaral = document.createElement("option");
            chanaral.innerHTML = 'Chañaral';
            comuna.appendChild(chanaral);
            var copiapo = document.createElement("option");
            copiapo.innerHTML = 'Copiapó';
            comuna.appendChild(copiapo);
            var vallenar = document.createElement("option");
            vallenar.innerHTML = 'Vallenar';
            comuna.appendChild(vallenar);
            break;
        case "1":
            var valparaiso = document.createElement("option");
            valparaiso.innerHTML = 'Valparaíso';
            comuna.appendChild(valparaiso);
            var vina = document.createElement("option");
            vina.innerHTML = 'Viña del mar';
            comuna.appendChild(vina);
            var quillota = document.createElement("option");
            quillota.innerHTML = 'Quilpue';
            comuna.appendChild(quillota);
            var sanfelipe = document.createElement("option");
            sanfelipe.innerHTML = 'San Felipe';
            comuna.appendChild(sanfelipe);
            break;
    }
});
actualizar.addEventListener("click", function () {
    var seccion1 = document.getElementById("seccion1");
    var seccion2 = document.getElementById("seccion2");
    if (comprobarRut() == true) {
        seccion1.setAttribute('disabled', true);
        seccion2.setAttribute('disabled', true);
    }
});
function comprobarRut() {
    var i;
    var rut = document.getElementById("rut");
    var cadena = rut.value;
    if (cadena.charAt(cadena.length - 2) == "-") {
        for (i = 0; i < cadena.length - 2; i++) {
            if (cadena.charAt(i) < "0" || cadena.charAt(i) > "9") {
                return false;
            }
        }
        return true;
    }
    return false;
}
var agregar = document.getElementById("agregar");
agregar.addEventListener("click", function () {
    var seccionAgregar = document.getElementById("seccionAgregar");
    seccionAgregar.removeAttribute('disabled');
});
var agregarAsignatura = document.getElementById("agregarAsignatura");
agregarAsignatura.addEventListener("click", function () {
    var seccionAgregar = document.getElementById("seccionAgregar");
    seccionAgregar.setAttribute('disabled', true);
    var asignatura = document.getElementById("asignatura");
    var objetivo = document.getElementById("objetivo");
    var nota = document.getElementById("nota");
    var tabla = document.getElementById("tabla");
    var ul = document.createElement("ul");
    ul.className = "list-group list-group-horizontal";
    tabla.appendChild(ul);
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    li1.className = "list-group-item li";
    li2.className = "list-group-item li";
    li3.className = "list-group-item li";
    li4.className = "list-group-item";
    ul.appendChild(li1).innerHTML = "<p>" + asignatura.value + "</p>";
    ul.appendChild(li2).innerHTML = "<p>" + objetivo.value + "</p>";
    ul.appendChild(li3).innerHTML = "<p>" + nota.value + "</p>";
    ul.appendChild(li4).innerHTML = '<a href="#"><img src="3.jpg" alt="3"></a>';
});
