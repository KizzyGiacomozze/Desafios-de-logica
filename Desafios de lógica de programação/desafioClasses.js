class character{
    constructor(name, age, type, attack){
        this.name = name
        this.age = age
        this.type = type
        this.attack = attack
    }
    typeOfAttack(){
        if(this.type === "magician"){
            return "magic";
        } else if(this.type === "warrior"){
            return "sword";
        } else if(this.type === "monk"){
            return "martial arts"
        } else{
            return "shuriken"
        }
    }
        toString(){
            console.log(`The ${this.type} attacked using ${this.typeOfAttack()}`)
    }
}

const character1 = new character("Naruto", 18, "ninja", "powerful")
character1.toString()