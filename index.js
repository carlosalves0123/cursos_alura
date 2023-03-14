// const arrayNums = [1, 2, 3,4 ];

// function multiplicaPorDez(num) {
//  return num * 10
// }

// const arraySomada = arrayNums.map(multiplicaPorDez)

// console.log(arraySomada)

const notas = [10, 4, 6, 1, 6, 9];
notas.push(10);

let soma = 0;

notas.forEach(nota => {
    soma += nota;
});

let media = soma / notas.length;

console.log(`A media desse aluno é ${media}`);
