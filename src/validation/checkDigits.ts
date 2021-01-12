import { isNumber, isString } from '../predicates';

export default function checkDigits(str: string | number, type = 'cpf'): boolean {
  const numbers = getNumbers(str, type);
  if (Array.isArray(numbers)) {
    const weights = getWeights(numbers.length);
    if (Array.isArray(weights)) {
      const base = numbers.slice(0, -2);
      const [first, second] = numbers.slice(-2);
      return getDigit(base, weights.slice(1)) === first && getDigit(base.concat(first), weights) === second;
    }
    return false;
  }
  return false;
}

function getNumbers(str: string | number, type: string): number[] | boolean {
  if (isNumber(str)) {
    str = str.toString();
  }
  if (!isString(str)) {
    return false;
  }
  str = str.replace(/[^\d]+/g, '');
  const len = type === 'cnpj' ? 14 : 11;
  if (str.length !== len) {
    return false;
  }
  const invalid = [...Array(len - 1).keys()].map((x) => String(x).repeat(len));
  if (invalid.indexOf(str) >= 0) {
    return false;
  }
  return str.split('').map(Number);
}

function getWeights(len: number) {
  const weights = {
    cpf: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
    cnpj: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  };
  if (len === 11) {
    return weights.cpf;
  }
  if (len === 14) {
    return weights.cnpj;
  }
  return false;
}

function getDigit(numbers: number[], weights: number[]) {
  const products = numbers.map((number, i) => number * weights[i]);
  const sum = products.reduce((sum, product) => (sum += product), 0);
  return ((sum * 10) % 11) % 10;
}
