var n1 = 82;
var n2 = 27;
var op = "potencia";

function somaNumeros() {

    if (op == "+") {
        return (n1 + n1);
    }
    if (op == "-") {
        return (n1 - n2);
    }
    if (op == "*") {
        return (n1 * n2);
    }
    if (op == "/") {
        return (n1 / n2);
    }
    if (op == "raiz") {
        return Math.sqrt((n1 + n2));
    }
    if (op == "potencia") {
        return Math.pow((n1, n2))
    }
}
console.log(somaNumeros(5, 4, "potencia"));
