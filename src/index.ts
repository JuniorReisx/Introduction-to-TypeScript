// ========================================
// Tipos Primitivos
// ========================================

let nome: string = 'João';
let idade: number = 27;
let casado: boolean = false;

// ========================================
// Null e Undefined
// ========================================

let minhaVar: null = null;
let minhaVar2: undefined = undefined;

// ========================================
// Any, Void e Never
// ========================================

let qualquer: any = 'Qualquer coisa';
let vazio: void;
let erro: never;

// ========================================
// Objetos e Interfaces
// ========================================

interface Pessoa {
    nome: string;
    idade: number;
}

interface Carro {
    marca: string;
}

interface Viagem {
    marca: string;
    status?: string;
}

// Criando objetos com interface Viagem
const pessoaViagem: Viagem = { marca: 'Delta Airlines' };
let pessoa2: Viagem = pessoaViagem;
pessoa2.status = 'Aprovado';

console.log(pessoaViagem);

// Criando objetos genéricos
let produto: object = { nome: 'Sabão', preco: 2.30 };

// ========================================
// Arrays e Tuplas
// ========================================

// Arrays recomendados
let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let strings: string[] = ['a', 'b', 'c'];
let infos: (string | number)[] = ['João', 27, 'Fiat', 2019];

// Arrays mistos
let arrayMisto: any[] = [1, 2, 3, 4, 5, 'JONH', true];

// Tuplas
let tupla: [string, number, boolean] = ['João', 27, false];

// Array de tuplas
let tuplaArray: [string, number, boolean][] = [
    ['João', 27, false],
    ['Maria', 22, true]
];

// ========================================
// Funções
// ========================================

// Função básica de soma
function soma(x: number, y: number): number {
    return x + y;
}

console.log(soma(10, 20)); // 30

// Função que aceita string ou number como argumento
function CallToPhone(phone: number | string): string {
    return `Ligando para ${phone}`;
}

console.log(CallToPhone(999999999)); // Ligando para 999999999

// Função assíncrona
async function buscarCep(cep: string): Promise<string> {
    return `Endereço do CEP ${cep}: Rua X, Bairro Y`;
}

// Função para imprimir status de uma pessoa e seu carro
function imprimirStatus(pessoa: Pessoa, carro: Carro): string {
    return `${pessoa.nome} possui um carro da marca ${carro.marca}`;
}

console.log(imprimirStatus({ nome: 'João', idade: 20 }, { marca: 'Fiat' }));

// Função para concatenar arrays
function concatenarArray(array: any[]): string {
    return array.join(' '); // Junta os elementos com espaço entre eles
}

console.log(concatenarArray(arrayMisto));
// Saída: "1 2 3 4 5 JONH true"

// ========================================
// Classes
// ========================================

class Character {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`${this.name} attacks with ${this.strength} power!`);
    }
}

const p1 = new Character('Jonh', 100, 50);
p1.attack(); // "Jonh attacks with 100 power!"

// ========================================
// Modificadores de Acesso (public, private, protected, readonly)
// ========================================

class Person {
    public name: string; // Acessível em qualquer lugar
    private age: number; // Apenas dentro da própria classe
    protected salary: number; // Apenas na classe e subclasses
    readonly cpf: string; // Pode ser lido, mas não alterado após a inicialização

    constructor(name: string, age: number, salary: number, cpf: string) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.cpf = cpf;
    }

    public showInfo(): void {
        console.log(`Nome: ${this.name}, Idade: ${this.age}`);
    }

    private showSalary(): void {
        console.log(`Salário: ${this.salary}`);
    }
}

const person1 = new Person('Alice', 30, 5000, '123.456.789-00');
console.log(person1.name); // ✅ Acessível (public)
// console.log(person1.age); ❌ Erro (private)
// console.log(person1.salary); ❌ Erro (protected)
// console.log(person1.cpf = '987.654.321-00'); ❌ Erro (readonly)

// Subclasse com protected
class Employee extends Person {
    constructor(name: string, age: number, salary: number, cpf: string) {
        super(name, age, salary, cpf);
    }

    public showSalaryInfo(): void {
        console.log(`Salário protegido: ${this.salary}`); // ✅ Acessível (protected)
    }
}

const employee1 = new Employee('Bob', 25, 3000, '999.888.777-66');
employee1.showSalaryInfo(); // "Salário protegido: 3000"

// ========================================
// Trabalhando com Datas
// ========================================

let dataAtual: Date = new Date();
console.log(dataAtual.toLocaleDateString()); // Exibe a data formatada

// ========================================
// Métodos de Arrays
// ========================================

// Filter - Filtra números maiores que 5
let numerosFiltrados = numeros.filter(num => num > 5);
console.log(numerosFiltrados); // [6, 7, 8, 9]

// Map - Dobra os números do array
let numerosDobrados = numeros.map(num => num * 2);
console.log(numerosDobrados); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Reduce - Soma todos os números do array
let somaTotal = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(somaTotal); // 45

// Find - Encontra o primeiro número maior que 5
let primeiroMaiorQue5 = numeros.find(num => num > 5);
console.log(primeiroMaiorQue5); // 6

// Some - Verifica se há números maiores que 8
let temMaiorQue8 = numeros.some(num => num > 8);
console.log(temMaiorQue8); // true

// Every - Verifica se todos os números são menores que 10
let todosMenoresQue10 = numeros.every(num => num < 10);
console.log(todosMenoresQue10); // true

// ========================================
// Finalizando
// ========================================

// Para rodar o código: `npm run start`
