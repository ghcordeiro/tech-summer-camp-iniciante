/**
 * Função para o retornar a sequencia de fibonacci 
 * Retorna um Array de números
 * @param N Quantidade de valores que serão exibidos. N < 30
 * @returns (number[])
 * @example Input: N = 5
 *          Output: [0, 1, 1, 2, 3]
 */
 export const fibonacci = (N: number): Array<number> => {
  let number = new Array();
  let proximo = 1;
  let atual = 0;

  if (N === 0 || N === 1) {
    return [N];
  }
  
  for(let i = 0; i < N-1; i++) {       
    if(i === 0){
      number.push(0);    
    }
    number.push(proximo);
    atual = proximo;
    proximo = proximo + number[i];
  }
  return number;
}