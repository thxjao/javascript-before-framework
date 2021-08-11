async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos("https://ranekapi.origamid.dev/wp-json/api/produto");
