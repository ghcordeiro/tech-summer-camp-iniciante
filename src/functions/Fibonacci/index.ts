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
  let resultado = []
  let num = 0
  let proxNum = 1
  
  while(resultado.length <= N){
  
    resultado.push(num)
      
    proxNum += num
    num = proxNum - num 
      
  }
  
  
  return resultado
}