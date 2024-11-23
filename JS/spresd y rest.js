//SPREAD OPERATOR
const arr = [1, 2, 3, 4]
const arr2 = [...arr, '1', "q", false]
console.log("arr2: ", arr2);

const newArray = [...arr2, true]
console.log("newArray: ", newArray);

const obj = {
    name: 'Dog',
    species: 'Perro'
}

const obj2 = {
    ...obj, age: 23,
    country: 'Mexico'
}
console.log("obj2: ", obj2);

//REST OPERATOR

const loopArr = (...ex) => {
    console.log(ex);
    for (const val of ex) {
        console.log(val);
    }
}

loopArr("Dana", "Sofia", "Aline", "Divany")