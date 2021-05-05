function operacion(){
    var x = parseInt(document.getElementById("numero").value);
    var boton = document.getElementById("botoncito");
    if (x<=4 & x>=1) {
        switch (x) {
            case 1:
                boton.classList.add("boton2");
                document.getElementById("resultado").value = x;
                break;
            case 2:
                boton.classList.add("boton3");
                document.getElementById("resultado").value = x;
                break;
            case 3:
                boton.classList.add("boton4");
                document.getElementById("resultado").value = x;
                break;
            case 4:
                boton.classList.add("boton5");
                document.getElementById("resultado").value = x;
                break;
        
            default:
                break;
        }
    } else {
        alert("Escribe un número del 1-4");
    }
}