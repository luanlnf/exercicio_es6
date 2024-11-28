class Aluno {
    constructor(nome, nota, bolsista) {
        this.nome = nome;
        this.nota = nota;
        this.bolsista = bolsista;
    }

    // Método para verificar se o aluno foi aprovado
    foiAprovado() {
        return this.nota >= 6;
    }

    // Método para verificar se o aluno é bolsista
    ehBolsista() {
        return this.bolsista;
    }
}

// Criando os objetos alunos
const alunos = [
    new Aluno('João', 7.3, false),
    new Aluno('Maria', 9.2, true),
    new Aluno('Pedro', 6.5, false),
    new Aluno('Ana', 7.1, true),
    new Aluno('Guilherme', 6.1, false),
    new Aluno('Alvin', 5.9, false),
    new Aluno('Eduardo', 9.0, true),
    new Aluno('Nathan', 5.5, false)
];

// Função para filtrar os alunos aprovados
const alunosAprovados = () => alunos.filter(aluno => aluno.foiAprovado());

// Função para filtrar os alunos reprovados
const alunosReprovados = () => alunos.filter(aluno => !aluno.foiAprovado());

// Função para filtrar os alunos bolsistas
const alunosBolsistas = () => alunos.filter(aluno => aluno.ehBolsista());

// Função para filtrar os alunos não bolsistas
const alunosNaoBolsistas = () => alunos.filter(aluno => !aluno.ehBolsista());

// Função para exibir os resultados
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
