
function insertarArticulo(val1, val2) {
    var parametros = {
        "codigo": val1,
        "name": val2
    };

    $.ajax({
        data: parametros,
        url: "?controller=Item&action=registrar_commit",
        type: 'POST',
        beforeSend: function () {

        },
        success: function (response) {
            alert(response);
        }

    });
}




function actualizarArticulo(val1, val2) {
    var parametros = {
        "codigo": val1,
        "name": val2
    };

    $.ajax({
        data: parametros,
        url: "?controlador=Item&accion=update_commit",
        type: 'POST',
        beforeSend: function () {

        },
        success: function (response) {
            alert(response);
        }

    });
}


function eliminarArticulo(val1) {
    var parametros = {
        "codigo": val1
    };

    $.ajax({
        data: parametros,
        url: "?controlador=Item&accion=delete_commit",
        type: 'POST',
        beforeSend: function () {

        },
        success: function (response) {
            alert(response);
        }

    });
}











function realizarProceso(valor1, valor2) {
    var parametros = {
        "valor1": valor1,
        "valor2": valor2
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=proceso',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, \n\ espere por favor...");
            },
            success: function (response) {
                $("#resultado").html(response);
            }
        }
    );
}