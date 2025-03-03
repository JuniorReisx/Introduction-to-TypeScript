"use strict";
// ========================================
// Tipos Primitivos
// ========================================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let nome = 'João';
let idade = 27;
let casado = false;
// ========================================
// Null e Undefined
// ========================================
let minhaVar = null;
let minhaVar2 = undefined;
// ========================================
// Any, Void e Never
// ========================================
let qualquer = 'Qualquer coisa';
let vazio;
let erro;
// Criando objetos com interface Viagem
const pessoaViagem = { marca: 'Delta Airlines' };
let pessoa2 = pessoaViagem;
pessoa2.status = 'Aprovado';
console.log(pessoaViagem);
// Criando objetos genéricos
let produto = { nome: 'Sabão', preco: 2.30 };
// ========================================
// Arrays e Tuplas
// ========================================
// Arrays recomendados
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let strings = ['a', 'b', 'c'];
let infos = ['João', 27, 'Fiat', 2019];
// Arrays mistos
let arrayMisto = [1, 2, 3, 4, 5, 'JONH', true];
// Tuplas
let tupla = ['João', 27, false];
// Array de tuplas
let tuplaArray = [
    ['João', 27, false],
    ['Maria', 22, true]
];
// ========================================
// Funções
// ========================================
// Função básica de soma
function soma(x, y) {
    return x + y;
}
console.log(soma(10, 20)); // 30
// Função que aceita string ou number como argumento
function CallToPhone(phone) {
    return `Ligando para ${phone}`;
}
console.log(CallToPhone(999999999)); // Ligando para 999999999
// Função assíncrona
function buscarCep(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        return `Endereço do CEP ${cep}: Rua X, Bairro Y`;
    });
}
// Função para imprimir status de uma pessoa e seu carro
function imprimirStatus(pessoa, carro) {
    return `${pessoa.nome} possui um carro da marca ${carro.marca}`;
}
console.log(imprimirStatus({ nome: 'João', idade: 20 }, { marca: 'Fiat' }));
// Função para concatenar arrays
function concatenarArray(array) {
    return array.join(' '); // Junta os elementos com espaço entre eles
}
console.log(concatenarArray(arrayMisto));
// Saída: "1 2 3 4 5 JONH true"
// ========================================
// Classes
// ========================================
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`${this.name} attacks with ${this.strength} power!`);
    }
}
const p1 = new Character('Jonh', 100, 50);
p1.attack(); // "Jonh attacks with 100 power!"
// ========================================
// Modificadores de Acesso (public, private, protected, readonly)
// ========================================
class Person {
    constructor(name, age, salary, cpf) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.cpf = cpf;
    }
    showInfo() {
        console.log(`Nome: ${this.name}, Idade: ${this.age}`);
    }
    showSalary() {
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
    constructor(name, age, salary, cpf) {
        super(name, age, salary, cpf);
    }
    showSalaryInfo() {
        console.log(`Salário protegido: ${this.salary}`); // ✅ Acessível (protected)
    }
}
const employee1 = new Employee('Bob', 25, 3000, '999.888.777-66');
employee1.showSalaryInfo(); // "Salário protegido: 3000"
// ========================================
// Trabalhando com Datas
// ========================================
let dataAtual = new Date();
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
