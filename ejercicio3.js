// Laboratorio 19 - Ejercicio 3
// Autor: Mark Hancco

// Pide al usuario un ID de Pokémon y muestra en consola su name

const prompt = require('prompt-sync')();

async function obtenerNombrePokemon() {
    const id = prompt('Ingresa el ID del Pokémon: ');

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!res.ok) {
            throw new Error(`Pokémon con ID ${id} no encontrado`);
        }

        const data = await res.json();
        console.log(`Nombre: ${data.name}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

obtenerNombrePokemon();
