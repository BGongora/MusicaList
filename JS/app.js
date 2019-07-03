var listaCanciones = [
    {
        nombre: "Metronomy",
        nombreArtista: "The Bay",
        archivoImg: "Metronomy_The-Bay.jpg",
        archivoAudio: "Metronomy_The-Bay.mp3"

    },
    {
        nombre: "Oh man!",
        nombreArtista: "Jain",
        archivoImg: "Jain_Oh-Man.jpg",
        archivoAudio: "Jain_Oh-Man.mp3"

    },
    {
        nombre: "Casio",
        nombreArtista: "Jungle",
        archivoImg: "Jungle_Casio.jpg",
        archivoAudio: "Jungle_Casio.mp3"

    },
    {
        nombre: "Come",
        nombreArtista: "Jain",
        archivoImg: "Jain_Come.jpg",
        archivoAudio: "Jain_come.mp3"

    },
    {
        nombre: "No roots",
        nombreArtista: "Alice Merton",
        archivoImg: "alice-merton_no-roots.jpg",
        archivoAudio: "alice-merton_no-roots.mp3"

    },
    {
        nombre:"Long gone",
        nombreArtista:"Phum viphurit",
        archivoImg:"Phum-Viphurit_Long-Gone.img",
        archivoAudio:"Phum-Viphurit_Long-Gone.mp3"
    }
];

function crearPlayList(cancion){
    var contenedorElemento = document.createElement('div');
    var elementoNombre = document.createElement('h5');
    var elementoArtista = document
    var div1 = document.createElement('div');
    var liElemento = document.createElement('li');
    liElemento.dataset.cancion = cancion.audioArchivo;
    div1.classList.add('p-1');
    
    
}

var botones = document.getElementsByClassName("btnReproducir");
var reproductor = new Audio();
var ultimaCancion = "";
var elementoAnterior;
var botonPrincipal = document.getElementById("repoflush").parentElement;


for (boton of botones){
    boton.onclick = play;
}

function play(e){
    var song = e.target.parentElement.parentElement.parentElement.dataset.cancion;
    reproductor.src= "songs/" + song + ".mp3";
    cancionSeleccionada(song,e.target.parentElement.parentElement.parentElement);
    ultimaCancion = song;
    reproductor.play();
}


function cancionSeleccionada(song,elementoCancion) {
    if (ultimaCancion != "") {
        //ultimaCancion es igual en el primer click
        elementoAnterior.classList.remove("seleccionada");
        elementoCancion.classList.add("seleccionada");
    }
    elementoCancion.classList.add("seleccionada");
    elementoAnterior = elementoCancion;
    cambiarInfo(elementoCancion);

}

function cambiarInfo(elemento){
    var imagen = elemento.children[0].children[1].children[0].src;
    var name = elemento.children[0].children[0].children[0].innerHTML;
    var artist = elemento.children[0].children[0].children[1].innerHTML;
    document.getElementsByClassName("playing-song")[0].children[1].children[1].children[0].innerHTML = name;
    document.getElementsByClassName("playing-song")[0].children[1].children[1].children[1].innerHTML = artist;
    document.getElementsByClassName("playing-song")[0].children[1].children[0].src = imagen;
}

var progreso = document.getElementsByClassName("progress-bar")[0];

reproductor.addEventListener('timeupdate',function (e){
    var avance = (reproductor.currentTime/reproductor.duration) * 100;
    progreso.style.width = avance + "%";
})

botonPrincipal.addEventListener('click',function(e){
    if(reproductor.pause){

    }
})

function flujoDeReproduccion(){
    if (!reproductor.pause){
        reproductor.pause();
    }
}

function cambiarIconoReproduccion(){
    var elementoIcono = botonPrincipal.children[0];
    elementoIcono.classList.remove("fa-play-circle");
    elementoIcono.classList.add("far fa-pause-circle")
}