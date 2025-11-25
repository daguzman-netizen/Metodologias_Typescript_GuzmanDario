// ===============================
// Actividad 3: Encapsulación
// ===============================
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        this.saldo = saldoInicial;
    }
    CuentaBancaria.prototype.depositar = function (monto) {
        if (monto <= 0) {
            console.log("El monto debe ser mayor que cero.");
            return;
        }
        this.saldo += monto;
        console.log("Dep\u00F3sito realizado: +$".concat(monto));
    };
    CuentaBancaria.prototype.mostrarSaldo = function () {
        console.log("Saldo actual: $".concat(this.saldo));
    };
    return CuentaBancaria;
}());
console.log("=== Actividad 3: Cuenta Bancaria ===");
var cuenta = new CuentaBancaria(100);
cuenta.depositar(50);
cuenta.mostrarSaldo();
