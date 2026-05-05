var alunos = [
    { "nome": "Maria Joaquinha", "notas": [8, 7.5, 9], "curso": "Sistemas para Internet" },
    { "nome": "Joao Ricardo", "notas": [8, 8.5, 5], "curso": "Direito" },
    { "nome": "Jose Henrique", "notas": [4, 10, 7], "curso": "Administracao" },
    { "nome": "Pedro da Silva", "notas": [6, 7.6, 7.5], "curso": "Sistemas para Internet" },
    { "nome": "Silvana Morais", "notas": [6, 7.5, 9.5], "curso": "Sistemas de Informacao" },
    { "nome": "Patricia Castro", "notas": [1, 9, 10], "curso": "Arquitetura" },
    { "nome": "Joana Ribeiro", "notas": [8, 9, 9], "curso": "Contabilidade" },
    { "nome": "Rafael Rocha", "notas": [4, 4, 9], "curso": "Sistemas para Internet" },
    { "nome": "Gustavo Henrique", "notas": [8, 7.5, 5], "curso": "Sistemas para Internet" }
];

function imprimirAlunos(alunos) {
    for (var i = 0; i < alunos.length; i++) {
        var aluno = alunos[i];
        var soma = 0;

        for (var j = 0; j < aluno.notas.length; j++) {
            soma += aluno.notas[j];
        }

        var media = soma / 3;

        if (media >= 7) {
            console.log("Nome: " + aluno.nome);
            console.log("Media: " + media.toFixed(2));
            console.log("Curso: " + aluno.curso);
            console.log("---");
        }
    }

}

imprimirAlunos(alunos);