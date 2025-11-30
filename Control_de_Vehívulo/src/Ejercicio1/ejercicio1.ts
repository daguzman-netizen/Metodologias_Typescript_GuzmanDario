class Auto {

    acelerar(velocidadActual: number, incremento: number): number {
        return velocidadActual + incremento;
    }

    frenar(velocidadActual: number, decremento: number): number {
        const nueva = velocidadActual - decremento;
        return nueva < 0 ? 0 : nueva;
    }

    recorrer(distancia: number, tiempo: number): number {
        return distancia / tiempo;
    }
}

// Ejemplo
const carro = new Auto();

let velocidad = carro.acelerar(50, 20); // 70
velocidad = carro.frenar(velocidad, 100); // 0
const media = carro.recorrer(120, 2); // 60 km/h

console.log("Velocidad actual:", velocidad);
console.log("Velocidad media:", media);

