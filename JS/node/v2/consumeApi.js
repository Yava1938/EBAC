import axios from 'axios';

export const ejecutarApi = () => {
    axios.get('https://rickandmortyapi.com/api/character')
        .then(data => console.log(data.data))
        .catch(err => console.log(err));

}