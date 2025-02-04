/* Añadir la etiqueta script al final de la etiqueta body en el archivo index.html
        .
        .
        .

        <script src="app.js" defer></script>
    </body>
*/
/* DOM - Document Object Model
        Representación de los objetos de la pantalla que el Navegador entrega a Javascropt.
        Se usa para conectar el códigp HTML con Javascript
        <h1></h1>  Eqtiqueta para Título
        <p class="texto__parrafo"></p> Texto para párrafo

        Los objetos se seleccionan con document.querySelector

        En HTML:
         Se puede añadió el evento onclick al botón para que ejecute una acción escrita en código JS. Ejemplo:<button onclick="alert('Hola');" class="container__boton">Intentar</button>
         Lo que se estila es que llame a una función escrita en JS.


let Str_Titulo = document.querySelector('h1');
Str_Titulo.innerHTML = 'Juego del Número Secreto';

let Str_parrafo = document.querySelector('p');
Str_parrafo.innerHTML = 'Indique un valor entre 1 y n'

Las variables son sensibles al ámbito en el que se encuentran, global o local
document.querySelector('input') funciona para capturar un valor de usuario cuando la pantalla solo posee una casilla de ingreso
document.getElementById('Id del campo') Se usa cuando la pantalla posee más de un campo para ingresar datos de usuario haciendo referencia al id 
ingresado en la definición del campo ( <input type="number" id="Int_EntradaUsuario" min="1" max="n" class="container__input"> )

typeof(variable) devuelve el tipo de dato
*/
/* Variables */
let Int_NumeroSecreto = 0;
let Int_NumeroDeUsuario = 0;
let Int_NumeroIntentos = 1;
let Int_ListaElementos = [];
let Int_NumeroGenerado = 0;
let Int_NumeroMaximo = 3;


/* Cosntantes */

/* Funciones*/
function f_LimpiaEntradaUsuario() {
    document.querySelector('#Int_EntradaUsuario').value = '';;
}

function f_VerificaIntento() {

    Int_NumeroDeUsuario = parseInt(document.getElementById('Int_EntradaUsuario').value);
    /*console.log('Int_NumeroSecreto');
    console.log(typeof(Int_NumeroSecreto));
    console.log(Int_NumeroSecreto);
    console.log('Int_NumeroDeUsuario');
    console.log(typeof(Int_NumeroDeUsuario));
    console.log(Int_NumeroDeUsuario);
    console.log(Int_NumeroSecreto === Int_NumeroDeUsuario ); // === igualdad incluyendo el tipo de dato. Con == el tipo de dato no se considera
    */
if (Int_NumeroDeUsuario === Int_NumeroSecreto) {
    f_AsignarTextoElementos('p', `Ganaste el juego en ${Int_NumeroIntentos} ${Int_NumeroIntentos == 1 ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled') // Activa el botón cambiando el atributo
} else {
        if (Int_NumeroDeUsuario < Int_NumeroSecreto) {
            f_AsignarTextoElementos('p', 'El número secreto es mayor');
} else {
        f_AsignarTextoElementos('p', 'El número secreto es menor');
}
Int_NumeroIntentos ++;
f_LimpiaEntradaUsuario();
    
    return;
}
}


function f_AsignarTextoElementos(Str_Elemento, Str_Texto){
    let Html_Elemento = document.querySelector(Str_Elemento);
    Html_Elemento.innerHTML = Str_Texto;
    return;
};

function f_NumeroSecreto() {
    Int_NumeroGenerado =  Math.floor(Math.random()*Int_NumeroMaximo) + 1;
    // Código con repeticiones para obtener el número secreto que no se haya usado
    while (Int_ListaElementos.includes(Int_NumeroGenerado) && Int_NumeroGenerado != 0) {
        Int_NumeroGenerado =  Math.floor(Math.random()*Int_NumeroMaximo) + 1;
    }
    Int_ListaElementos.push(Int_NumeroGenerado);
    return Int_ListaElementos[Int_ListaElementos.length - 1];
    //

    // Código con recursividad de la función para obtener el número secreto que no se haya usado
/*  
    if (Int_ListaElementos.includes(Int_NumeroGenerado)) {
        return f_NumeroSecreto(); //Recursividad de la función
    } else {
        Int_ListaElementos.push(Int_NumeroGenerado);
        return Int_ListaElementos[Int_ListaElementos.length - 1];
        
    }*/ 
    //
}

function f_ResetJuego() {
        f_MensajesInicio();
        if (Int_ListaElementos.length == Int_NumeroMaximo) { // Reinicio de la lista de elementos cumplido el ciclo de Int_NumeroMaximo números acertados
        Int_ListaElementos = [];
        f_AsignarTextoElementos('p', 'Ha alcanzado todos los valores posibles del rango. Presione F5 para comenzar de nuevo');
        document.getElementById('intentar').setAttribute('disabled', false)
    }
    f_LimpiaEntradaUsuario();
    
    Int_NumeroSecreto = f_NumeroSecreto();
    document.getElementById('reiniciar').setAttribute('disabled', true); // Activa el botón cambiando el atributo
    Int_NumeroIntentos = 1;
}


function f_MensajesInicio() {
    f_AsignarTextoElementos('h1', 'Juego del Número Secreto!!');
    f_AsignarTextoElementos('p', `Indique un valor entre 1 y ${Int_NumeroMaximo} por favor`);
}

/* Programa */

Int_NumeroSecreto = f_NumeroSecreto();
console.log('Int_NumeroSecreto');
console.log(typeof(Int_NumeroSecreto));
console.log(Int_NumeroSecreto);


f_MensajesInicio();




