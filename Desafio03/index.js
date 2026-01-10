class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  } 
    atacar() {
        let ataque = "";
        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'um ataque desconhecido';
        }


    console.log(`${this.tipo} atacou usando ${ataque}`);
    }   
}

const meuHeroi = new Heroi("Gandalph", 32, "mago");
meuHeroi.atacar();
