function restriccionCaracteres(string) {
    var out = '';
    var filtro = '1234567890,';

    for (var i = 0; i < string.length; i++){
        if (filtro.indexOf(string.charAt(i)) !== -1){
            out += string.charAt(i);
        }/* Fin del if, que verifica si cada caracter ingresado por el usuario cada
        * vez que digita es permitido */
    } /* Fin del for i que itera todos los caracteres que posea en el momento el
    * campo de texto y verifica si es permitido, comparandolo con la cadena de caracteres
    * permitidos. */
    return out;
}/*Fin de la funcion restriccionCaracteres, donde se restringue en el respectivo
input text que sólo se puedan ingresar numeros y una coma, esto para llevar un
control del formato del promedio ponderado de matrícula. */