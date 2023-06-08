// Converte uma string para um número inteiro
function convertToInt(string) {
    let number = parseInt(string);
    return number;
}

// Converte um número inteiro para uma string
function convertToString(number) {
    let string = number.toString();
    return string;
}

// Converte um valor para um booleano
function convertToBoolean(value) {
   var booleanValue = !!value;
    return booleanValue;
}

module.exports = { convertToInt, convertToString, convertToBoolean };
