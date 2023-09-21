function mensaje(elemento){
    alert("Ninja was liked");
}

function removerBoton(elemento){
    elemento.remove();
}
function cambiarEstado(elemento){
    let estado = elemento.innerText;
    if (estado === "Login"){
        estado = "Logout";
        elemento.innerText = estado;
    }
    else{
        estado = "Login";
        elemento.innerText = estado;
    }
}