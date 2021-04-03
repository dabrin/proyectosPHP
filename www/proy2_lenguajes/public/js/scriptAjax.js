function realizarProceso(val) {
    var parametros = {

        "nombre_combo": val
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=proceso',
            type: 'POST',
            beforeSend: function () {
                $('#codeCombo').val("Procesando, \n\ espere por favor...");
            },
            success: function (resp) {
                //var array = eval(response);
                $('#codeCombo').val(resp);

            }

        }
    );

}

function realizar_para_agregar(val) {
    var parametros = {
        "id": val
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=view_add_prod',
            type: 'POST',
            beforeSend: function () {

                //$('#codeCombo').val("Procesando, \n\ espere por favor...");


            },
            success: function (resp) {
                //var array = eval(response);
                //alert(resp);
                $('#id').val(resp);
                location.href = "?controlador=Item&accion=view_add_prod";

            }
        }
    );

}

function realizarProcesoCompra(val, val1, val2) {
    var parametros = {
        "id_prod": val1,
        "precio": val2,
        "id_cliente": val
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=comprar',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (resp) {

                $('#compra').val(resp);

                location.href = "?controlador=User&accion=ver_compras";
            }
        }
    );
}

function comprar_combo(val1, val2) {
    var parametros = {
        "id_user": val1,
        "precio": val2

    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Combo&accion=comprar',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (resp) {

                $('#compra').val(resp);

                location.href = "?controlador=User&accion=ver_compras";
            }
        }
    );
}



function realizarProcesoAgregarCarrito(val1, val2) {
    var parametros = {
        "id_carrito": val1,
        "id_art": val2
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=agregarACarrito',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (resp) {
                //var array = eval(response);
                //alert(resp);
                //location.href = "?controlador=Item&accion=agregar_prod_a_combo";
                $('#carrito').val(resp);
            }
        }
    );
}
function realizarProcesoParaAgregarCarrito(val1, val2) {
    var parametros = {
        "id_user": val1,
        "id_prod": val2
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=updateProd',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                datos = jQuery.parseJSON(r);
                $('#codigoA').val(datos['codigo']);
                $('#nombreA').val(datos['nombre']);
                $('#descripcionA').val(datos['descripcion']);
                $('#precioA').val(datos['precio']);
                $('#ID_Carrito').val(datos['ID']);


            }
        }
    );
}

function realizarProcesoAgregarComboCarrito(val1, val2) {
    var parametros = {
        "id_carrito": val1,
        "id_combo": val2
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Combo&accion=agregarACarrito',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (resp) {
                //var array = eval(response);
                //alert(resp);
                //location.href = "?controlador=Item&accion=agregar_prod_a_combo";
                $('#combo').val(resp);
            }
        }
    );
}

function obtener_carrito(val1, val2) {
    var parametros = {
        "id_user": val1,
        "id_combo": val2
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Combo&accion=obtener_carrito',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                datos = jQuery.parseJSON(r);

                $('#codigoA').val(datos['id_combo']);
                $('#nombreA').val(datos['nombre_combo']);
                $('#precioA').val(datos['precio']);
                $('#id_carrito').val(datos['ID']);
            }
        }
    );
}

function obtener_carrito_compra(val1, val2) {

    var parametros = {
        "id_user": val1,
        "id_combo": val2
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Combo&accion=obtener_carrito',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                datos = jQuery.parseJSON(r);

                $('#codigo').val(datos['id_combo']);
                $('#nombre').val(datos['nombre_combo']);
                $('#precio').val(datos['precio']);
                $('#id_combo1').val(datos['ID']);
            }
        }
    );
}

function updateProd(val1) {
    var parametros = {
        "id_prod": val1,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=obtener_prod_actualizar',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                datos = jQuery.parseJSON(r);
                $('#codigo').val(datos['codigo']);
                $('#nombre').val(datos['nombre']);
                $('#descripcion').val(datos['descripcion']);
                $('#precio').val(datos['precio']);
            }
        }
    );
}

function agregarProd(val1, val2, val3, val4, val5, val6) {
    var parametros = {
        "id_prod": val1,
        "nombre": val2,
        "descripcion": val3,
        "img": val4,
        "precio": val5,
        "cantidad": val6,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=updateProd',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                datos = jQuery.parseJSON(r);
                $('#codigo').val(datos['codigo']);
                $('#nombre').val(datos['nombre']);
                $('#descripcion').val(datos['descripcion']);
                $('#precio').val(datos['precio']);
            }
        }
    );
}
function eliminarDeCarrito(val1) {
    var parametros = {
        "id_prod": val1,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Carrito&accion=delete',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                location.href = "?controlador=Carrito&accion=ver_carrito";

            }
        }
    );

}
function agregarParaComprar(id) {
    var parametros = {
        "id_prod": id,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=recuperar',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                datos = jQuery.parseJSON(r);
                $('#codigo').val(datos['codigo']);
                $('#nombre').val(datos['nombre']);
                $('#descripcion').val(datos['descripcion']);
                $('#precio').val(datos['precio']);
            }
        }
    );
}


function deleteProd(val1) {
    var parametros = {
        "id_prod": val1,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Item&accion=deleteProd',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                location.href = "?controlador=Item&accion=actualizar";
            }
        }
    );
}

function createCombo(val1) {
    var parametros = {
        "nombre_combo": val1,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Combo&accion=crear_combo',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {

                //location.href = "?controlador=Item&accion=actualizar";
            }
        }
    );
}
function deleteCombo(val1) {
    var parametros = {
        "id_combo": val1,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Combo&accion=deleteCombo',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {

                //location.href = "?controlador=Item&accion=actualizar";
            }
        }
    );
}
function add_prod_combo(val1, val2) {
    var parametros = {
        "id_combo": val1,
        "id_prod": val2,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Combo&accion=addProdcombo',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {

                //location.href = "?controlador=Item&accion=actualizar";
            }
        }
    );

}

function ver_admin(val1) {


    var parametros = {
        "id_user": val1,
    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Admin&accion=verAdm',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                datos = jQuery.parseJSON(r);
                $('#nombre').val(datos['nombre']);
                $('#id').val(datos['identificador']);
                $('#correo').val(datos['correo']);
            }
        }
    );
}

function agregar_permisos_rol(id_user) {

    var val1 = 0;
    var val2 = 0;
    var val3 = 0;
    var val4 = 0;
    var val5 = 0;

    var isCheckedUser = document.getElementById('GUser').checked;
    if (isCheckedUser) {
        val1 = 1;

    }
    var isCheckedProd = document.getElementById('GProd').checked;
    if (isCheckedProd) {
        val2 = 1;

    }
    var isCheckedInform = document.getElementById('GInform').checked;
    if (isCheckedInform) {
        val3 = 1;

    }
    var isCheckedCombo = document.getElementById('GCombos').checked;
    if (isCheckedCombo) {
        val4 = 1;

    }
    var isCheckedlista = document.getElementById('Glista').checked;
    if (isCheckedlista) {
        val5 = 1;

    }

    var parametros = {
        "GUser": val1,
        "GProd": val2,
        "GInform": val3,
        "GCombos": val4,
        "Glista": val5,
        "id_user": id_user

    };
    $.ajax(
        {
            data: parametros,
            url: '?controlador=Admin&accion=agregarPermisosRol',
            type: 'POST',
            beforeSend: function () {
            },
            success: function (r) {
                alert(r);//Cambiar por ingresar algo en un span!!



            }
        }
    );
}


function comprarProd() {


}

function comprarCombo() {


}

