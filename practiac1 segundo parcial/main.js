//1) Uso del método getElementById y de la propiedad innerHTML.
    //a) Cambia el contenido (el innerHTML) del elemento <p> con id=”demo”.
let x = document.getElementById('demo').innerHTML="hola mundo";
let b = document.getElementById("intro").innerHTML = "cambio este texto";
    //b) Encuentra el elemento con id=”intro”.
let p1 = document.getElementById("cambiar").innerHTML = "cambie este texto ";
    
    //d) Cambia el contenido de un elemento <h1>.
let h1 = document.getElementById("h1").innerHTML = "PRACTICA 1 - ADDIELPUC";

//2) Búsqueda de elementos HTML por nombre de etiqueta. 
        //a) En este ejemplo encuentra todos los elementos <p> de uno de tus proyectos .html
let p = document.getElementsByName('p');
        //b) Encuentra el elemento con id=”main” y luego encuentra todos los elementos <p> dentro del main.
    const M = document.getElementById('main');
    const allp = document.getElementsByTagName('p');
    console.log(M);
    
    console.log(allp); 

//3) Encontrar elementos por nombre de clases.
    //a) Si desea encontrar todos los elementos con el mismo nombre de clase, use 
    //getElementsByClassName().
    let clas = document.getElementsByClassName('clas');
    console.log(clas);
//4) Búsqueda de elementos HTML mediante selectores de CSS
    //a) Devuelve una lista de todos los elementos <p> con class = ”intro”
    let css = document.querySelectorAll(p.css);
    // b) Encuentra los elementos <li> hijos de <ul>, para ello debes crear una lista desordenada con al
    //menos 5 elementos dentro de la lista.
    const lis = document.querySelectorAll("ul> li");
    console.log(lis);
    // c) Encontrar en la consola e imprimir el elemento <h1>.
    let consultah1  = document.querySelector("h1");
    console.log(consultah1);
    // d) Encontrar la clase list usando querySelector().
    let listaeelemtos = document.querySelector(".list");
    console.log(listaeelemtos);
    // e)  Imprimir los elementos <li> haciendo uso del ciclo forEach() para iterar sobre la NodeList e 
    //imprimir cada uno de los elementos
    let lista = document.querySelectorAll("ul>li");
    lista.forEach((item)=> {
        console.log(item);   });
    // f) Uso de la propiedad style para cambiar estilos en línea CSS.
    let cambiarestilo = document.querySelector("h1");
    cambiarestilo.style.color = "Blue"; 



// 5) Búsqueda de elementos HTML por colecciones de objetos HTML.
    /*a) Encuentra el elemento de formulario con id=”frm1”, en la colección de formularios, y muestra 
    todos los valores de los elementos*/

    document.getElementById("enviar_btn").addEventListener("click", formulario);

    function formulario() {
        const X = document.forms["form"];
        let texto = null;

        for(let i = 0; i < X.length ; i++){
        texto += X.elements[i].value + "<br>"; 
    }
    document.getElementById('textolista').innerHTML = texto;
    console.log(X);
    }

    //6) Agregar nuevos elementos al documento HTML.
    /* a) Agregar elementos al árbol del DOM usando los métodos document.createElement(), 
    appendChild() y haciendo uso de la propiedad textContent.*/
    let lista1 = document.createElement('ul');
    document.body.appendChild(lista1);

    let elemento1 = document.createElement('li');
    elemento1.textContent = "azul";
    lista1.appendChild(elemento1);

    let elemento2 = document.createElement('li');
    elemento2.textContent = 'rojo';
    lista1.appendChild(elemento2);


/*7) Usando el método addEventListener() para escuchar eventos en la página.
a) Crea un botón en el documento html, donde al hacer click aparezca un mensaje de alerta.*/
const buttonalert = document.getElementById('btn');
buttonalert.addEventListener('click', () => {
  alert("alerta del botón");
});

/*8) Validación de formulario.
        a) Si un campo de formulario (name) esta vacío, se muestra una alerta con un mensaje y devuelve 
    falso para evitar que se envíe y se redireccione a otra página*/

    let myform = document.getElementById('miformulario');
    myform.addEventListener ('submit', (event)=>{
    let inputnombre = document.getElementById('nombre').value;
    let inputcorreo = document.getElementById('correo').value;

    if (inputcorreo === '' || inputnombre === ''){
        alert("COMPRETA TODOS LOS CAMPOS");
        event.defaultPrevented();
    }
    });
    function validacionform1(){
        let formulario = document.forms['miformulario']['nombre'].value;
        if (formulario === ""){
            alert("debes completar el formulario");
            return false;
        }
    }
    

        /*
        b) Valida la entrada numérica que valide que la entrada sea numérica y que este en un rango entre 
        1 y 10. Para ello crea un input con id=”numero”, un botón de type=”button” y que contenga el 
        atributo onclick donde se le asigne el valor de la función. Crea también una etiqueta <p> con 
        id=”demo”*/
        
         let y = document.getElementById('numero10').value;
        let validacion;
        if(isNaN(y) || x>0 || x<10){
            validacion = "DATO  NO VALIDA";
        }
        else{
            validacion = "DATO VALIDA";
        }
        
        document.getElementById('demoinput').innerHTML = texto;
/*  9) Cambiar el valor de un atributo
        a) Cambiar el valor de un atributo src de un elemento <img>*/
        document.getElementById('miimagen').src = 'descarga.png';
    /*10) Contenido dinámico
    a) Agregar la hora actual a una etiqueta con id=”demo”*/
    document.getElementById('fechap').innerHTML = "FECHA: " + Date();


