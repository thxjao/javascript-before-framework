// Modulos servem para quebrar o código
//e diferentes arquivos, para facilitar
// a organização e compartilhamento
// de código comum
// o script deve ser adcionado da seguinte maneira
// <script type="module" src="(diretorio do arquivo)"></script>

// arquivo quadrado.js

export function areaQuadrado(l) {
  return l * l;
}

export function perimetroQuadrado(l) {
  return 4 * l;
}

// importando arquivo

import { areaQuadrado, perimetroQuadrado } from "./quadrado.js";
