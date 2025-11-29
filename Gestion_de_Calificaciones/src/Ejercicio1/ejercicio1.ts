class Estudiante {

    // Agregar una nueva nota y recalcular el promedio
    agregarNota(promedio: number, nuevaNota: number): number {
        return (promedio + nuevaNota) / 2;
    }

    // Verificar si aprueba
    aprobar(nota: number, minima: number): boolean {
        return nota >= minima;
    }

    // Calcular total de faltas acumuladas
    calcularFaltas(faltasActuales: number, nuevas: number): number {
        return faltasActuales + nuevas;
    }
}

const alumno = new Estudiante();

let promedioActual = 9;
promedioActual = alumno.agregarNota(promedioActual, 10);
const aprobado = alumno.aprobar(promedioActual, 7); 
let faltas = 3;
faltas = alumno.calcularFaltas(faltas, 2);
console.log("Promedio final:", promedioActual);
console.log("¿Aprobado?:", aprobado);
console.log("Faltas totales:", faltas);
