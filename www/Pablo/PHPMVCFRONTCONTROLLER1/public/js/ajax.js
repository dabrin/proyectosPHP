


function ingresar(val1, val2) {

    var parametros = {
        "codigo": val1,
        "name": val2
    };

    $.ajax({
        data: parametros,
        url: "?controlador=Item&accion=registrar_commit",
        type: 'POST',
        beforeSend: function () {

        },
        success: function (response) {
            //alert(response);
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
            //alert(response);
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
            //<alert(response);
        }

    });
}




function buscarById(val1) {
    alert("!!!!");
    var parametros = {
        "codigo": val1
    };

    $.ajax({
        data: parametros,
        url: "?controlador=Item&accion=buscar_commit",
        type: 'POST',
        beforeSend: function () {

        },
        success: function (r) {

            datos = jQuery.parseJSON(r);
            $('#code').val(datos['codigo']);
            $('#name').val(datos['nombre']);

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