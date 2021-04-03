function calcularEstiloAprendizaje(estilosAprendizaje) {
    var ec = parseInt(document.getElementById('c5').value) + parseInt(document.getElementById('c9').value) + parseInt(document.getElementById('c13').value) + parseInt(document.getElementById('c17').value) + parseInt(document.getElementById('c25').value) + parseInt(document.getElementById('c29').value);
    var or = parseInt(document.getElementById('c2').value) + parseInt(document.getElementById('c10').value) + parseInt(document.getElementById('c22').value) + parseInt(document.getElementById('c26').value) + parseInt(document.getElementById('c30').value) + parseInt(document.getElementById('c34').value);
    var ca = parseInt(document.getElementById('c7').value) + parseInt(document.getElementById('c11').value) + parseInt(document.getElementById('c15').value) + parseInt(document.getElementById('c19').value) + parseInt(document.getElementById('c31').value) + parseInt(document.getElementById('c35').value);
    var ea = parseInt(document.getElementById('c4').value) + parseInt(document.getElementById('c12').value) + parseInt(document.getElementById('c24').value) + parseInt(document.getElementById('c28').value) + parseInt(document.getElementById('c32').value) + parseInt(document.getElementById('c36').value);

    var resultado = 100000;
    var numeroTupla = 0;
    //los atributos que van a afectar serian ca-or-ea-ec
    //Sabiendo que el minimo que puede tener la columna de valores puede ser de 9 y el máximo 24(es el mayor número obtenido en las pruebas)
    var contadorAcom = 0;
    var contadorAsim = 0;
    var contadorDiver = 0;
    var contadorConver = 0;
    //datos de columna CA
    var _ca = (1 / 3);
    _ca_diver = 0; _ca_acom = 0; _ca_asim = 0; _ca_conver = 0;
    _ca_9_14_acom = 0; _ca_9_14_asim = 0; _ca_9_14_diver = 0; _ca_9_14_conver = 0;
    _ca_15_20_acom = 0; _ca_15_20_asim = 0; _ca_15_20_diver = 0; _ca_15_20_conver = 0;
    _ca_20_25_acom = 0; _ca_20_25_asim = 0; _ca_20_25_diver = 0; _ca_20_25_conver = 0;
    //datos de columna OR
    var _or = (1 / 3);
    _or_diver = 0; _or_acom = 0; _or_asim = 0; _or_conver = 0;
    _or_9_14_acom = 0; _or_9_14_asim = 0; _or_9_14_diver = 0; _or_9_14_conver = 0;
    _or_15_20_acom = 0; _or_15_20_asim = 0; _or_15_20_diver = 0; _or_15_20_conver = 0;
    _or_20_25_acom = 0; _or_20_25_asim = 0; _or_20_25_diver = 0; _or_20_25_conver = 0;
    //ec
    var _ec = (1 / 3);
    _ec_diver = 0; _ec_acom = 0; _ec_asim = 0; _ec_conver = 0;
    _ec_9_14_acom = 0; _ec_9_14_asim = 0; _ec_9_14_diver = 0; _ec_9_14_conver = 0;
    _ec_15_20_acom = 0; _ec_15_20_asim = 0; _ec_15_20_diver = 0; _ec_15_20_conver = 0;
    _ec_20_25_acom = 0; _ec_20_25_asim = 0; _ec_20_25_diver = 0; _ec_20_25_conver = 0;
    //ea
    var _ea = (1 / 3);
    _ea_diver = 0; _ea_acom = 0; _ea_asim = 0; _ea_conver = 0;
    _ea_9_14_acom = 0; _ea_9_14_asim = 0; _ea_9_14_diver = 0; _ea_9_14_conver = 0;
    _ea_15_20_acom = 0; _ea_15_20_asim = 0; _ea_15_20_diver = 0; _ea_15_20_conver = 0;
    _ea_20_25_acom = 0; _ea_20_25_asim = 0; _ea_20_25_diver = 0; _ea_20_25_conver = 0;
    //recinto se divide entre 2= 0.5 prob
    var recinto = (1 / 2);
    rec_turri_asim = 0;
    rec_turri_acom = 0;
    rec_turri_diver = 0;
    rec_turri_conver = 0;
    rec_para_asim = 0;
    rec_para_acom = 0;
    rec_para_diver = 0;
    rec_para_conver = 0;
    m = 4;//ea,ec,ca,or
    n = 4;//div,conv,asim,acom
    var probab_Asim;
    var probab_Acom;
    var probab_Diver;
    var probab_Conver;





    for (var i = 0; i < estilosAprendizaje.length; i++) {

        console.log(estilosAprendizaje[i].estilo);

        switch (estilosAprendizaje[i].estilo) {
            case "ASIMILADOR": contadorAsim++;
                if (estilosAprendizaje[i].ca <= 14) {
                    _ca_9_14_asim++;
                } else if (estilosAprendizaje[i].ca > 14 && estilosAprendizaje <= 20) {
                    _ca_15_20_asim++;
                } else if (estilosAprendizaje[i].ca > 20) {
                    _ca_20_25_asim++;
                }//or
                if (estilosAprendizaje[i].or <= 14) {
                    _or_9_14_asim++;
                } else if (estilosAprendizaje[i].or > 14 && estilosAprendizaje[i].or <= 20) {
                    _or_15_20_asim++;
                } else if (estilosAprendizaje[i].or > 20) {
                    _or_20_25_asim++;
                }
                //ea
                if (estilosAprendizaje[i].ea <= 14) {
                    _ea_9_14_asim++;
                } else if (estilosAprendizaje[i].ea > 14 && estilosAprendizaje[i].ea <= 20) {
                    _ea_15_20_asim++;
                } else if (estilosAprendizaje[i].ea > 20) {
                    _ea_20_25_asim++;
                }
                //ec
                if (estilosAprendizaje[i].ec <= 14) {
                    _ec_9_14_asim++;
                } else if (estilosAprendizaje[i].ec > 14 && estilosAprendizaje[i].ec <= 20) {
                    _ec_15_20_asim++;
                } else if (estilosAprendizaje[i].ec > 20) {
                    _ec_20_25_asim++;
                }
                break;
            case "ACOMODADOR": contadorAcom++;
                if (estilosAprendizaje[i].ca <= 14) {
                    _ca_9_14_acom++;
                } else if (estilosAprendizaje[i].ca > 14 && estilosAprendizaje <= 20) {
                    _ca_15_20_acom++;
                } else if (estilosAprendizaje[i].ca > 20) {
                    _ca_20_25_acom++;
                } //or
                if (estilosAprendizaje[i].or <= 14) {
                    _or_9_14_acom++;
                } else if (estilosAprendizaje[i].or > 14 && estilosAprendizaje[i].or <= 20) {
                    _or_15_20_acom++;
                } else if (estilosAprendizaje[i].or > 20) {
                    _or_20_25_acom++;
                }
                //ea
                if (estilosAprendizaje[i].ea <= 14) {
                    _ea_9_14_acom++;
                } else if (estilosAprendizaje[i].ea > 14 && estilosAprendizaje[i].ea <= 20) {
                    _ea_15_20_acom++;
                } else if (estilosAprendizaje[i].ea > 20) {
                    _ea_20_25_acom++;
                }
                //ec
                if (estilosAprendizaje[i].ec <= 14) {
                    _ec_9_14_acom++;
                } else if (estilosAprendizaje[i].ec > 14 && estilosAprendizaje[i].ec <= 20) {
                    _ec_15_20_acom++;
                } else if (estilosAprendizaje[i].ec > 20) {
                    _ec_20_25_acom++;
                }
                break;
            case "CONVERGENTE": contadorConver++;
                if (estilosAprendizaje[i].ca <= 14) {
                    _ca_9_14_conver++;
                } else if (estilosAprendizaje[i].ca > 14 && estilosAprendizaje <= 20) {
                    _ca_15_20_conver++;
                } else if (estilosAprendizaje[i].ca > 20) {
                    _ca_20_25_conver++;
                }
                //or
                if (estilosAprendizaje[i].or <= 14) {
                    _or_9_14_conver++;
                } else if (estilosAprendizaje[i].or > 14 && estilosAprendizaje[i].or <= 20) {
                    _or_15_20_conver++;
                } else if (estilosAprendizaje[i].or > 20) {
                    _or_20_25_conver++;
                }
                //ea
                if (estilosAprendizaje[i].ea <= 14) {
                    _ea_9_14_conver++;
                } else if (estilosAprendizaje[i].ea > 14 && estilosAprendizaje[i].ea <= 20) {
                    _ea_15_20_conver++;
                } else if (estilosAprendizaje[i].ea > 20) {
                    _ea_20_25_conver++;
                }
                //ec
                if (estilosAprendizaje[i].ec <= 14) {
                    _ec_9_14_conver++;
                } else if (estilosAprendizaje[i].ec > 14 && estilosAprendizaje[i].ec <= 20) {
                    _ec_15_20_conver++;
                } else if (estilosAprendizaje[i].ec > 20) {
                    _ec_20_25_conver++;
                }
                break;
            case "DIVERGENTE": contadorDiver++;
                //ca
                if (estilosAprendizaje[i].ca <= 14) {
                    _ca_9_14_diver++;
                } else if (estilosAprendizaje[i].ca > 14 && estilosAprendizaje[i].ca <= 20) {
                    _ca_15_20_diver++;
                } else if (estilosAprendizaje[i].ca > 20) {
                    _ca_20_25_diver++;
                }
                //or
                if (estilosAprendizaje[i].or <= 14) {
                    _or_9_14_diver++;
                } else if (estilosAprendizaje[i].or > 14 && estilosAprendizaje[i].or <= 20) {
                    _or_15_20_diver++;
                } else if (estilosAprendizaje[i].or > 20) {
                    _or_20_25_diver++;
                }
                //ea
                if (estilosAprendizaje[i].ea <= 14) {
                    _ea_9_14_diver++;
                } else if (estilosAprendizaje[i].ea > 14 && estilosAprendizaje[i].ea <= 20) {
                    _ea_15_20_diver++;
                } else if (estilosAprendizaje[i].ea > 20) {
                    _ea_20_25_diver++;
                }
                //ec
                if (estilosAprendizaje[i].ec <= 14) {
                    _ec_9_14_diver++;
                } else if (estilosAprendizaje[i].ec > 14 && estilosAprendizaje[i].ec <= 20) {
                    _ec_15_20_diver++;
                } else if (estilosAprendizaje[i].ec > 20) {
                    _ec_20_25_diver++;
                }
                break;
        }
    }/* Fin del for i*/


    //ec-----
    if (ec <= 14) {
        _ec_conver = (_ec_9_14_conver + (m * _ec)) / (n + m);
        _ec_diver = (_ec_9_14_diver + (m * _ec)) / (n + m);
        _ec_acom = (_ec_9_14_acom + (m * 4)) / (n + m);
        _ec_asim = (_ec_9_14_asim + (m * 4)) / (n + m);
    } else if (ec > 14 && ec <= 20) {
        _ec_conver = (_ec_15_20_conver + (m * 4)) / (n + m);
        _ec_diver = (_ec_15_20_diver + (m * 4)) / (n + m);
        _ec_acom = (_ec_15_20_acom + (m * 4)) / (n + m);
        _ec_asim = (_ec_15_20_asim + (m * 4)) / (n + m);
    } if (ec > 20) {
        _ec_conver = (_ec_20_25_conver + (m * 4)) / (n + m);
        _ec_diver = (_ec_20_25_diver + (m * 4)) / (n + m);
        _ec_acom = (_ec_20_25_acom + (m * 4)) / (n + m);
        _ec_asim = _(ec_20_25_asim + (m * 4)) / (n + m);

    }//---ec
    //ea-----
    if (ea <= 14) {
        _ea_conver = (_ea_9_14_conver + (m * _ea)) / (n + m);
        _ea_diver = (_ea_9_14_diver + (m * _ea)) / (n + m);
        _ea_acom = (_ea_9_14_acom + (m * _ea)) / (n + m);
        _ea_asim = (_ea_9_14_asim + (m * _ea)) / (n + m);
    } else if (ea > 14 && ec <= 20) {
        _ea_conver = (_ea_15_20_conver + (m * _ea)) / (n + m);
        _ea_diver = (_ea_15_20_diver + (m * _ea)) / (n + m);
        _ea_acom = (_ea_15_20_acom + (m * _ea)) / (n + m);
        _ea_asim = (_ea_15_20_asim + (m * _ea)) / (n + m);
    } if (ea > 20) {
        _ea_conver = (_ea_20_25_conver + (m * _ea)) / (n + m);
        _ea_diver = (_ea_20_25_diver + (m * _ea)) / (n + m);
        _ea_acom = (_ea_20_25_acom + (m * _ea)) / (n + m);
        _ea_asim = (_ea_20_25_asim + (m * _ea)) / (n + m);
    }//---ea
    //ca--
    if (ca <= 14) {
        _ca_conver = ((_ca_9_14_conver) + (m * _ca)) / (n + m);
        _ca_diver = ((_ca_9_14_diver) + (m * _ca)) / (n + m);
        _ca_acom = ((_ca_9_14_acom) + (m * _ca)) / (n + m);
        _ca_asim = ((_ca_9_14_asim) + (m * _ca)) / (n + m);
    } else if (ca > 14 && ca <= 20) {
        _ca_conver = ((_ca_15_20_conver) + (m * _ca)) / (n + m);
        _ca_diver = ((_ca_15_20_diver) + (m * _ca)) / (n + m);
        _ca_acom = ((_ca_15_20_acom) + (m * _ca)) / (n + m);
        _ca_asim = ((_ca_15_20_asim) + (m * _ca)) / (n + m);
    } if (ca > 20) {
        _ca_conver = ((_ca_20_25_conver) + (m * _ca)) / (n + m);
        _ca_diver = ((_ca_20_25_diver) + (m * _ca)) / (n + m);
        _ca_acom = ((_ca_20_25_acom) + (m * _ca)) / (n + m);
        _ca_asim = ((_ca_20_25_asim) + (m * _ca)) / (n + m);
    }//---ca

    if (or <= 14) {
        _or_conver = (_or_9_14_conver + (m * _or)) / (n + m);
        _or_diver = (_or_9_14_diver + (m * _or)) / (n + m);
        _or_acom = (_or_9_14_acom + (m * _or)) / (n + m);
        _or_asim = (_or_9_14_asim + (m * _or)) / (n + m);
    } else if (or > 14 && ec <= 20) {
        _or_conver = (_or_15_20_conver + (m * _or)) / (n + m);
        _or_diver = (_or_15_20_diver + (m * _or)) / (n + m);
        _or_acom = (_or_15_20_acom + (m * _or)) / (n + m);
        _or_asim = (_or_15_20_asim + (m * _or)) / (n + m);
    } if (or > 20) {
        _or_conver = (_or_20_25_conver + (m * _or)) / (n + m);
        _or_diver = (_or_20_25_diver + (m * _or)) / (n + m);
        _or_acom = (_or_20_25_acom + (m * _or)) / (n + m);
        _or_asim = (_or_20_25_asim + (m * _or)) / (n + m);
    }//---ea

    probab_Acom = contadorAcom / estilosAprendizaje.length;
    probab_Asim = contadorAsim / estilosAprendizaje.length;
    probab_Diver = contadorDiver / estilosAprendizaje.length;
    probab_Conver = contadorConver / estilosAprendizaje.length;
    /* 
        console.log(probab_Acom, "-", probab_Asim, "-", probab_Conver, "-", probab_Diver);
        console.log(contadorDiver, ",", contadorConver, ",", contadorAsim, ",", contadorAcom)
        console.log(_ca_9_14_diver, ",", _ca_9_14_acom, ",", _ca_9_14_asim, ",", _ca_9_14_conver)
    
    
        console.log(_ec_9_14_diver, _ec_15_20_diver, _ec_20_25_diver)
        console.log(_or_9_14_diver, _or_15_20_diver, _or_20_25_diver)
        console.log(_ea_9_14_diver, _ea_15_20_diver, _ea_20_25_diver)
        console.log("--> Diver", _ca_9_14_diver, _ca_15_20_diver, _ca_20_25_diver)
    
        console.log(_ec_9_14_conver, _ec_15_20_conver, _ec_20_25_conver)
        console.log(_or_9_14_conver, _or_15_20_conver, _or_20_25_conver)
        console.log(_ea_9_14_conver, _ea_15_20_conver, _ea_20_25_conver)
        console.log("-->Conver", _ca_9_14_conver, _ca_15_20_conver, _ca_20_25_conver)
    
        console.log(_ec_9_14_acom, _ec_15_20_acom, _ec_20_25_acom)
        console.log(_or_9_14_acom, _or_15_20_acom, _or_20_25_acom)
        console.log(_ea_9_14_acom, _ea_15_20_acom, _ea_20_25_acom)
        console.log("-->Acom", _ca_9_14_acom, _ca_15_20_acom, _ca_20_25_acom)
    
        console.log(_ec_9_14_asim, _ec_15_20_asim, _ec_20_25_asim)
        console.log(_or_9_14_asim, _or_15_20_asim, _or_20_25_asim)
        console.log(_ea_9_14_asim, _ea_15_20_asim, _ea_20_25_asim)
        console.log("-->Asim", _ca_9_14_asim, _ca_15_20_asim, _ca_20_25_asim)
    
        console.log("Probs ca: ", _ca_diver, "%", _ca_acom, "%", _ca_conver, "%", _ca_asim, "%")
        console.log("Probs ea: ", _ea_diver, "%", _ea_acom, "%", _ea_conver, "%", _ea_asim, "%")
        console.log("Probs ec: ", _ec_diver, "%", _ec_acom, "%", _ec_conver, "%", _ec_asim, "%")
        console.log("Probs or: ", _or_diver, "%", _or_acom, "%", _or_conver, "%", _or_asim, "%")
        probab_Diver = _ca_diver * _ea_diver * _ec_diver * _or_diver;
        probab_Conver = _ca_conver * _ea_conver * _ec_conver * _or_conver;
        probab_Acom = _ca_acom * _ea_acom * _ec_acom * _or_acom;
        probab_Asim = _ca_asim * _ea_asim * _ec_asim * _or_asim;
    
        console.log("Probs:", "Diver->", probab_Diver, "Conver->", probab_Conver, "Asim->", probab_Asim, "Acom->", probab_Acom)
        */
    arrprob = [probab_Diver, probab_Conver, probab_Asim, probab_Acom];
    arrNameProb = ["Divergente", "Convergente", "Asimilador", "Acomodador"]
    probMayor = 0;
    for (j = 0; j < arrprob.length; j++) {
        if (arrprob[j] > probMayor) {
            nameForPrint = arrNameProb[j];
            probMayor = arrprob[j];
        }
    }//determinar probabilidad mayor
    document.getElementById('mensaje').innerHTML = 'Su estilo de aprendizaje es: ' + nameForPrint + '.';

}


