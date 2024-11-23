const axios = require('axios')

module.exports.consumirApi = () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(data => console.log(data.data))
        .catch(err => console.log(err))
}