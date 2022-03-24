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
  // Utilizar essa função com recursividade, está dando erro no Node,
  // pois ela está sendo chamada várias vezes de forma descontrolada,
  // tenta achar uma outra solução sem utilizar recursividade, pois deve
  // retornar um array com todos os valores até o valor do número que você 
  // receber por parâmetro.
  if (N < 0) {
    return fibonacci(N)
  } else if (N === 0) {
    return fibonacci(N)

  } else if (N === 1) {
    return fibonacci(N)

  } else {
    var num1 = 0, num2 = 1, aux;

    var fib = [N];

    fib[0] = 0;

    fib[1] = 1;

    for (var i = 2; i < N; i++){
      aux = num1;
      num1 = num2;
      num2 = num1 + aux;
      fib[i] = num2;
    }    

    return fib
  }
}