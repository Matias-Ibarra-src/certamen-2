let editar:any=document.getElementById("editar");

editar.addEventListener("click", function(){
    let seccion1:any=document.getElementById("seccion1");
    let seccion2:any=document.getElementById("seccion2");
    seccion1.removeAttribute('disabled');
    seccion2.removeAttribute('disabled');
})

let actualizar:any=document.getElementById("actualizar");

let region:any=document.getElementById("region");
let comuna:any=document.getElementById("comuna");

region.addEventListener("change", function (){
    while (comuna.firstChild){comuna.removeChild(comuna.firstChild);};
    switch (region.value) {
        case "0":
            let chanaral:any=document.createElement("option");   chanaral.innerHTML = 'Chañaral';  comuna.appendChild(chanaral);
            let copiapo:any=document.createElement("option"); copiapo.innerHTML = 'Copiapó'; comuna.appendChild(copiapo);
            let vallenar:any=document.createElement("option"); vallenar.innerHTML = 'Vallenar'; comuna.appendChild(vallenar);
            break;
        case "1":
            let valparaiso:any=document.createElement("option");   valparaiso.innerHTML = 'Valparaíso';  comuna.appendChild(valparaiso);
            let vina:any=document.createElement("option"); vina.innerHTML = 'Viña del mar'; comuna.appendChild(vina);
            let quillota:any=document.createElement("option"); quillota.innerHTML = 'Quilpue'; comuna.appendChild(quillota);
            let sanfelipe:any=document.createElement("option"); sanfelipe.innerHTML = 'San Felipe'; comuna.appendChild(sanfelipe);
            break;
    }
});

actualizar.addEventListener("click", function(){
    let seccion1:any=document.getElementById("seccion1");
    let seccion2:any=document.getElementById("seccion2");
    if(comprobarRut()==true){
        seccion1.setAttribute('disabled',true);
        seccion2.setAttribute('disabled',true);
    }
})

function comprobarRut(){
    let i:number;
    let rut:any=document.getElementById("rut");
    let cadena:string = rut.value;
    
    if(cadena.charAt(cadena.length-2) == "-"){
        for(i=0;i<cadena.length-2;i++){
            if(cadena.charAt(i)<"0" || cadena.charAt(i)>"9"){
                return false;
            }
        }
        return true;
    }
    return false;
}

let agregar:any=document.getElementById("agregar");

agregar.addEventListener("click", function(){
    let seccionAgregar:any = document.getElementById("seccionAgregar");
    seccionAgregar.removeAttribute('disabled');
})

let agregarAsignatura:any=document.getElementById("agregarAsignatura");

agregarAsignatura.addEventListener("click", function(){
    let seccionAgregar:any = document.getElementById("seccionAgregar");
    seccionAgregar.setAttribute('disabled',true);

    let asignatura:any=document.getElementById("asignatura");
    let objetivo:any=document.getElementById("objetivo");
    let nota:any=document.getElementById("nota");

    let tabla:any=document.getElementById("tabla");

    let ul:any=document.createElement("ul");
    ul.className="list-group list-group-horizontal";

    tabla.appendChild(ul);

    let li1:any=document.createElement("li");
    let li2:any=document.createElement("li");
    let li3:any=document.createElement("li");
    let li4:any=document.createElement("li");

    li1.className="list-group-item li";
    li2.className="list-group-item li";
    li3.className="list-group-item li";
    li4.className="list-group-item";
    
    ul.appendChild(li1).innerHTML=`<p>${asignatura.value}</p>`;
    ul.appendChild(li2).innerHTML=`<p>${objetivo.value}</p>`;
    ul.appendChild(li3).innerHTML=`<p>${nota.value}</p>`;
    ul.appendChild(li4).innerHTML='<a href="#"><img src="3.jpg" alt="3"></a>';

})

