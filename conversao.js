// Converte uma string para um número inteiro
function convertToInt(string) {
    let string = "42";
    let number = parseInt(string);
}

// Converte um número inteiro para uma string
function convertToString(number) {
    let number = 42;
    let number = toString(number);
}

// Converte um valor para um booleano
function convertToBoolean(value) {
   var value = 0;
   var convertToBoolean = !!value;
}

module.exports = { convertToInt, convertToString, convertToBoolean };
