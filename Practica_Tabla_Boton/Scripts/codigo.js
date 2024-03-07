 
function agregarElemento() {
    nuevoElemento = document.createElement('p');
    nuevoElemento.innerText = 'Hola mundo';
    contenedor = document.getElementById('contenedorElementos');
    contenedor.appendChild(nuevoElemento);
}
