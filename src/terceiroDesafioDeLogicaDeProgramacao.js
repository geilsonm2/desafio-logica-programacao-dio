class hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack(typeOfAttack) {
      if (this.type === "Mago") {
        console.log(`O ${this.type} atacou usando ${typeOfAttack}.`);
      } else if (this.type === "Guerreiro") {
        console.log(`O ${this.type} atacou usando ${typeOfAttack}.`);
      } else if (this.type === "Monge") {
        console.log(`O ${this.type} atacou usando ${typeOfAttack}.`);
      } else if (this.type === "Ninja") {
        console.log(`O ${this.type} atacou usando ${typeOfAttack}.`);
      } else {
        console.log(`Selecione um Herói dentre as opções: Mago, Guerreiro, Monge ou Ninja`);
      }
    }
  }

let heroi1 = new hero("Geilson", 25, "Mago")
let heroi2 = new hero("Gabriel Tioda", 23, "Guerreiro")
let heroi3 = new hero("Gabriel Almeida", 24, "Monge")
let heroi4 = new hero("Jean", 28, "Ninja")

heroi1.attack("Magia")
heroi2.attack("Espada")
heroi3.attack("Artes Marciais")
heroi4.attack("Shuriken")