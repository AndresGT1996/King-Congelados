
function togleMenu(){
    let activar = document.querySelector(".nav-list");

    if (activar.style.visibility === "hidden" || activar.style.visibility === "" ) { activar.style.visibility = "visible";
        
    }
    else{
        activar.style.visibility = "hidden"
    }
}