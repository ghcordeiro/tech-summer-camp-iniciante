/**
 * Função para o retornar a sequencia de fibonacci
 * Retorna um Array de números
 * @param N Quantidade de valores que serão exibidos. N < 30
 * @returns (number[])
 * @example Input: N = 5
 *          Output: [0, 1, 1, 2, 3]
 */

export const fibonacci = (N: number): Array<number> => {
  if (N < 0) return [];
  if (N === 0 || N === 1) return [N];

  let result: Array<number> = [0, 1];

  for (let i = 2; i < N; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result;
};
