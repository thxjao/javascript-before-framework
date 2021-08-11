// Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
  .then((reponse) => reponse.json())
  .then((json) => {
    console.log(json);
  });
