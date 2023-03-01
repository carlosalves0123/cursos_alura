const notas = [7, 7, 8, 9];

//... Operador de espalhamento do javaScript que faz uma copia do array
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);