function cambiar(){
    console.log("Hola mundo!");
}

function colorBG(){
    color=document.getElementById("cambioColor");
    color.classList.remove("bg-secondary-subtle");
    color.classList.add("bg-primary-subtle");
}

function colorBack(){
    colorB=document.getElementById("cambioColor");
    colorB.classList.add("bg-secondary-subtle");
    colorB.classList.remove("bg-primary-subtle");
}

function colorClick(){
    colorC=document.getElementById("cambioColor");
    colorC.classList.add("bg-danger-subtle"); 
} 