import pokemonApi from "../api/pokemonApi";

// random integer between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPokemons = () => {

    let pokemons = []
    
    // Execute 4 times the generation of a random number
    for (let index = 0; index < 4; index++) {
        let pok = 0

        do {
            // random number from 1 to 650
            pok = getRandomInt(1, 650)
        } while (pokemons.includes(pok)) 
        // if the number already exists in pokemons array it will generate again

        //add generated number to pokemons array
        pokemons.push(pok)
    }

    return pokemons
}

const getPokemonOptions = async () => {
    const idPokemons = getPokemons()
    const pokemons = await getPokemonNames(idPokemons)
    return pokemons
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    const promises = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]

    const [r1, r2, r3, r4] = await Promise.all(promises)
    
    return [
        {id: r1.data.id, name: r1.data.name},
        {id: r2.data.id, name: r2.data.name},
        {id: r3.data.id, name: r3.data.name},
        {id: r4.data.id, name: r4.data.name}
    ]
}

export default getPokemonOptions