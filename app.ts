import prompt from 'prompt-sync';
import { Diarista } from './src/diarista/diarista.js';
import { DiaristaRepository } from './src/diarista/diarista.repository.js';

let teclado = prompt();
let option;
let repository = new DiaristaRepository();
let id = '';

do {
    console.log('1 - Listar Diaristas');
    console.log('2 - Exibir Diarista');
    console.log('3 - Cadastrar Diaristas');
    console.log('4 - Excluir Diarista');
    console.log('q - Sair');
    option = teclado("Escolha uma Opção acima: ");

    switch (option) {
        case '1':
            let diaristas = repository.listar();
            diaristas.forEach(diarista => console.log(`ID: ${diarista.id} - Nome: ${diarista.nome}`));
            break;
        case '2':
            id = teclado("Digite o ID do(a) diarista que deseja exibir: ");
            console.log(repository.exibir(+id));
            break;
        case '3':
            let nome = teclado("Digite o nome da diarista: ");
            let telefone = teclado("Digite o telefone da diarista: ");
            let endereco = teclado("Digite o endereço da diarista: ");
            let diarista = new Diarista(nome,telefone,endereco);
            repository.cadastrar(diarista);
            break;
        case '4':
            id = teclado("Digite o ID do(a) diarista que deseja excluir: ");
            repository.excluir(+id);
            break;
        default:
            break;
    }

} while (option != 'q')

