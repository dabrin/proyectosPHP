

function ShowSelected() {
    /* Para obtener el valor */
    var cod = document.getElementById("madera").value;
    $("#maderaAdd").val(cod);
    //document.getElementById("costoAdd").value(cod);

    /* Para obtener el texto */
    var combo = document.getElementById("madera");
    var selected = combo.options[combo.selectedIndex].text;

}

function ShowSelectedAcabado() {
    /* Para obtener el valor */
    var cod = document.getElementById("acabado").value;
    $("#AddAca").val(cod);
    //document.getElementById("costoAdd").value(cod);

    /* Para obtener el texto */
    var combo = document.getElementById("acabado");
    var selected = combo.options[combo.selectedIndex].text;

}



function agregarMaderaAcabado(val1, val2) {

    var parametros = {
        "nombreMadera": val1,
        "nombreAcabado": val2

    };
    $.ajax({
        data: parametros,
        url: "?controller=Item&action=obtenerPrecios",
        type: 'POST',
        beforeSend: function () {
            //$("#costo").val("espere...");
        },
        success: function (r) {
            var string;
            var code;

            var rand = Math.floor(Math.random() * 100000);
            code = val1.charAt() + val2.charAt() + rand;
            string = $("#maderas").val();
            $("#id").val(code);
            $("#maderas").val(string + " ," + val1);
            $("#acabado1").val(val2);
            //$("#costo").val(datos['maderaCosto']);
        }

    });
}

function agregarMadera(val1) {

    var parametros = {
        "nombreMadera": val1

    };
    $.ajax({
        data: parametros,
        url: "?controller=Item&action=obtenerPrecios",
        type: 'POST',
        beforeSend: function () {
            //$("#costo").val("espere...");
        },
        success: function (r) {
            var string;



            string = $("#maderas").val();

            $("#maderas").val(string + " ," + val1);

            //$("#costo").val(datos['maderaCosto']);
        }

    });

}

function eliminarMueble(val1) {

    var parametros = {
        "nombreMadera": val1

    };
    $.ajax({
        data: parametros,
        url: "?controller=Item&action=eliminarMueble1",
        type: 'POST',
        beforeSend: function () {
            //$("#costo").val("espere...");
        },
        success: function (r) {
            location.href = "?controller=Item&action=insertarMaderaView";
        }

    });

}

function comprarMueble(val1) {

    var parametros = {
        "nombreMadera": val1

    };
    $.ajax({
        data: parametros,
        url: "?controller=Item&action=comprarMueble",
        type: 'POST',
        beforeSend: function () {
            //$("#costo").val("espere...");
        },
        success: function (r) {
            //location.href = "?controller=Item&action=insertarMaderaView";
            val = $("#precioCompra").val();

            var val2;
            var val3;
            val2 = parseInt(val);
            val3 = parseInt(val1);
            $("#precioCompra").val(val2 + val3);
        }

    });


}

function obtenerPrecio(val1) {

    var parametros = {
        "nombreMadera": val1

    };
    $.ajax({
        data: parametros,
        url: "?controller=Item&action=comprarMueble",
        type: 'POST',
        beforeSend: function () {
            //$("#costo").val("espere...");
        },
        success: function (r) {
            //location.href = "?controller=Item&action=insertarMaderaView";
            $("#PrecioA").val(val1);
        }

    });

}

function comprar(val1, val2) {


    var parametros = {
        "nombreMadera": val1

    };
    $.ajax({
        data: parametros,
        url: "?controller=Item&action=comprarMueble",
        type: 'POST',
        beforeSend: function () {
            //$("#costo").val("espere...");
        },
        success: function (r) {


            var val;
            var val3;
            val = parseInt(val1);
            val3 = parseInt(val2);
            res = val + (val3 * 100);
            alert("usted Pagó:" + res);
            //location.href = "?controller=Item&action=insertarMaderaView";
            $("#PrecioA").val(val1);
        }

    });

}