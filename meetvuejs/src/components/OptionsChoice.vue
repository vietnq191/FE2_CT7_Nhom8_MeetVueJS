<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                <button @click="selectOption($event, pokemon.id)" :disabled="finish">{{ pokemon.name }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        },
        finish: {
            type: Boolean,
            required: true,
            default:false
        }
    },
    methods: {
        selectOption(e, idPokemon) {
            e.target.classList.add('selected')
            this.$emit('selection', idPokemon)
        }
    }

}
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
    
    button {
        background-color: white;
        border-radius: 5px;
        border: 1px solid #0e2542;
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
        padding: 5px 0;
        font-size: 1.2rem;
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: white;
    }

    button:disabled:hover {
        color: gray;
        background-color: white;
    }

    button.selected,button.selected:hover {
        background-color: #CC1842;
        color: #0e2542;
    }

    .options-container {
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
</style>