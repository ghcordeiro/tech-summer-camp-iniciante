/**
 * Função para o retornar a sequencia de fibonacci 
 * Retorna um Array de números
 * @param N Quantidade de valores que serão exibidos. N < 30
 * @returns (number[])
 * @example Input: N = 5
 *          Output: [0, 1, 1, 2, 3]
 */
export const fibonacci = (N: number): Array<number> => {
  // TODO: Implementar a função e testar a chamada dela no index.ts
  var i;
  var fib = []; // Initialize array!

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= N; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib
}