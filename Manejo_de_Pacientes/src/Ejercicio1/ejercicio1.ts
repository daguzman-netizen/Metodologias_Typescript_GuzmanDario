class Hospital {

    calcularDosis(peso: number, mgPorKg: number): number {
        return peso * mgPorKg;
    }

    calcularIMC(peso: number, altura: number): number {
        return peso / (altura * altura);
    }

    registrarVisitas(visitasActuales: number, nuevas: number): number {
        return visitasActuales + nuevas;
    }
}

const hosp = new Hospital();

const dosis = hosp.calcularDosis(70, 5); // 350 mg
const imc = hosp.calcularIMC(70, 1.75); // 22.85
const visitas = hosp.registrarVisitas(4, 2); // 6

console.log("Dosis:", dosis);
console.log("IMC:", imc);
console.log("Visitas:", visitas);
