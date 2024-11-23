

class Dog {

    constructor(name, color, weight, size) {
        this.name = name;
        this.color = color;
        this.weight = weight;
        this.size = size
    }

    bark() {
        console.log("waft waft!!!");
    }

    addColor(newColor) {
        this.color.push(newColor)
    }

    showColor() {
        console.log(this.color);
    }


};

const dog = new Dog('Pablo', 'Black', '15K', 'Medium')
const dogOne = new Dog('puchi', ['Black', 'white'], '25K', 'small')
console.log("dogOne: ", JSON.stringify(dogOne));
console.log(dogOne);

dogOne.showColor()
dogOne.bark()
dogOne.addColor('pink')
dogOne.showColor()