import { bhaskara } from './functions/Bhaskara';
import { fibonacci } from './functions/Fibonacci';
import { mediaNaMatriz } from './functions/MediaNaMatriz';
import { palavraChave } from './functions/PalavraChave';
import { quadroPunnett } from './functions/QuadroPunnett';

console.log(bhaskara(10, 20.1, 5.1)); // { x1: -0.2979, x2: -1.7121 }
console.log(fibonacci(5)); // [ 0, 1, 1, 2, 3 ]
console.log(mediaNaMatriz(2, 2, [[0, 6], [1, 2]])); // [ 0.5, 4 ]
console.log(palavraChave('Texto digitado em uma frase armazenada em uma string', 'em')); // 2
console.log(quadroPunnett('Aa', 'Aa')); // { quadro: [ 'AA', 'Aa', 'Aa', 'aa' ], castanho: 75, azul: 25 }
