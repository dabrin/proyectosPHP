function determinarClaseRed(redes) {
    var resultado = 100000;
    var numeroTupla = 0;

    _probA = 0.5;
    _probB = 0.5;

    //Se tomarán confiabilidad,capacidad,costo para hacer los respectivos analisis
    //datos confiabilidad
    _confiabilidad_A_1 = 0;
    _confiabilidad_A_2 = 0;
    _confiabilidad_A_3 = 0;
    _confiabilidad_A_4 = 0;
    _confiabilidad_B_1 = 0;
    _confiabilidad_B_2 = 0;
    _confiabilidad_B_3 = 0;
    _confiabilidad_B_4 = 0;

    //Datos capacidad
    _capacidad_B_L = 0;
    _capacidad_B_M = 0;
    _capacidad_B_H = 0;
    _capacidad_A_L = 0;
    _capacidad_A_M = 0;
    _capacidad_A_H = 0;
    //Datos costo
    _costo_A_L = 0;
    _costo_A_M = 0;
    _costo_A_H = 0;
    _costo_B_L = 0;
    _costo_B_M = 0;
    _costo_B_H = 0;
    //probs
    prob_A_confiab = 0;
    prob_B_confiab = 0;

    prob_A_costos = 0;
    prob_B_costos = 0;

    prob_A_capacidad = 0;
    prob_B_capacidad = 0;




    contaA = 0;
    contaB = 0;
    for (var i = 0; i < redes.length; i++) {
        var capacidadTupla = 0;
        var costoTupla = 0;
        var confiabilidadTupla = 0;
        if (redes[i].clase == "A") {

            switch (redes[i].confiabilidad) {
                case "5": confiabilidadTupla = 5; _confiabilidad_A_1++; break;
                case "2": confiabilidadTupla = 2; _confiabilidad_A_2++; break;
                case "3": confiabilidadTupla = 3; _confiabilidad_A_3++; break;
                case "4": confiabilidadTupla = 3; _confiabilidad_A_4++; break;

            }
            switch (redes[i].costo) {
                case "Low": costoTupla = 1; _costo_A_L++; break;
                case "Medium": costoTupla = 2; _costo_A_M++; break;
                case "High": costoTupla = 3; _costo_A_H++; break;
            }
            switch (redes[i].capacidad) {
                case "Low": capacidadTupla = 1; _capacidad_A_L++; break;
                case "Medium": capacidadTupla = 2; _capacidad_A_M++; break;
                case "High": capacidadTupla = 3; _capacidad_A_H++; break;
            }
            contaA++;
        } else if (redes[i].clase == "B") {
            switch (redes[i].confiabilidad) {
                case "5": confiabilidadTupla = 5; _confiabilidad_B_1++; break;
                case "2": confiabilidadTupla = 2; _confiabilidad_B_2++; break;
                case "3": confiabilidadTupla = 3; _confiabilidad_B_3++; break;
                case "4": confiabilidadTupla = 4; _confiabilidad_B_4++; break;

            }
            switch (redes[i].costo) {
                case "Low": costoTupla = 1; _costo_B_L++; break;
                case "Medium": costoTupla = 2; _costo_B_M++; break;
                case "High": costoTupla = 3; _costo_B_H++; break;
            }
            switch (redes[i].capacidad) {
                case "Low": capacidadTupla = 1; _capacidad_B_L++; break;
                case "Medium": capacidadTupla = 2; _capacidad_B_M++; break;
                case "High": capacidadTupla = 3; _capacidad_B_H++; break;
            }/* Fin del switch 2*/

            contaB++;
        }
        //******************* CÁLCULO DE DISTANCIA EUCLIDIANA ******************
        var sumatoria = Math.pow(costoTupla - (parseInt(document.getElementById('costo').value)), 2) +
            Math.pow(capacidadTupla - (parseInt(document.getElementById('capacidad').value)), 2) +
            Math.pow(redes[i].confiabilidad - (parseInt(document.getElementById('confiabilidad').value)), 2) +
            Math.pow(redes[i].numeroEnlaces - (parseInt(document.getElementById('numeroEnlaces').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        // *********************************************************************

        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }/*Fin del if...*/

    }/* Fin del for*/

    //confiab
    if (parseInt(document.getElementById('confiabilidad').value) == 2) {
        prob_A_confiab = (_confiabilidad_A_2 + (4 * (1 / 4))) / 4 + 2;
        prob_B_confiab = (_confiabilidad_B_2 + (4 * (1 / 4))) / 4 + 2;
    } if (parseInt(document.getElementById('confiabilidad').value) == 3) {
        prob_A_confiab = (_confiabilidad_A_3 + (4 * (1 / 4))) / 4 + 2;
        prob_B_confiab = (_confiabilidad_B_3 + (4 * (1 / 4))) / 4 + 2;
    } if (parseInt(document.getElementById('confiabilidad').value) == 4) {
        prob_A_confiab = (_confiabilidad_A_4 + (4 * (1 / 4))) / 4 + 2;
        prob_B_confiab = (_confiabilidad_B_4 + (4 * (1 / 4))) / 4 + 2;
    } if (parseInt(document.getElementById('confiabilidad').value) == 5) {
        prob_A_confiab = (_confiabilidad_A_1 + (4 * (1 / 4))) / 4 + 2;
        prob_B_confiab = (_confiabilidad_B_1 + (4 * (1 / 4))) / 4 + 2;
    }//confiab
    //costo
    if (parseInt(document.getElementById('costo').value) == 1) {
        prob_A_costos = (_costo_A_L + (4 * (1 / 3))) / 4 + 2;
        prob_B_costos = (_costo_B_L + (4 * (1 / 3))) / 4 + 2;
    } if (parseInt(document.getElementById('costo').value) == 2) {
        prob_A_costos = (_costo_A_M + (4 * (1 / 3))) / 4 + 2;
        prob_B_costos = (_costo_B_M + (4 * (1 / 3))) / 4 + 2;
    } if (parseInt(document.getElementById('costo').value) == 3) {
        prob_A_costos = (_costo_A_H + (4 * (1 / 3))) / 4 + 2;
        prob_B_costos = (_costo_B_H + (4 * (1 / 3))) / 4 + 2;
    } //costo
    if (parseInt(document.getElementById('capacidad').value) == 1) {
        prob_A_capacidad = (_capacidad_A_L + (4 * (1 / 3))) / 4 + 2;
        prob_B_capacidad = (_capacidad_B_L + (4 * (1 / 3))) / 4 + 2;
    } if (parseInt(document.getElementById('capacidad').value) == 2) {
        prob_A_capacidad = (_capacidad_A_M + (4 * (1 / 3))) / 4 + 2;
        prob_B_capacidad = (_capacidad_B_M + (4 * (1 / 3))) / 4 + 2;
    } if (parseInt(document.getElementById('capacidad').value) == 3) {
        prob_A_capacidad = (_capacidad_A_H + (4 * (1 / 3))) / 4 + 2;
        prob_B_capacidad = (_capacidad_B_H + (4 * (1 / 3))) / 4 + 2;
    }

    _probA = prob_A_confiab * prob_A_costos * prob_A_capacidad;
    _probB = prob_B_confiab * prob_B_costos * prob_B_capacidad;
    msjPrint = "";
    if (_probA > _probB) {
        msjPrint = "A"
    } else
        msjPrint = "B"

    document.getElementById('mensaje').innerHTML = 'Estas especificaciones demuestra que la red es de clase: ' + msjPrint + '.';

}