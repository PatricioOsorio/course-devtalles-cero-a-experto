import { retornaArreglo } from '../testing-base-pruebas/07-deses-arr';

describe('07-deses-arr', () => {
  it('should return an array correctly', () => {
    const expectedArray = ['ABC', 123];

    const array = retornaArreglo();

    expect(array).toEqual(expectedArray);
  });
});
