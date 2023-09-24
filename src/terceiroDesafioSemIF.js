class hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      const skills = {
        Mago: "Magia",
        Guerreiro: "Espada",
        Monge: "Artes Marciais",
        Ninja: "Shuriken",
      };
  
      const skill = skills[this.type] || "Habilidade desconhecida";
  
      console.log(`O ${this.type} atacou usando ${skill}`);
    }
  }
  
  let heroi1 = new hero("Geilson", 25, "Mago");
  let heroi2 = new hero("Gabriel Tioda", 23, "Guerreiro");
  let heroi3 = new hero("Gabriel Almeida", 24, "Monge");
  let heroi4 = new hero("Jean", 28, "Ninja");
  
  const herois = [heroi1, heroi2, heroi3, heroi4];
  
  for (let i = 0; i < herois.length; i++) {
    herois[i].attack();
  }
  