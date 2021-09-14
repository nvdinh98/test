class Animal{
    constructor(_name,_weight) {
        this.name = _name;
        this.weight = _weight;
    }
    setName(_name) {
        this.name = _name;
    }
    setWeight(_weight) {
        this.weight = _weight;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return " Nhân vật tên là : " + this.name + "cân nặng là :" + this.weight;
    }
}

let objAnimal1 = new Animal("Elephant",45,6)
let objAnimal2 = new Animal("jery",20)


let a = objAnimal1.toString()
document.writeln(a + "<br>")

objAnimal2.setName("mouse")
document.writeln(objAnimal2)




