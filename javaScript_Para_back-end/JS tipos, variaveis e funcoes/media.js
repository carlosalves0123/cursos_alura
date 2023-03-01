/* const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

const media = somaDasNotas/notas.length;
console.log(`A média das notas é ${media}`); */

//Percorrendo matriz

/* const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media = 0;

for(let i = 0; i < notasGerais.length; i++){
    for(let j = 0; j < notasGerais[i].length; j++){
        media += notasGerais[i][j]/notasGerais[i].length;
    }
}

media = media/notasGerais.length;

console.log(media); */


// For of
/* const notas = [10, 7, 6, 9];

let somaDasNotas = 0;

for (let nota of notas){
    somaDasNotas += nota;
}

media = somaDasNotas/notas.length;

console.log(media) */

//foreach

/* const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota) {
    somaDasNotas += nota;
});

const media = somaDasNotas/notas.length;

console.log(`A média das notas é ${media}.`); */


//Função callBack é uma  função que é passada como parametro dentro de outra função


//forEach() é um método do objeto Array


//Filtrando Elementos
/* 
const alunos = ['ana', 'marcos', 'maria', 'mauro'];
const medias = [7, 4.5, 8, 7, 7.5];

const reprovado  = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
}) 

console.log(reprovado); */

/* const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0)

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A media da sala de JavaScript é ${calculaMedia(salaJS)}`); */

// usando arrow Function com uma unica linha de código

/* const notas = [43, 50, 65, 12];

const soma = notas.reduce((acumulador, nota) => nota + acumulador, 0);

console.log(soma) */

/////////////////////////////////////////////////////////

