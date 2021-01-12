import checkDigits from './checkDigits';

/**
 * Validates Brazilian CPF
 *
 * @param str
 */
export default function validateCpf(str: string | number): boolean {
  return checkDigits(str, 'cpf');
}
