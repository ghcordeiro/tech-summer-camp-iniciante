/**
 * Função para o retornar a sequencia de fibonacci 
 * Retorna um Array de números
 * @param N Quantidade de valores que serão exibidos. N < 30
 * @returns (number[])
 * @example Input: N = 5
 *          Output: [0, 1, 1, 2, 3]
 */
export const fibonacci = (N: number): Array<number> => {
  let proximo, anterior = 0, atual = 1;
  const result = []
  for (let i = 1; i <= N; i++) {
    if (i == N) result.push(anterior);
    else result.push(anterior);
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
  return result;
}