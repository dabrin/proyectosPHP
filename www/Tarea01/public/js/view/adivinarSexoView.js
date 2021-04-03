function adivinarSexo(estudiantes) {
    var resultado = 100000;
    var numeroTupla = 0;

    _diver_F = 0;
    _diver_M = 0;
    _conver_F = 0;
    _conver_M = 0;
    _asim_F = 0;
    _asim_M = 0;
    _acom_F = 0;
    _acom_M = 0;
    //notas
    _nota_1_F = 0;
    _nota_1_M = 0;
    _nota_2_F = 0;
    _nota_2_M = 0;
    _nota_3_F = 0;
    _nota_3_M = 0;
    _nota_4_F = 0;
    _nota_4_M = 0;
    //
    _recinto_turri_F = 0;
    _recinto_para_F = 0;
    _recinto_turri_M = 0;
    _recinto_para_M = 0;

    _prob_M_nota = 0;
    _prob_M_Recinto = 0;
    _prob_M_estilo = 0;
    _prob_F_nota = 0;
    _prob_F_estilo = 0;
    _prob_F_Recinto = 0;


    for (var i = 0; i < estudiantes.length; i++) {
        var recintoTupla = 1;
        var estiloTupla = 0;

        switch (estudiantes[i].sexo) {
            case "F":
                if (estudiantes[i].recinto == "Turrialba") {
                    _recinto_turri_F++;
                } else if (estudiantes[i].recinto == "Paraiso") {
                    _recinto_para_F++;
                }//recinto

                if (estudiantes[i].estilo == 'DIVERGENTE') {
                    estiloTupla = 1;
                    _diver_F++;

                } else if (estudiantes[i].estilo == 'CONVERGENTE') {
                    estiloTupla = 2;
                    _conver_F++;
                }
                else if (estudiantes[i].estilo == 'ASIMILADOR') {
                    estiloTupla = 3;
                    _asim_F++;
                }
                else if (estudiantes[i].estilo == 'ACOMODADOR') {
                    estiloTupla = 4;
                    _acom_F++;
                }
                if (estudiantes[i].promedio < 6.5) { _nota_1_F++; }
                else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_F++; }
                else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_F++; }
                else if (estudiantes[i].promedio >= 8) { _nota_4_F++; }


                break;

            case "M": if (estudiantes[i].recinto == "Turrialba") {
                _recinto_turri_M++;
            } else if (estudiantes[i].recinto == "Paraiso") {
                _recinto_para_M++;
            }
                if (estudiantes[i].estilo == 'DIVERGENTE') {
                    estiloTupla = 1;
                    _diver_M++;

                } else if (estudiantes[i].estilo == 'CONVERGENTE') {
                    estiloTupla = 2;
                    _conver_M++;
                }
                else if (estudiantes[i].estilo == 'ASIMILADOR') {
                    estiloTupla = 3;
                    _asim_M++;
                }
                else if (estudiantes[i].estilo == 'ACOMODADOR') {
                    estiloTupla = 4;
                    _acom_M++;
                }
                if (estudiantes[i].promedio < 6.5) { _nota_1_M++; }
                else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_M++; }
                else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_M++; }
                else if (estudiantes[i].promedio >= 8) { _nota_4_M++; }

                break;
        }

        if (estudiantes[i].recinto === 'Paraiso') {
            recintoTupla = 2;
        }//Fin del if, 



        //******************* CÁLCULO DE DISTANCIA EUCLIDIANA ******************
        var sumatoria = Math.pow((estiloTupla - (parseInt(document.getElementById('estiloAprendizaje').value))), 2) + Math.pow(recintoTupla - (parseInt(document.getElementById('recinto').value)), 2) + Math.pow((parseFloat(estudiantes[i].promedio)) - (parseFloat(document.getElementById('promedio').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        // *********************************************************************

        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }/*Fin del if*/

    }/* Fin del for */

    pNota = 1 / 4;
    pSex = 1 / 2;
    pEst = 1 / 4;
    m = 3, nSex = 2, nNota = 4, nEstilo = 4;

    if ((parseFloat(document.getElementById('promedio').value) < 6.5)) {
        _prob_F_nota = (_nota_1_F + (m * pNota)) / (nNota + m);
        _prob_M_nota = (_nota_1_M + (m * pNota)) / (nNota + m);

    } else if ((parseFloat(document.getElementById('promedio').value) >= 6.5 && (parseFloat(document.getElementById('promedio').value) < 7.5))) {
        _prob_F_nota = (_nota_2_F + (m * pNota)) / (nNota + m);
        _prob_M_nota = (_nota_2_M + (m * pNota)) / (nNota + m);
    } else if ((parseFloat(document.getElementById('promedio').value) >= 7.5 && (parseFloat(document.getElementById('promedio').value) < 8.5))) {
        _prob_F_nota = (_nota_3_F + (m * pNota)) / (nNota + m);
        _prob_M_nota = (_nota_3_M + (m * pNota)) / (nNota + m);
    } else if ((parseFloat(document.getElementById('promedio').value) >= 8.5)) {
        _prob_F_nota = (_nota_4_F + (m * pNota)) / (nNota + m);
        _prob_M_nota = (_nota_4_M + (m * pNota)) / (nNota + m);
    }//fiin probab promedio
    if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 1)) {
        _prob_F_estilo = (_diver_F + (m * pEst)) / (nEstilo + m);
        _prob_M_estilo = (_diver_M + (m * pEst)) / (nEstilo + m);

    } else if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 2)) {
        _prob_F_estilo = (_conver_F + (m * pEst)) / (nEstilo + m);
        _prob_M_estilo = (_conver_M + (m * pEst)) / (nEstilo + m);
    } else if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 3)) {
        _prob_F_estilo = (_asim_F + (m * pEst)) / (nEstilo + m);
        _prob_M_estilo = (_asim_M + (m * pEst)) / (nEstilo + m);
    } else if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 4)) {
        _prob_F_estilo = (_acom_F + (m * pEst)) / (nEstilo + m);
        _prob_M_estilo = (_acom_M + (m * pEst)) / (nEstilo + m);
    } if (parseInt(document.getElementById('recinto').value) == 1) {
        _prob_F_Recinto = (_recinto_para_F + (m * pSex)) / (nSex + m);
        _prob_M_Recinto = (_recinto_para_M + (m * pSex)) / (nSex + m);
    } else if (parseInt(document.getElementById('recinto').value) == 2) {
        _prob_F_Recinto = (_recinto_para_F + (m * pSex)) / (nSex + m);
        _prob_M_Recinto = (_recinto_para_M + (m * pSex)) / (nSex + m);
    }

    prob_F = _prob_F_Recinto * _prob_F_estilo * _prob_F_nota
    prob_M = _prob_M_Recinto * _prob_M_estilo * _prob_M_nota;

    if (prob_M > prob_F)
        sexo = 'Masculino';
    else
        sexo = 'Femenino';

    document.getElementById('mensaje').innerHTML = 'Su sexo es: ' + sexo + '.';

}/* Fin de la función adivinarSexo */