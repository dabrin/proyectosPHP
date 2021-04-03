function adivinarEstiloAprendizaje(estudiantes) {
    var resultado = 100000;
    var numeroTupla = 0;

    _prob_Divergente = 0;
    _prob_Convergente = 0;
    _prob_Asimilador = 0;
    _prob_Acomodador = 0;
    //recintos
    _rec_Turri_Div = 0;
    _rec_Turri_Con = 0;
    _rec_Turri_Asim = 0;
    _rec_Turri_Acom = 0;

    _rec_Para_Div = 0;
    _rec_Para_Con = 0;
    _rec_Para_Asim = 0;
    _rec_Para_Acom = 0;
    //recintos
    //sexo
    _sex_F_Div = 0;
    _sex_F_Con = 0;
    _sex_F_Asim = 0;
    _sex_F_Acom = 0;

    _sex_M_Div = 0;
    _sex_M_Con = 0;
    _sex_M_Asim = 0;
    _sex_M_Acom = 0;
    //sexos
    //Notas
    _nota_1_Div = 0;
    _nota_1_Con = 0;
    _nota_1_Asim = 0;
    _nota_1_Acom = 0;
    _nota_2_Div = 0;
    _nota_2_Con = 0;
    _nota_2_Asim = 0;
    _nota_2_Acom = 0;
    _nota_3_Div = 0;
    _nota_3_Con = 0;
    _nota_3_Asim = 0;
    _nota_3_Acom = 0;
    _nota_4_Div = 0;
    _nota_4_Con = 0;
    _nota_4_Asim = 0;
    _nota_4_Acom = 0;
    //Notas

    _prob_Acomodador_Sex = 0;
    _prob_Acomodador_Recinto = 0;
    _prob_Acomodador_nota = 0;
    _prob_Acomodador_total = 0;

    _prob_Asim_Sex = 0;
    _prob_Asim_Recinto = 0;
    _prob_Asim_nota = 0;
    _prob_Asim_total = 0;

    _prob_Div_Sex = 0;
    _prob_Div_Recinto = 0;
    _prob_Div_nota = 0;
    _prob_Div_total = 0;

    _prob_Conv_Sex = 0;
    _prob_Conv_Recinto = 0;
    _prob_Conv_nota = 0;
    _prob_Conv_total = 0;


    //Sexo,promedio,recinto,
    for (var i = 0; i < estudiantes.length; i++) {
        var recintoTupla = 1;
        var sexoTupla = 1;



        switch (estudiantes[i].estilo) {
            case "DIVERGENTE":

                if (estudiantes[i].promedio < 6.5) { _nota_1_Div++; }
                else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_Div++; }
                else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_Div++; }
                else if (estudiantes[i].promedio >= 8) { _nota_4_Div++; }

                if (estudiantes[i].sexo === 'F') {
                    sexoTupla = 2;
                    _sex_F_Div++;
                } else {
                    _sex_M_Div++;
                }
                //recinto
                if (estudiantes[i].recinto === 'Paraiso') {
                    recintoTupla = 2;
                    _rec_Para_Div++;
                } else
                    _rec_Turri_Div++;
                break;
            case "CONVERGENTE":
                if (estudiantes[i].promedio < 6.5) { _nota_1_Con++; }
                else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_Con++; }
                else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_Con++; }
                else if (estudiantes[i].promedio >= 8) { _nota_4_Con++; }
                if (estudiantes[i].sexo === 'F') {
                    sexoTupla = 2;
                    _sex_F_Con++;
                } else {
                    _sex_M_Con++;
                }//Fin sex
                //recinto
                if (estudiantes[i].recinto === 'Paraiso') {
                    recintoTupla = 2;
                    _rec_Para_Con++;
                } else
                    _rec_Turri_Con++;

                break;
            case "ACOMODADOR":
                if (estudiantes[i].promedio < 6.5) { _nota_1_Acom++; }
                else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_Acom++; }
                else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_Acom++; }
                else if (estudiantes[i].promedio >= 8.5) { _nota_4_Acom++; }
                if (estudiantes[i].sexo === 'F') {
                    sexoTupla = 2;
                    _sex_F_Acom++;
                } else {
                    _sex_M_Acom++;
                }
                if (estudiantes[i].recinto === 'Paraiso') {
                    recintoTupla = 2;
                    _rec_Para_Acom++;
                } else _rec_Turri_Acom++;
                break;
            case "ASIMILADOR":
                if (estudiantes[i].promedio < 6.5) { _nota_1_Asim++; }
                else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_Asim++; }
                else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_Asim++; }
                else if (estudiantes[i].promedio >= 8.5) { _nota_4_Asim++; }
                if (estudiantes[i].sexo === 'F') { sexoTupla = 2; _sex_F_Asim++; } else {
                    _sex_M_Asim++;
                }
                if (estudiantes[i].recinto === 'Paraiso') { recintoTupla = 2; _rec_Para_Asim++; } else
                    _rec_Turri_Asim++;
                break;
        }
        if (estudiantes[i].recinto === 'Paraiso') {
            recintoTupla = 2;
        }


    }
    m = 3;
    nSex = 1 / 2;
    nNota = 1 / 4;
    nRecinto = 1 / 2;
    //probsSex
    if (parseInt(document.getElementById('sexo').value) == 1) {
        _prob_Acomodador_Sex = (_sex_M_Acom + (m * nSex)) / (nSex + m);
        _prob_Asim_Sex = (_sex_M_Asim + (m * nSex)) / (nSex + m);
        _prob_Div_Sex = (_sex_M_Div + (m * nSex)) / (nSex + m);
        _prob_Conv_Sex = (_sex_M_Con + (m * nSex)) / (nSex + m);
    } else if (parseInt(document.getElementById('sexo').value) == 2) {
        _prob_Acomodador_Sex = (_sex_F_Acom + (m * nSex)) / (nSex + m);
        _prob_Asim_Sex = (_sex_F_Asim + (m * nSex)) / (nSex + m);
        _prob_Div_Sex = (_sex_F_Div + (m * nSex)) / (nSex + m);
        _prob_Conv_Sex = (_sex_F_Con + (m * nSex)) / (nSex + m);
    }
    //probs Recinto
    if (parseInt(document.getElementById('recinto').value) == 1) {
        _prob_Conv_Recinto = (_rec_Turri_Con + (m * nRecinto)) / (nRecinto + m);
        _prob_Asim_Recinto = (_rec_Turri_Asim + (m * nRecinto)) / (nSex + m);
        _prob_Acomodador_Recinto = (_rec_Turri_Acom + (m * nRecinto)) / (nSex + m);
        _prob_Div_Recinto = (_rec_Turri_Div + (m * nRecinto)) / (nSex + m);
    } else if (parseInt(document.getElementById('recinto').value) == 2) {
        _prob_Conv_Recinto = (_rec_Para_Con + (m * nRecinto)) / (nRecinto + m);
        _prob_Asim_Recinto = (_rec_Para_Asim + (m * nRecinto)) / (nSex + m);
        _prob_Acomodador_Recinto = (_rec_Para_Acom + (m * nRecinto)) / (nSex + m);
        _prob_Div_Recinto = (_rec_Para_Div + (m * nRecinto)) / (nSex + m);
    }

    if ((parseFloat(document.getElementById('promedio').value) < 6.5)) {
        _prob_Div_nota = (_nota_1_Div + (m * nNota)) / (nNota + m);
        _prob_Conv_nota = (_nota_1_Con + (m * nNota)) / (nNota + m);
        _prob_Asim_nota = (_nota_1_Asim + (m * nNota)) / (nNota + m);
        _prob_Acomodador_nota = (_nota_1_Acom + (m * nNota)) / (nNota + m);
    } else if ((parseFloat(document.getElementById('promedio').value) >= 6.5 && (parseFloat(document.getElementById('promedio').value) < 7.5))) {
        _prob_Div_nota = (_nota_2_Div + (m * nNota)) / (nNota + m);
        _prob_Conv_nota = (_nota_2_Con + (m * nNota)) / (nNota + m);
        _prob_Asim_nota = (_nota_2_Asim + (m * nNota)) / (nNota + m);
        _prob_Acomodador_nota = (_nota_2_Acom + (m * nNota)) / (nNota + m);
    } else if ((parseFloat(document.getElementById('promedio').value) >= 7.5 && (parseFloat(document.getElementById('promedio').value) < 8.5))) {
        _prob_Div_nota = (_nota_3_Div + (m * nNota)) / (nNota + m);
        _prob_Conv_nota = (_nota_3_Con + (m * nNota)) / (nNota + m);
        _prob_Asim_nota = (_nota_3_Asim + (m * nNota)) / (nNota + m);
        _prob_Acomodador_nota = (_nota_3_Acom + (m * nNota)) / (nNota + m);
    } else if ((parseFloat(document.getElementById('promedio').value) >= 8.5)) {
        _prob_Div_nota = (_nota_4_Div + (m * nNota)) / (nNota + m);
        _prob_Conv_nota = (_nota_4_Con + (m * nNota)) / (nNota + m);
        _prob_Asim_nota = (_nota_4_Asim + (m * nNota)) / (nNota + m);
        _prob_Acomodador_nota = (_nota_4_Acom + (m * nNota)) / (nNota + m);
    }

    _prob_Conv_total = _prob_Conv_nota * _prob_Conv_Recinto * _prob_Conv_Sex;
    _prob_Div_total = _prob_Div_nota * _prob_Conv_Recinto * _prob_Div_Sex;
    _prob_Asim_total = _prob_Asim_nota * _prob_Asim_Recinto * _prob_Asim_Sex;
    _prob_Acomodador_total = _prob_Acomodador_nota * _prob_Acomodador_Recinto * _prob_Acomodador_Sex;


    probsTotales = [_prob_Div_total, _prob_Conv_total, _prob_Asim_total, _prob_Acomodador_total];
    nameprobs = ["DIVERGENTE", "CONVERGENTE", "ASIMILADOR", "ACOMODADOR"];
    msjPrint = "";
    mayorProb = 0;
    for (k = 0; k < probsTotales.length; k++) {
        if (mayorProb < probsTotales[k]) {
            mayorProb = probsTotales[k]
            msjPrint = nameprobs[k];
        }

    }


    document.getElementById('mensaje').innerHTML = 'Su estilo de aprendizaje es: ' + msjPrint + '.';

}/* Fin de la función adivinarEstiloAprendizaje, que utiliza el algoritmo de cálculo de
  distancia euclidiana para encontrar una coincidencia con los datos de la BD */