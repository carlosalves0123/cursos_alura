const alunos = ["joão", "juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const alunos = listaDeAlunosEMedias[0];
        //buscando o indice do aluno
        const indice = alunos.indexOf(aluno);
        //buscando o valor da nota a partir do indece
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}`);

    }else {
        console.log("ALuno não encontrado");
    }
}

exibeNomeENota("joão");