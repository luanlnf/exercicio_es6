const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 6.5, bolsista: false },
    { nome: 'Ana', nota: 7.1, bolsista: true },
    { nome: 'Guilherme', nota: 6.1, bolsista: false },
    { nome: 'Alvin', nota: 5.9, bolsista: false },
    { nome: 'Eduardo', nota: 9.0, bolsista: true },
    { nome: 'Nathan', nota: 5.5, bolsista: false }
];

// Filtra os alunos aprovados (nota >= 6)
const alunosAprovados = () => alunos.filter(aluno => aluno.nota >= 6);

// Filtra os alunos reprovados (nota < 6)
const alunosReprovados = () => alunos.filter(aluno => aluno.nota < 6);

// Filtra os alunos bolsistas
const alunosBolsistas = () => alunos.filter(aluno => aluno.bolsista);

// Filtra os alunos não bolsistas
const alunosNaoBolsistas = () => alunos.filter(aluno => !aluno.bolsista);

// Exibe os resultados
const exibirResultados = () => {
    const aprovados = alunosAprovados();
    const reprovados = alunosReprovados();
    const bolsistas = alunosBolsistas();
    const naoBolsistas = alunosNaoBolsistas();

    console.log("Aprovados:");
    aprovados.forEach(aluno => {
        console.log(`${aluno.nome}: Aprovado com nota ${aluno.nota}`);
    });

    console.log("\nReprovados:");
    reprovados.forEach(aluno => {
        console.log(`${aluno.nome}: Reprovado com nota ${aluno.nota}`);
    });

    console.log("\nBolsistas:");
    bolsistas.forEach(aluno => {
        console.log(`${aluno.nome}: É bolsista`);
    });

    console.log("\nNão Bolsistas:");
    naoBolsistas.forEach(aluno => {
        console.log(`${aluno.nome}: Não é bolsista`);
    });
}

// Exibir os resultados
exibirResultados();


