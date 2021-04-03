function adivinarRecinto(estudiantes) {
    var resultado = 100000;
    var numeroTupla = 0;

    _sex_M_1 = 0;
    _sex_F_1 = 0;
    _sex_M_2 = 0;
    _sex_F_2 = 0;

    _asim_1 = 0;
    _asim_2 = 0;
    _acom_1 = 0;
    _acom_2 = 0;
    _div_1 = 0;
    _div_2 = 0;
    _con_1 = 0;
    _con_2 = 0;

    _nota_1_Turri_ = 0;
    _nota_2_Turri_ = 0;
    _nota_3_Turri_ = 0;
    _nota_4_Turri_ = 0;
    _nota_1_Para_ = 0;
    _nota_2_Para_ = 0;
    _nota_3_Para_ = 0;
    _nota_4_Para_ = 0;

    _prob_Acomodador_Sex = 0;
    _prob_Acomodador_Recinto = 0;
    _prob_Acomodador_nota = 0;
    _prob_Acomodador_total = 0;

    _prob_Turri_estilo = 0;
    _prob_Para_estilo = 0;
    //Sexo,promedio,recinto,


    for (var i = 0; i < estudiantes.length; i++) {
        var sexoTupla = 1;
        var estiloTupla = 0;
        if (estudiantes[i].recinto == "Turrialba") {
            if (estudiantes[i].promedio < 6.5) { _nota_1_Turri_++; }
            else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_Turri_++; }
            else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_Turri_++; }
            else if (estudiantes[i].promedio >= 8) { _nota_4_Turri_++; }
            if (estudiantes[i].sexo === 'F') {
                sexoTupla = 2;
                _sex_F_1++;
            } else {
                _sex_M_1++;
            }

            if (estudiantes[i].estilo == "DIVERGENTE") {
                _div_1++;
            } else if (estudiantes[i].estilo == "CONVERGENTE") {
                _con_1++;
            } if (estudiantes[i].estilo == "ASIMILADOR") {
                _asim_1++;
            } if (estudiantes[i].estilo == "ACOMODADOR") {
                _acom_1++;
            }
        } else if (estudiantes[i].recinto == "Paraiso") {
            if (estudiantes[i].promedio < 6.5) { _nota_1_Para_++; }
            else if (estudiantes[i].promedio >= 6.5 && estudiantes[i].promedio < 7.5) { _nota_2_Para_++; }
            else if (estudiantes[i].promedio >= 7.5 && estudiantes[i].promedio < 8.5) { _nota_3_Para_++; }
            else if (estudiantes[i].promedio >= 8) { _nota_4_Para_++; }
            if (estudiantes[i].sexo === 'F') {
                sexoTupla = 2;
                _sex_F_2++;
            } else {
                _sex_M_2++;
            }

            if (estudiantes[i].estilo == "DIVERGENTE") {
                _div_2++;
            } else if (estudiantes[i].estilo == "CONVERGENTE") {
                _con_2++;
            } if (estudiantes[i].estilo == "ASIMILADOR") {
                _asim_2++;
            } if (estudiantes[i].estilo == "ACOMODADOR") {
                _acom_2++;
            }
        }
    }/* Fin del for */
    pNota = 1 / 4;
    pSex = 1 / 2;
    pEst = 1 / 4;
    m = 3, nSex = 2, nNota = 4, nEstilo = 4;
    console.log("Sex", _sex_F_1, _sex_F_2, _sex_M_1, _sex_M_2);
    console.log("nota", _nota_1_Para_, _nota_1_Turri_, _nota_2_Para_, _nota_2_Turri_, _nota_3_Para_, _nota_3_Turri_, _nota_4_Para_, _nota_4_Turri_)
    console.log("Est", _div_1, _div_2, _acom_1, _acom_2, _asim_1, _asim_2, _con_1, _con_2);

    if ((parseFloat(document.getElementById('promedio').value) < 6.5)) {
        _prob_Para_nota = (_nota_1_Para_ + (m * pNota)) / (nNota + m);
        _prob_Turri_nota = (_nota_1_Turri_ + (m * pNota)) / (nNota + m);

    } else if ((parseFloat(document.getElementById('promedio').value) >= 6.5 && (parseFloat(document.getElementById('promedio').value) < 7.5))) {
        _prob_Para_nota = (_nota_2_Para_ + (m * pNota)) / (nNota + m);
        _prob_Turri_nota = (_nota_2_Turri_ + (m * pNota)) / (nNota + m);
    } else if ((parseFloat(document.getElementById('promedio').value) >= 7.5 && (parseFloat(document.getElementById('promedio').value) < 8.5))) {
        _prob_Para_nota = (_nota_3_Para_ + (m * pNota)) / (nNota + m);
        _prob_Turri_nota = (_nota_3_Turri_ + (m * pNota)) / (nNota + m);
    } else if ((parseFloat(document.getElementById('promedio').value) >= 8.5)) {
        _prob_Para_nota = (_nota_4_Para_ + (m * pNota)) / (nNota + m);
        _prob_Turri_nota = (_nota_4_Turri_ + (m * pNota)) / (nNota + m);
    }
    if (parseInt(document.getElementById('sexo').value) == 1) {
        _prob_Turri_Sex = (_sex_M_1 + (m * pSex)) / (nSex + m);
        _prob_Para_Sex = (_sex_M_2 + (m * pSex)) / (nSex + m);

    } else if (parseInt(document.getElementById('sexo').value) == 2) {
        _prob_Turri_Sex = (_sex_F_1 + (m * pSex)) / (nSex + m);
        _prob_Para_Sex = (_sex_F_2 + (m * pSex)) / (nSex + m);
    }
    if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 1)) {
        _prob_Para_estilo = (_div_1 + (m * pEst)) / (nEstilo + m);
        _prob_Turri_estilo = (_div_2 + (m * pEst)) / (nEstilo + m);

    } else if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 2)) {
        _prob_Para_estilo = (_con_1 + (m * pEst)) / (nEstilo + m);
        _prob_Turri_estilo = (_con_2 + (m * pEst)) / (nEstilo + m);
    } else if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 3)) {
        _prob_Para_estilo = (_asim_1 + (m * pEst)) / (nEstilo + m);
        _prob_Turri_estilo = (_asim_2 + (m * pEst)) / (nEstilo + m);
    } else if ((parseFloat(document.getElementById('estiloAprendizaje').value) == 4)) {
        _prob_Para_estilo = (_acom_1 + (m * pEst)) / (nEstilo + m);
        _prob_Turri_estilo = (_acom_2 + (m * pEst)) / (nEstilo + m);
    }

    prob_Turr = _prob_Turri_Sex * _prob_Turri_estilo * _prob_Turri_nota;
    prob_Para = _prob_Para_Sex * _prob_Para_estilo * _prob_Para_nota;
    msjPrint = "";
    if (prob_Turr > prob_Para) {
        msjPrint = "Turrialba"
    } else
        msjPrint = "Paraiso"
    document.getElementById('mensaje').innerHTML = 'Su recinto de origen es: ' + msjPrint + '.';

}/* Fin de la función adivinarRecinto */
