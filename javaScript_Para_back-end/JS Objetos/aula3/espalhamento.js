const cliente = {
    nome:"carlos",
    idade: 20,
    email: "cp193116@gmail.com",
    telefone: ["436623456245", "64778989787"],
};

cliente.enderecos = [
    {
        rua: "R. Antonieta dell agnolo parize",
        numero: 51,
        apartamento: false,
        complemento: "Casa",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

//Ou usando "spread operator" sintaxe de espalhamento
ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);

//JSON: Java Script Object Notation / Notação de objeto Java-Script
