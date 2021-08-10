function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList("Uber", "João", "Rafael");

// João, Uber
// Rafael, Uber
