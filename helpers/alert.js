

/*
Me quede creando el alert
me falta:
-Recoger los datos, mostrar los datos y filtrarlos

<div class="alert alert-danger alert-white rounded">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    <strong>Error!</strong> The server is not responding, try again later.
</div>

*/

function createAlert(){
    let container = document.createElement("div");
    container.className= "alert";
    container.setAttribute("id", "ctn_alert");
    let mensaje = document.createTextNode("Complete correctamente todos los compos");

    let buttonX = doButton();

    container.appendChild(mensaje);
    container.appendChild(buttonX);
    document.body.appendChild(container);
}


const doButton = ()=>{
    console.log("creta elemnt");
    let btn_close = document.createElement("button");
    btn_close.setAttribute("id", "close_alert");
    btn_close.className="btn_close";
    let mensaje_btn = document.createTextNode("X");
    btn_close.appendChild(mensaje_btn);
    btn_close.onclick = function () {
        console.log("click");
        document.getElementById("ctn_alert").className="hide";
    };
    return btn_close;
}


//createAlert();