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

  var delta = (b * b) - 4 * a * c;

  document.write("Valor de Delta => " + delta + "<br/><br/>");

  if (delta < 0) {
    document.write("Para Delta negativo, não existem raízes reais. <br/>");
  } else {
    document.write("Para Delta positivo, raízes diferentes: <br/>");
  }

  document.write("Para Delta positivo, raízes diferentes: <br/>");

  var coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a);
  var coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a);

  document.write("x' = " + coeficiente1 + "<br/>");
  document.write("x'' = " + coeficiente2 + "<br/>");

  return ({ x1: coeficiente1 , x2: coeficiente2  })
}
