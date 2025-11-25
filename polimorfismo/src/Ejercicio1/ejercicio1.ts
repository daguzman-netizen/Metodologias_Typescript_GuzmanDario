class Animal {
    sonar(): void {
        console.log("El animal hace un sonido...");
    }
}

class Perro extends Animal {
    sonar(): void {
        console.log("El perro ladra: ¡Guau guau!");
    }
}

class Gato extends Animal {
    sonar(): void {
        console.log("El gato maúlla: ¡Miau!");
    }
}

console.log("\n=== Actividad 4: Polimorfismo ===");
const animales: Animal[] = [new Perro(), new Gato(), new Animal()];
animales.forEach(animal => animal.sonar());