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
  // Quando o delta não for possivel calcular, deve retornar undefined para x1 e x2
  var delta = (b * b) - 4 * a * c;

  if (delta < 0) {
    return ({ x1: undefined, x2: undefined })
  }
  else {
    var coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a);
    var coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a);

    var root1 = parseFloat(coeficiente1.toFixed(4));
    var root2 = parseFloat(coeficiente2.toFixed(4));

    return ({ x1: root1, x2: root2 })
  }

}
