import { bhaskara } from "../functions/Bhaskara"

describe('Bhaskara', () => {
  it('Deve cálcular o resultado para o input a: 10, b: 20.1, c: 5.1', () => {
    const result = bhaskara(10, 20.1, 5.1)

    expect(result.x1).toEqual(-0.2979)
    expect(result.x2).toEqual(-1.7121)
  }),
  it('Deve cálcular o resultado para o input a: 0, b: 20, c: 5', () => {
    const result = bhaskara(0, 20, 5)

    expect(result.x1).toEqual(undefined)
    expect(result.x2).toEqual(undefined)
  }),
  it('Deve cálcular o resultado para o input a: 10.3, b: 203, c: 5', () => {
    const result = bhaskara(10.3, 203, 5)

    expect(result.x1).toEqual(-0.0247)
    expect(result.x2).toEqual(-19.6841)
  }),
  it('Deve cálcular o resultado para o input a: 10, b: 3, c: 5', () => {
    const result = bhaskara(10, 3, 5)

    expect(result.x1).toEqual(undefined)
    expect(result.x2).toEqual(undefined)
  }),
  it('Deve cálcular o resultado para o input a: 1, b: 2, c: 3', () => {
    const result = bhaskara(1, 2, 3)

    expect(result.x1).toEqual(undefined)
    expect(result.x2).toEqual(undefined)
  }),
  it('Deve cálcular o resultado para o input a: 1, b: 2, c: 0', () => {
    const result = bhaskara(1, 2, 0)

    expect(result.x1).toEqual(0.0000)
    expect(result.x2).toEqual(-2.0000)
  })
})