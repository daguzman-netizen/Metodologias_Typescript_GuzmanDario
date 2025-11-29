class Banco {
    depositar(saldo: number, monto: number): number {
        return saldo + monto;
    }

    retirar(saldo: number, monto: number): number {
        if (monto > saldo) {
            throw new Error("Fondos insuficientes");
        }
        return saldo - monto;
    }
    transferir(saldoOrigen: number, monto: number): number {
        if (monto > saldoOrigen) {
            throw new Error("No se puede transferir más del saldo disponible");
        }
        return saldoOrigen - monto;
    }
}

const banco = new Banco();

let saldoCuenta = 500;
saldoCuenta = banco.depositar(saldoCuenta, 200);
saldoCuenta = banco.retirar(saldoCuenta, 100);
saldoCuenta = banco.transferir(saldoCuenta, 50);

console.log("Saldo final:", saldoCuenta);
