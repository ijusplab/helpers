import checkDigits from './checkDigits';

/**
 * Validates Brazilian CNPJ
 *
 * @param str
 */
export default function validateCnpj(str: string | number): boolean {
  return checkDigits(str, 'cnpj');
}
