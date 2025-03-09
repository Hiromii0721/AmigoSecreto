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