// Spread em Arrays

const numeros = [1, 3, 9, 18, 30, 45];
Math.max(...numeros); // retorna 45

// Transformando nodeList em array

const items = document.querySelectorAll("li");

// Ao tentar aplicar a função map() em uma node list
// voce nao conseguiria ja que é algo apenas de arrays
// para isso voce pode usar o spread, que passara todos os items
// da arrayLike pelo qual desejo utilizar map

[...items].map((item) => (item.innerText = "Teste"));

// Objetos

const carro = {
  cor: "azul",
  portas: 4,
  ano: 2020,
};

const cloneCarro = { ...carro }; // retorna o cloneCarro com todas as propriedades de carro
const carroEsportivo = { turbo: true, ...carro }; // retorna todas as propriedades de carro mais o turbo

// Clonagem

class Transporte {
  constructor() {
    this.terrestre = true;
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const meuCarro = new Carro("vermelho", 4);

// Shallow Clone
const cloneCarro = { ...meuCarro };
