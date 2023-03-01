const dados = require("./cliente.json");
console.log(dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString)

//Parse: traduzir, vai ler a String e vai tentar montar de volta o objeto
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);