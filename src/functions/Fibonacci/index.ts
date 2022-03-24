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

  console.log("Digite um número natural maior que zero")

  var fib = [N];

  fib[0] = 0;

  fib[1] = 1;

  if (N < 0) {
    console.log("Número inválido")
    fib = [];
    return fib

  }
  else if (N == 0) {

    console.log("Número inválido")
    fib = [];
    return fib;

  }
  else if (N == 1) {
    var fib2 = []
    fib2[0] = fib[0]
    return fib2

  }
  else {

    var num1 = 0, num2 = 1, aux;

    for (var i = 2; i < N; i++) {
      aux = num1;
      num1 = num2;
      num2 = num1 + aux;
      fib[i] = num2;
    }

    return fib
  }





}