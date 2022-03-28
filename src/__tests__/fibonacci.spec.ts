import { fibonacci } from "../functions/Fibonacci"

describe('Fibonacci', () => {
  it('Deve retornar um array com os valores de fibonacci para 5 primeiros valores da sequencia', () => {
    const result = fibonacci(5)

    expect(result).toEqual([0, 1, 1, 2, 3])
  }),
  it('Deve retornar um array com os valores de fibonacci para 10 primeiros valores da sequencia', () => {
    const result = fibonacci(10)

    expect(result).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  }),
  it('Deve retornar um array com os valores de fibonacci para -1 primeiros valores da sequencia', () => {
    const result = fibonacci(-1)

    expect(result).toEqual([])
  }),
  it('Deve retornar um array com os valores de fibonacci para -1 primeiros valores da sequencia', () => {
    const result = fibonacci(0)

    expect(result).toEqual([])
  })
})