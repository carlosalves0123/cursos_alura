//tipo Number

const num1 = 3;
const num2 = 5;

const soma = num1 * num2;

console.log(soma);

//NaN -> Not A Number(não é um número)


// Tipo string

const texto1 = "Olá";
const texto2 = "Tudo Bem?";

//Concatenação (+)

const citacao = "Meu nome é "
const meuNome = "Carlos"
console.log(citacao + meuNome);

const cifrao = '/u0024';
console.log(cifrao);

//Arrow Function

const apresentaArrow = nome => `meu nome é ${nome}`;

const soma1 = (nume1, nume2) => nume1 + num2;

const somaNumerosPerquenos = (N1, N2) => {
    if(N1 > 10 || N2 > 10){
        return "Somente números de 1 a 9";
    }else {
        return N1 + N2;
    }

}

