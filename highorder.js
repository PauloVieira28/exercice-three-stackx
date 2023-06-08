// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(array) {
    // Sua implementação aqui
    return array.filter(num => num * 2 === 0);
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(array) {
    // Sua implementação aqui
    return array.reduce((total, num) => total + num, 0);
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(array) {
    // Sua implementação aqui
    return array.map(num => num % 2);
}

module.exports = {
    dobrarNumeros,
    somarValores,
    filtrarPares
};
