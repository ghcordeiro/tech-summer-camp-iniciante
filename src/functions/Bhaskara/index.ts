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
  let delta, raiz;
  raiz = (b * b) - (4 * a * c);
  delta = Math.pow(raiz, .5);

  if (raiz <= 0 || a == 0) {
    return { x1: undefined, x2: undefined };
  } else {
    return { x1: Number(((-b + delta) / (2 * a)).toFixed(4)), x2: Number(((-b - delta) / (2 * a)).toFixed(4)) };
  }
}
