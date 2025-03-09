// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let amigo = inputNombre.value;

    if (!amigo) {
        alert ("Por favor ingresa un nombre.")
        return;
    } 
    amigos.push(amigo);
    inputNombre.value = "";
    inputNombre.focus();
    console.log(amigos)//Funciona, veo la lista de amigos.
    crearLista ();
};

function crearLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent =  amigos[i];
        listaAmigos.appendChild(item);
    }
};

function sortearAmigo(){
    if(amigos.length === 0) {
        alert("No has ingresado amigos");
        return;
    }
    let amigosorteado = amigos[Math.floor(Math.random() * amigos.length)];

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `El amigo secreto es ${amigosorteado}`;

    console.log(amigosorteado);

    deshabilitarBoton("add");
    deshabilitarBoton("sorteo");

    habilitarBoton("reiniciar");
};

function deshabilitarBoton (ID) {
    document.getElementById(ID).setAttribute("disabled", 'true');
}

function habilitarBoton (id) {
    document.getElementById(id).removeAttribute("disabled")
}

function reiniciarJuego () {
    amigos = [];

    let limpiarList = document.getElementById("listaAmigos");
    limpiarList.innerHTML = "";

    let limpiarResult = document.getElementById("resultado");
    limpiarResult.innerHTML = "";

    habilitarBoton("add");
    habilitarBoton("sorteo");
    deshabilitarBoton("reiniciar");
}