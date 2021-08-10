// forma padrão

function handleMouseMove(event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  console.log(clientX, clientY);
}

// Mas também podemos fazer da seguinte maneira

function handleMouserMove(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

// ou se preferir

function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

// podemos também desestruturar arrays

const frutas = ["Maçã", "Pêra"];
const [fruta1, fruta2] = frutas;

// fruta1 = Maçã
// fruta2 = Pêra

// React hooks

const useState = [
  "blue",
  function (color) {
    useState[0] = color;
  },
];

const [color, setColor] = useState;

setColor("Vermelho");
