// a tecla CRTL + : comenta uma linha de codigo

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf:"113456855-33",
    email: "ander@gmail.com",
};

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos`);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)