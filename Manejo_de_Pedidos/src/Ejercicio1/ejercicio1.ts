class Restaurante {

    calcularTotal(precio: number, cantidad: number): number {
        return precio * cantidad;
    }

    aplicarDescuento(total: number, descuento: number): number {
        return total - (total * descuento / 100);
    }

    calcularPropina(total: number, porcentaje: number): number {
        return total * (porcentaje / 100);
    }
}

// Ejemplo
const rest = new Restaurante();

const total = rest.calcularTotal(12.5, 3); // 37.5
const totalConDescuento = rest.aplicarDescuento(total, 10); // 33.75
const propina = rest.calcularPropina(totalConDescuento, 15); // 5.06

console.log("Total:", total);
console.log("Con descuento:", totalConDescuento);
console.log("Propina:", propina);
