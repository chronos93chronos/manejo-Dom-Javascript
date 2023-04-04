//CURSO DE MANEJO DEL DOM
//------ETIQUETAS------
// 1) document = hace referencia al documento o pagina
// 2) document.getElementById = obtiene un elemento segun su ID
// 3) document.getElementsByTagName = obtener un elemento segun su nombre de etiqueta
// 4) document.getElementsByClassName = obtiene un elemento segun su CLASS 
// 5) document.querySelector = realiza una busqueda de los elementos del documento en funcion de las ESPECIFICACIONES QUE ENTREGAMOS (MIENTRAS MAS ESPECIFICO MEJOR)
// 6) document.querySelectorAll = trae todos los elementos que se ESPECIFICA (ejemplo ('img'))



//primer nodo padre-hijo
//SE CREA UN NODO
const padre = document.querySelector('h2');
console.log(padre);
// SE CREA OTRO
 const nuevo_nodo = document.createElement('div');
 padre.appendChild(nuevo_nodo);

 //se creamos contenido al nuevo nodo
 const texto = document.createTextNode('viva chile')
//DONDE SE  DEPOSITA EL TEXTO
 nuevo_nodo.appendChild(texto);

const final = document.querySelector('div.caja-contenedora');
console.log(final)

//juego

let alexander =prompt();
let rival = Math.floor( Math.random());
alert(alexander)
alert(rival)







