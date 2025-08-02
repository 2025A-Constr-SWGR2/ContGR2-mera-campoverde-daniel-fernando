/**
 * Función para dividir dos números
 * @param {number} a - Dividendo
 * @param {number} b - Divisor
 * @returns {number} El cociente de a / b
 * @throws {Error} Si el divisor es cero
 */
function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

module.exports = division;