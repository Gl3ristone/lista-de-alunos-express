const express = require('express');
const app = express();

const maIFia = [
    {id: 1, nome: 'Matheus Henrique', idade: 17, especialidade: 'Balatro e "Programas..."'},
    {id: 2, nome: 'Paz', idade: 16, especialidade: 'Furries e Limbus Company'},
    {id: 3, nome: 'Renan', idade: 17, especialidade: 'Mechas e Dandadan'},
    {id: 4, nome: 'Tomé', idade: 16, especialidade: 'Femboys e formigas'},
    {id: 5, nome: 'Davi', idade: 17, especialidade: 'JoJo e Undertale'},
    {id: 6, nome: 'Matheus Luciano', idade: 17, especialidade: 'Desenhar e Peixes'},
    {id: 7, nome: 'Pedro', idade: 17, especialidade: 'basquete e bomba'},
    {id: 8, nome: 'Romulo', idade: 17, especialidade: 'Silksong e DnD'},
    {id: 9, nome: 'Amanda', idade: 16, especialidade: 'Jiu-Jitsu e Argentina'},
    {id: 10, nome: 'Juan', idade: 17, especialidade: 'São Paulo e Deltarune'},
    {id: 11, nome: 'Marcelino', idade: 18, especialidade: 'Clash Royake e atrasar'},
    {id: 12, nome: 'João Guilherme', idade: 17, especialidade: 'Matemática e Correr'},
    {id: 13, nome: 'Matheus Félix', idade: 17, especialidade: 'Crianças e Germania'},
    {id: 14, nome: 'Cecília', idade: 18, especialidade: 'Furries e Sapequices lésbicas'},
    {id: 15, nome: 'Feliciano', idade: 10000000000, especialidade: 'Escuridão e Trabalho'}
];

app.get('/', (req, res) => {
    res.send('EITAAAAAAA PIAAAAO TA FUNCIONANDOIIIIIIIII');
});

app.get('/maIFia/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let estudante = null;

    for (let i = 0; i < maIFia.length; i++) {
        if (maIFia[i].id === id) {
            estudante = maIFia[i];
            break;
        }
    }

    if (estudante) {
        res.send(
            'Nome: ' + estudante.nome + '<br>' +
            'Idade: ' + estudante.idade + '<br>' +
            'E SUA ESPECIALIDADES: ' + estudante.especialidade
        );
    } else {
        res.send('Não foi encontrado o maIFia com o ID: ' + id);
    }
});

app.listen(3000, () => {
    console.log('Busque pelos alunos usando http://localhost:3000/maIFia/3');
});
