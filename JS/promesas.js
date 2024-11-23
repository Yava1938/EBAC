/* const onTheParty = (JuanCame) => {
    console.log("JuanCame: ", JuanCame);
    return new Promise((resolve, reject) => {
        if (JuanCame) {
            resolve('cerveza')
        } else {
            reject('No hay cerveza 🙃')
        }
    })
}

onTheParty(true).then((value) => {
    console.log(`Tenemos ${value}`);
    return partyStared(true)
}).then(value => {
    console.log(value);
}).catch((error) => {
    console.error(error);
})

const partyStared = (started) => {
    return new Promise((resolve, reject) => {
        if (started) {
            resolve('diversion')
        } else {
            reject('aburrido')
        }
    })
} */


const apiExample = (value) => {
    return new Promise((resolve, reject) => {
        if (value === 'animal') {
            resolve('Dog')
        } else if (value === 'food') {
            resolve('pizza')
        } else {
            reject('Valor no encontrado')
        }
    })
}
/* 
apiExample('foods').then(val => {
    console.log(val);
}).catch(error => {
    console.log(error)
}) */


const asyncExample = async () => {
    try {
        const response = await apiExample('animal')
        console.log("response: ", response);
    } catch (error) {

    }
}

asyncExample()