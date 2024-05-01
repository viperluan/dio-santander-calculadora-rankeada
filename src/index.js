import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const vitorias = await rl.question('Digite a quantidade de vitórias: ');
const derrotas = await rl.question('\nDigite a quantidade de derrotas: ');

const nivelHeroi = (saldo) => {
  if (saldo < 10)
    return "Ferro";
  if (saldo > 10 && saldo <= 20)
    return "Bronze";
  if (saldo > 20 && saldo <= 50)
    return "Prata";
  if (saldo > 50 && saldo <= 80)
    return "Ouro";
  if (saldo > 80 && saldo <= 90)
    return "Diamante";
  if (saldo > 90 && saldo <= 100)
    return "Lendário";
  if (saldo >= 101)
    return "Imortal";
}

const calculaSaldoVitorias = (vitorias, derrotas) => {
  return vitorias - derrotas;
}

const saldo = calculaSaldoVitorias(vitorias, derrotas);
const nivel = nivelHeroi(saldo);

console.log(`\nO Herói tem de saldo ${saldo} vitórias e está no nível ${nivel}.`);

rl.close();
