class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number = 0) {
        this.saldo = saldoInicial;
    }

    depositar(monto: number): void {
        if (monto <= 0) {
            console.log("El monto debe ser mayor que cero.");
            return;
        }
        this.saldo += monto;
        console.log(`Depósito realizado: +$${monto}`);
    }

    mostrarSaldo(): void {
        console.log(`Saldo actual: $${this.saldo}`);
    }
}

console.log("=== Actividad 3: Cuenta Bancaria ===");
const cuenta = new CuentaBancaria(100);
cuenta.depositar(50);
cuenta.mostrarSaldo();