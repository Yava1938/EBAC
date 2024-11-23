const GetPokemones = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then((res) => res.json())
        .then((data) => {
            data.results.forEach(element => {
                console.log("nombre ", element.name)

            });
        }).catch((err) => console.log(`Error en fetch ${err}`))

}


const GetPokemonesVAxios = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon', { params: { limit: 40 } })
        .then((res) => {
            console.log("data: ", res);
            res.data.results.forEach(element => {
                console.log("nombre ", element.name)

            });

        })
}

const axios = require('https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js');

GetPokemones()
GetPokemonesVAxios()