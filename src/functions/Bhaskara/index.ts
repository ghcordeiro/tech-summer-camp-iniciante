interface IBhaskaraResponse {
  x1?: number, 
  x2?: number
}

/**
 * Função para o cálculo de Bhaskara
 * Retorna x' e x''
 * 
 * Formula:                           
 * Δ = b^2 – 4ac                         
 * x = –b±(√Δ)/2a 
 * @param a Valor de A.
 * @param b Valor de B.
 * @param c Valor de C.
 * @returns ({ x1: number | undefined, x2: number | undefined}) números com 4 casas após a vírgula
 * @example Input: a: 10, b: 20.1 c: 5.1, 
 *          Output: x1: -0.2978, x2: -1.7121
 */
export const bhaskara = (a: number, b: number, c: number): IBhaskaraResponse => {
  // TODO: Implementar a função e testar a chamada dela no index.ts
  

  let delta = Math.pow(b,2) - 4 * a * c
    
  let value1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(4)
  
  
  let value2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(4)

  

  return ({x1: Number(value1) ,x2: Number(value2)})

  
}