


function determinarTipoProfesor(profesores) {
    var resultado = 100000;
    var numeroTupla = 0;

    var generoTupla = 0, autoEvaluacionTupla = 0, disciplinaTupla = 0,
        pcTupla = 0, habWebTupla = 0, expWebTupla = 0, clasWebTupla = 0

    classTupla1 = 0;
    classTupla2 = 0;
    classTupla3 = 0;

    hTupla1Beg = 0;
    hTupla2Beg = 0;
    hTupla3Beg = 0;

    var edad1Beg = 0, edad2Beg = 0, edad3Beg = 0;
    var edad1Inter = 0, edad2Inter = 0, edad3Inter = 0;
    var edad1Adv = 0, edad2adv = 0, edad3adv = 0;
    var cantidad1Beg = 0, cantidad2Beg = 0, cantidad3Beg = 0;
    var cantidad1Inter = 0, cantidad2Inter = 0, cantidad3Inter = 0;
    var cantidad1Adv = 0, cantidad2Adv = 0, cantidad3Adv = 0;
    //Genero
    gFTuplaBeg = 0;
    gFTuplaInter = 0;
    gFTuplaAdv = 0;
    gMTuplaIBeg = 0;
    gMTuplaInter = 0;
    gMTuplaAdv = 0;
    gNATuplaBeg = 0;
    gNATuplaInter = 0;
    gNATuplaAdv = 0;
    //Genero
    //autoEval
    autoEvaluacionTupla_B_Beginner = 0;
    autoEvaluacionTupla_B_Inter = 0;
    autoEvaluacionTupla_B_Adv = 0;
    autoEvaluacionTupla_A_Beginner = 0;
    autoEvaluacionTupla_A_Inter = 0;
    autoEvaluacionTupla_A_Adv = 0;
    autoEvaluacionTupla_I_Beginner = 0;
    autoEvaluacionTupla_I_Inter = 0;
    autoEvaluacionTupla_I_Adv = 0;
    //auto
    //Disciplina
    disciplinaTupla_DM_Begg_ = 0;
    disciplinaTupla_ND_Begg_ = 0;
    disciplinaTupla_o_Begg_ = 0;
    disciplinaTupla_DM_Inter = 0;
    disciplinaTupla_ND_Inter = 0;
    disciplinaTupla_o_Inter = 0;
    disciplinaTupla_DM_Adv = 0;
    disciplinaTupla_ND_Adv = 0;
    disciplinaTupla_o_Adv = 0;
    //Disciplina
    //habiliad pc
    pc_L_Begg = 0;
    pc_A_Begg = 0;
    pc_H_Begg = 0;
    pc_L_Inter = 0;
    pc_A_Inter = 0;
    pc_H_Inter = 0;
    pc_L_Adv = 0;
    pc_A_Adv = 0;
    pc_H_Adv = 0;
    //hab_pc
    //hab_web
    hab_N_web_Begg = 0;
    hab_S_web_Begg = 0;
    hab_O_web_Begg = 0;
    hab_N_web_Inter = 0;
    hab_S_web_Inter = 0;
    hab_O_web_Inter = 0;
    hab_N_web_Adv = 0;
    hab_S_web_Adv = 0;
    hab_O_web_Adv = 0;
    //hab web
    //ExpWeb
    exp_N_Begg = 0;
    exp_S_Begg = 0;
    exp_O_Begg = 0;
    exp_N_Inter = 0;
    exp_S_Inter = 0;
    exp_O_Inter = 0;
    exp_N_Adv = 0;
    exp_S_Adv = 0;
    exp_O_Adv = 0;
    //





    var arrTeach = new Array();
    for (var i = 0; i < profesores.length; i++) {

        switch (profesores[i].clase) {
            case "Beginner": clasWebTupla = 1;
                classTupla1 = classTupla1 + 1 / (20);

                break;
            case "Intermediate": clasWebTupla = 2;
                classTupla2 = classTupla2 + 1 / (20);
                break;
            case "Advanced": clasWebTupla = 3;
                classTupla3 = classTupla3 + 1 / (20);
                break;
        }

        if (clasWebTupla == 1) {
            var clasTuplaProb = classTupla1;
            switch (profesores[i].a) {
                case "1": edadTupla = 1;
                    edad1Beg++;
                    break;
                case "2": edadTupla = 2;
                    edad2Beg++;
                    break;
                case "3": edadTupla = 3;
                    edad3Beg++;
                    break;
            }
            switch (profesores[i].d) {
                case "1": cantidadTupla = 1;
                    cantidad1Beg++;
                    break;
                case "2": cantidadTupla = 2;
                    cantidad2Beg++;
                    break;
                case "3": cantidadTupla = 3;
                    cantidad3Beg++;
                    break;
            }
            switch (profesores[i].b) {
                case "F": generoTupla = 1;
                    gFTuplaBeg++;
                    break;
                case "M": generoTupla = 2;
                    gMTuplaIBeg++;
                    break;
                case "NA": generoTupla = 3;
                    gNATuplaBeg++;
                    break;
            }
            switch (profesores[i].c) {
                case "B": autoEvaluacionTupla = 1;
                    autoEvaluacionTupla_B_Beginner++;
                    break;
                case "I": autoEvaluacionTupla = 2;
                    autoEvaluacionTupla_I_Beginner++;
                    break;
                case "A": autoEvaluacionTupla = 3;
                    autoEvaluacionTupla_A_Beginner++;
                    break;
            }
            switch (profesores[i].e) {
                case "DM": disciplinaTupla = 1;
                    disciplinaTupla_DM_Begg_++;

                    break;
                case "ND": disciplinaTupla = 2;
                    disciplinaTupla_ND_Begg_++;

                    break;
                case "O": disciplinaTupla = 3;
                    disciplinaTupla_o_Begg_++;
                    break;
            }
            switch (profesores[i].f) {
                case "L": pcTupla = 1;
                    pc_L_Begg++;

                    break;
                case "A": pcTupla = 2;
                    pc_A_Begg++;
                    break;
                case "H": pcTupla = 3;
                    pc_H_Begg++;
                    break;
            }
            switch (profesores[i].g) {
                case "N": habWebTupla = 1;
                    hab_N_web_Begg++;
                    break;
                case "S": habWebTupla = 2;
                    hab_S_web_Begg++;
                    break;
                case "O": habWebTupla = 3;
                    hab_O_web_Begg++;
                    break;
            }

            switch (profesores[i].h) {
                case "N": expWebTupla = 1;
                    exp_N_Begg++;
                    break;
                case "S": expWebTupla = 2;
                    exp_S_Begg++;
                    break;
                case "O": expWebTupla = 3;
                    exp_O_Begg++;
                    break;
            }
            arrTeach.push(new Object({
                generoTupla, clasWebTupla, expWebTupla, habWebTupla, pcTupla, disciplinaTupla, autoEvaluacionTupla, clasTuplaProb, edadTupla
            }));
        }
        //Intermediate
        if (clasWebTupla == 2) {
            var clasTuplaProb = classTupla2;
            var edadTupla = parseInt(profesores[i].a)
            switch (profesores[i].a) {
                case "1": edadTupla = 1;
                    edad1Inter++;
                    break;
                case "2": edadTupla = 2;
                    edad2Inter++;
                    break;
                case "3": edadTupla = 3;
                    edad3Inter++;
                    break;
            }
            switch (profesores[i].d) {
                case "1": cantidadTupla = 1;
                    cantidad1Inter++;
                    break;
                case "2": cantidadTupla = 2;
                    cantidad2Inter++;
                    break;
                case "3": cantidadTupla = 3;
                    cantidad3Inter++;
                    break;
            }
            switch (profesores[i].b) {
                case "F": generoTupla = 1;
                    gFTuplaInter++;
                    break;
                case "M": generoTupla = 2;
                    gMTuplaInter++;
                    break;
                case "NA": generoTupla = 3;
                    gNATuplaInter++;
                    break;
            }

            switch (profesores[i].c) {
                case "B": autoEvaluacionTupla = 1;
                    autoEvaluacionTupla_B_Inter++;
                    break;
                case "I": autoEvaluacionTupla = 2;
                    autoEvaluacionTupla_I_Inter++;
                    break;
                case "A": autoEvaluacionTupla = 3;
                    autoEvaluacionTupla_A_Inter++;
                    break;
            }
            switch (profesores[i].e) {
                case "DM": disciplinaTupla = 1;
                    disciplinaTupla_DM_Inter++;

                    break;
                case "ND": disciplinaTupla = 2;
                    disciplinaTupla_ND_Inter++;

                    break;
                case "O": disciplinaTupla = 3;
                    disciplinaTupla_o_Inter++;
                    break;
            }
            switch (profesores[i].f) {
                case "L": pcTupla = 1;
                    pc_L_Inter++;

                    break;
                case "A": pcTupla = 2;
                    pc_A_Inter++;
                    break;
                case "H": pcTupla = 3;
                    pc_H_Inter++;
                    break;
            }
            switch (profesores[i].g) {
                case "N": habWebTupla = 1;
                    hab_N_web_Inter++;
                    break;
                case "S": habWebTupla = 2;
                    hab_S_web_Inter++;
                    break;
                case "O": habWebTupla = 3;
                    hab_O_web_Inter++;
                    break;
            }
            switch (profesores[i].h) {
                case "N": expWebTupla = 1;
                    exp_N_Inter++;
                    break;
                case "S": expWebTupla = 2;
                    exp_S_Inter++;
                    break;
                case "O": expWebTupla = 3;
                    exp_O_Inter++;
                    break;
            }
            arrTeach.push(new Object({
                generoTupla, clasWebTupla, expWebTupla, habWebTupla, pcTupla, disciplinaTupla, autoEvaluacionTupla, clasTuplaProb, edadTupla
            }));
        }
        //Advanced
        if (clasWebTupla == 3) {
            var clasTuplaProb = classTupla3;
            var edadTupla = parseInt(profesores[i].a);
            switch (profesores[i].a) {
                case "1": edadTupla = 1;
                    edad1Adv++;
                    break;
                case "2": edadTupla = 2;
                    edad2adv++;
                    break;
                case "3": edadTupla = 3;
                    edad3adv++;
                    break;
            }
            switch (profesores[i].d) {
                case "1": cantidadTupla = 1;
                    cantidad1Adv++;
                    break;
                case "2": cantidadTupla = 2;
                    cantidad2Adv++;
                    break;
                case "3": cantidadTupla = 3;
                    cantidad3Adv++;
                    break;
            }
            switch (profesores[i].b) {
                case "F": generoTupla = 1;
                    gFTuplaAdv++;
                    break;
                case "M": generoTupla = 2;
                    gMTuplaAdv++;
                    break;
                case "NA": generoTupla = 3;
                    gNATuplaAdv++;
                    break;
            }
            switch (profesores[i].c) {
                case "B": autoEvaluacionTupla = 1;
                    autoEvaluacionTupla_B_Adv++;
                    break;
                case "I": autoEvaluacionTupla = 2;
                    autoEvaluacionTupla_I_Adv++;
                    break;
                case "A": autoEvaluacionTupla = 3;
                    autoEvaluacionTupla_A_Adv++;
                    break;
            }
            switch (profesores[i].e) {
                case "DM": disciplinaTupla = 1;
                    disciplinaTupla_DM_Adv++;

                    break;
                case "ND": disciplinaTupla = 2;
                    disciplinaTupla_ND_Adv++;

                    break;
                case "O": disciplinaTupla = 3;
                    disciplinaTupla_o_Adv++;
                    break;
            }

            switch (profesores[i].f) {
                case "L": pcTupla = 1;
                    pc_L_Adv++;

                    break;
                case "A": pcTupla = 2;
                    pc_A_Adv++;
                    break;
                case "H": pcTupla = 3;
                    pc_H_Adv++;
                    break;
            }
            switch (profesores[i].g) {
                case "N": habWebTupla = 1;
                    hab_N_web_Adv++;
                    break;
                case "S": habWebTupla = 2;
                    hab_S_web_Adv++;
                    break;
                case "O": habWebTupla = 3;
                    hab_O_web_Adv++;
                    break;
            }
            switch (profesores[i].h) {
                case "N": expWebTupla = 1;
                    exp_N_Adv++;
                    break;
                case "S": expWebTupla = 2;
                    exp_S_Adv++;
                    break;
                case "O": expWebTupla = 3;
                    exp_O_Adv++;
                    break;
            }

            arrTeach.push(new Object({
                generoTupla, clasWebTupla, expWebTupla, habWebTupla, pcTupla, disciplinaTupla, autoEvaluacionTupla, clasTuplaProb, edadTupla
            }));
        }


        /*  arrTeach.push(new Object({
              generoTupla, clasWebTupla, expWebTupla, habWebTupla, pcTupla, disciplinaTupla, autoEvaluacionTupla,
          }));*/
        //******************* CÁLCULO DE DISTANCIA EUCLIDIANA ******************
        /*var sumatoria = Math.pow(profesores[i].a - (parseInt(document.getElementById('edad').value)), 2) +
            Math.pow(generoTupla - (parseInt(document.getElementById('genero').value)), 2) +
            Math.pow(autoEvaluacionTupla - (parseInt(document.getElementById('autoevaluacion').value)), 2) +
            Math.pow(profesores[i].d - (parseInt(document.getElementById('numeroVeces').value)), 2) +
            Math.pow(disciplinaTupla - (parseInt(document.getElementById('disciplina').value)), 2) +
            Math.pow(pcTupla - (parseInt(document.getElementById('habilidadPC').value)), 2) +
            Math.pow(habWebTupla - (parseInt(document.getElementById('habilidadWeb').value)), 2) +
            Math.pow(expWebTupla - (parseInt(document.getElementById('experienciaWeb').value)), 2);
        var distancia = Math.sqrt(sumatoria);
        // *********************************************************************

        if (resultado > distancia) {
            resultado = distancia;
            numeroTupla = i;
        }/*Fin del if*/

    }/* Fin del for i */

    probAtributo = 0.333;//En este caso todos los atributos tienen la misma probabilidad
    console.log(arrTeach);
    console.log(classTupla1);
    console.log(classTupla2);
    console.log(classTupla3);

    if (parseInt(document.getElementById('genero').value) == 2) {
        probabGenBeg = (gFTuplaBeg + (8 * probAtributo)) / (8 + 3);
        probabGenInter = (gFTuplaInter + (8 * probAtributo)) / (8 + 3);
        probabGenAdv = (gFTuplaAdv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('genero').value) == 1) {
        probabGenBeg = (gMTuplaIBeg + (8 * probAtributo)) / (8 + 3);
        probabGenInter = (gMTuplaInter + (8 * probAtributo)) / (8 + 3);
        probabGenAdv = (gMTuplaAdv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('genero').value) == 3) {
        probabGenBeg = (gNATuplaBeg + (8 * probAtributo)) / (8 + 3);
        probabGenInter = (gNATuplaBeg + (8 * probAtributo)) / (8 + 3);
        probabGenAdv = (gNATuplaAdv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob gen Beg', probabGenBeg);
    console.log('prob gen Inter', probabGenInter);
    console.log('prob gen Adv', probabGenAdv);
    if (parseInt(document.getElementById('autoevaluacion').value) == 1) {
        probabAutoEvBeg = (autoEvaluacionTupla_A_Beginner + (8 * probAtributo)) / (8 + 3);
        probabAutoEvInter = (autoEvaluacionTupla_A_Inter + (8 * probAtributo)) / (8 + 3);
        probabAutoEvAdv = (autoEvaluacionTupla_A_Adv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('autoevaluacion').value) == 2) {
        probabAutoEvBeg = (autoEvaluacionTupla_B_Beginner + (8 * probAtributo)) / (8 + 3);
        probabAutoEvInter = (autoEvaluacionTupla_B_Inter + (8 * probAtributo)) / (8 + 3);
        probabAutoEvAdv = (autoEvaluacionTupla_B_Adv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('autoevaluacion').value) == 3) {
        probabAutoEvBeg = (autoEvaluacionTupla_I_Beginner + (8 * probAtributo)) / (8 + 3);
        probabAutoEvInter = (autoEvaluacionTupla_I_Inter + (8 * probAtributo)) / (8 + 3);
        probabAutoEvAdv = (autoEvaluacionTupla_I_Adv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob autoEv Beg', probabAutoEvBeg);
    console.log('prob autoEv Inter', probabAutoEvInter);
    console.log('prob autoEv Adv', probabAutoEvAdv);
    if (parseInt(document.getElementById('disciplina').value) == 1) {
        probabDiscEvBeg = (disciplinaTupla_DM_Begg_ + (8 * probAtributo)) / (8 + 3);
        probabDiscEvInter = (disciplinaTupla_DM_Inter + (8 * probAtributo)) / (8 + 3);
        probabDiscEvAdv = (disciplinaTupla_DM_Adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('disciplina').value) == 2) {
        probabDiscEvBeg = (disciplinaTupla_ND_Begg_ + (8 * probAtributo)) / (8 + 3);
        probabDiscEvInter = (disciplinaTupla_ND_Inter + (8 * probAtributo)) / (8 + 3);
        probabDiscEvAdv = (disciplinaTupla_ND_Adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('disciplina').value) == 3) {
        probabDiscEvBeg = (disciplinaTupla_o_Begg_ + (8 * probAtributo)) / (8 + 3);
        probabDiscEvInter = (disciplinaTupla_o_Inter + (8 * probAtributo)) / (8 + 3);
        probabDiscEvAdv = (disciplinaTupla_o_Adv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob Discipline Beg', probabDiscEvBeg);
    console.log('prob Disciplina Inter', probabDiscEvInter);
    console.log('prob disciplina Adv', probabDiscEvAdv);
    if (parseInt(document.getElementById('habilidadPC').value) == 1) {
        probab_PC_Begg = (pc_A_Begg + (8 * probAtributo)) / (8 + 3);
        probab_PC_Inter = (pc_A_Inter + (8 * probAtributo)) / (8 + 3);
        probab_PC_Adv = (pc_A_Adv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('habilidadPC').value) == 2) {
        probab_PC_Begg = (pc_H_Begg + (8 * probAtributo)) / (8 + 3);
        probab_PC_Inter = (pc_H_Inter + (8 * probAtributo)) / (8 + 3);
        probab_PC_Adv = (pc_H_Adv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('habilidadPC').value) == 3) {
        probab_PC_Begg = (pc_L_Begg + (8 * probAtributo)) / (8 + 3);
        probab_PC_Inter = (pc_L_Inter + (8 * probAtributo)) / (8 + 3);
        probab_PC_Adv = (pc_L_Adv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob PC Beg', probab_PC_Begg);
    console.log('prob  PC Inter', probab_PC_Inter);
    console.log('prob Pc Adv', probab_PC_Adv);
    if (parseInt(document.getElementById('habilidadWeb').value) == 1) {
        proban_web_begg = (hab_N_web_Begg + (8 * probAtributo)) / (8 + 3);
        proban_web_Inter = (hab_N_web_Inter + (8 * probAtributo)) / (8 + 3);
        proban_web_Adv = (hab_N_web_Adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('habilidadWeb').value) == 2) {
        proban_web_begg = (hab_S_web_Begg + (8 * probAtributo)) / (8 + 3);
        proban_web_Inter = (hab_S_web_Inter + (8 * probAtributo)) / (8 + 3);
        proban_web_Adv = (hab_S_web_Adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('habilidadWeb').value) == 3) {
        proban_web_begg = (hab_O_web_Begg + (8 * probAtributo)) / (8 + 3);
        proban_web_Inter = (hab_O_web_Inter + (8 * probAtributo)) / (8 + 3);
        proban_web_Adv = (hab_O_web_Adv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob Hab web Beg', proban_web_begg);
    console.log('prob  Hab web Inter', proban_web_Inter);
    console.log('prob Hab web Adv', proban_web_Adv);
    if (parseInt(document.getElementById('experienciaWeb').value) == 1) {
        proban_exp_begg = (exp_N_Begg + (8 * probAtributo)) / (8 + 3);
        proban_exp_Inter = (exp_N_Inter + (8 * probAtributo)) / (8 + 3);
        proban_exp_Adv = (exp_N_Adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('experienciaWeb').value) == 2) {
        proban_exp_begg = (exp_S_Begg + (8 * probAtributo)) / (8 + 3);
        proban_exp_Inter = (exp_S_Inter + (8 * probAtributo)) / (8 + 3);
        proban_exp_Adv = (exp_S_Adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('experienciaWeb').value) == 3) {
        proban_exp_begg = (exp_O_Begg + (8 * probAtributo)) / (8 + 3);
        proban_exp_Inter = (exp_O_Inter + (8 * probAtributo)) / (8 + 3);
        proban_exp_Adv = (exp_O_Adv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob Exp web Beg', proban_exp_begg);
    console.log('prob  Exp web Inter', proban_exp_Inter);
    console.log('prob Exp web Adv', proban_exp_Adv);

    if (parseInt(document.getElementById('edad').value) == 1) {
        edad_probab_beg = (edad1Beg + (8 * probAtributo)) / (8 + 3);
        edad_probab_inter = (edad1Inter + (8 * probAtributo)) / (8 + 3);
        edad_probab_adv = (edad1Adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('edad').value) == 2) {
        edad_probab_beg = (edad2Beg + (8 * probAtributo)) / (8 + 3);
        edad_probab_inter = (edad2Inter + (8 * probAtributo)) / (8 + 3);
        edad_probab_adv = (edad2adv + (8 * probAtributo)) / (8 + 3);
    } if (parseInt(document.getElementById('edad').value) == 3) {
        edad_probab_beg = (edad2Beg + (8 * probAtributo)) / (8 + 3);
        edad_probab_inter = (edad2Inter + (8 * probAtributo)) / (8 + 3);
        edad_probab_adv = (edad3adv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob Edad Beg', edad_probab_beg);
    console.log('prob  edad Inter', edad_probab_inter);
    console.log('prob Edad Adv', edad_probab_adv);


    if (parseInt(document.getElementById('numeroVeces').value) == 1) {
        cant_prob_beg = (cantidad1Beg + (8 * probAtributo)) / (8 + 3);
        cant_prob_inter = (cantidad1Inter + (8 * probAtributo)) / (8 + 3);
        cant_prob_adv = (cantidad1Adv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('numeroVeces').value) == 2) {
        cant_prob_beg = (cantidad2Beg + (8 * probAtributo)) / (8 + 3);
        cant_prob_inter = (cantidad2Inter + (8 * probAtributo)) / (8 + 3);
        cant_prob_adv = (cantidad2Adv + (8 * probAtributo)) / (8 + 3);
    } else if (parseInt(document.getElementById('numeroVeces').value) == 3) {
        cant_prob_beg = (cantidad3Beg + (8 * probAtributo)) / (8 + 3);
        cant_prob_inter = (cantidad3Inter + (8 * probAtributo)) / (8 + 3);
        cant_prob_adv = (cantidad3Adv + (8 * probAtributo)) / (8 + 3);
    }
    console.log('prob cant Beg', cant_prob_beg);
    console.log('prob  cant Inter', cant_prob_inter);
    console.log('prob cant Adv', cant_prob_adv);

    probTotalBegg = cant_prob_beg * edad_probab_beg * probab_PC_Begg * proban_web_begg * probabGenBeg * probabAutoEvBeg * probabDiscEvBeg * proban_exp_begg;
    probTotalInter = cant_prob_inter * edad_probab_inter * probab_PC_Inter * proban_web_Inter * probabGenInter * probabAutoEvInter * probabDiscEvInter * proban_exp_Inter;
    probTotalAdv = cant_prob_adv * edad_probab_adv * probab_PC_Adv * proban_web_Adv * probabGenAdv * probabAutoEvAdv * probabDiscEvAdv * proban_exp_Adv;

    console.log('Prob begg', probTotalBegg)
    console.log('Prob inter', probTotalInter)
    console.log('Prob adv', probTotalAdv)

    probs = [probTotalBegg, probTotalInter, probTotalAdv]
    nomProb = ['Beginner', 'Intermediate', 'Advanced']
    propName = "";
    var probMayor = 0;
    for (k = 0; k < probs.length; k++) {
        if (probMayor < probs[k]) {
            probMayor = probs[k];
            propName = nomProb[k]
        }
        console.log(probMayor);
        console.log(propName);
    }




    //For j

    /*console.log('T1:', contaT1);
    console.log('T2:', contaT2);
    console.log('T3:', contaT3);
    */
    //genero
    /*console.log('Beginner fem', gFTuplaBeg);
    console.log('Beginner masc', gMTuplaIBeg);
    console.log('Begginer NA', gNATuplaBeg);
 
    console.log('Inter fem', gFTuplaInter);
    console.log('Inter masc', gMTuplaInter);
    console.log('Inter NA', gNATuplaInter);
 
    console.log('Adv fem', gFTuplaAdv);
    console.log('Adv masc', gMTuplaAdv);
    console.log('Adv NA', gNATuplaAdv);
    //genero
    //autoEval
    console.log('auto A begg', autoEvaluacionTupla_A_Beginner);
    console.log('auto B begg', autoEvaluacionTupla_B_Beginner);
    console.log('Auto I begg', autoEvaluacionTupla_I_Beginner);
 
    console.log('auto A inter', autoEvaluacionTupla_A_Inter);
    console.log('auto B inter', autoEvaluacionTupla_B_Inter);
    console.log('Auto I inter', autoEvaluacionTupla_I_Inter);
 
    console.log('auto A adv', autoEvaluacionTupla_A_Adv);
    console.log('auto B adv', autoEvaluacionTupla_B_Adv);
    console.log('Auto I adv', autoEvaluacionTupla_I_Adv);
    //auto Eval
    //Disciplina
    console.log('disciplina DM begg', disciplinaTupla_DM_Begg_);
    console.log('disciplina ND  begg', disciplinaTupla_ND_Begg_);
    console.log('disciplina O begg', disciplinaTupla_o_Begg_);
 
    console.log('disciplina DM inter', disciplinaTupla_DM_Inter);
    console.log('disciplina ND  inter', disciplinaTupla_ND_Inter);
    console.log('disciplina O inter', disciplinaTupla_o_Inter);
 
    console.log('disciplina DM adv', disciplinaTupla_DM_Adv);
    console.log('disciplina ND  adv', disciplinaTupla_ND_Adv);
    console.log('disciplina O adv', disciplinaTupla_o_Adv);
    //hab_pc    
    console.log('Hab L begg', pc_L_Begg);
    console.log('Hab H begg', pc_H_Begg);
    console.log('Hab A begg', pc_A_Begg);
 
    console.log('Hab L Inter', pc_L_Inter);
    console.log('Hab H Inter', pc_H_Inter);
    console.log('Hab A Inter', pc_A_Inter);
 
    console.log('Hab L begg', pc_L_Adv);
    console.log('Hab H begg', pc_H_Adv);
    console.log('Hab A begg', pc_A_Adv);
    //hab pc
    //hab_web
    console.log('Hab web N begg', hab_N_web_Begg);
    console.log('Hab web S begg', hab_S_web_Begg);
    console.log('Hab web O begg', hab_O_web_Begg);
 
    console.log('Hab web N inter', hab_N_web_Inter);
    console.log('Hab web S inter', hab_S_web_Inter);
    console.log('Hab web O inter', hab_O_web_Inter);
 
    console.log('Hab web N adv', hab_N_web_Adv);
    console.log('Hab web S adv', hab_S_web_Adv);
    console.log('Hab web O adv', hab_O_web_Adv);
    //hab_web
    //exp
    console.log('EXP web N begg', exp_N_Begg);
    console.log('EXP web S begg', exp_S_Begg);
    console.log('EXP web O begg', exp_O_Begg);
 
    console.log('EXP web N inter', exp_N_Inter);
    console.log('EXP web S inter', exp_S_Inter);
    console.log('EXP web O inter', exp_O_Inter);
 
    console.log('EXP web N adv', exp_N_Adv);
    console.log('EXP web S adv', exp_S_Adv);
    console.log('EXP web O adv', exp_O_Adv);
*/




    document.getElementById('mensaje').innerHTML = 'Estas especificaciones demuestra que el profesor es de clase: ' + propName + '.';

}/*Fin de la función determinarTipoProfeso */





