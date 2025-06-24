import { getImagen } from '../testing-base-pruebas/11-async-await';

describe('11-async-await', () => {
  it('should getImagen return a url', async () => {
    const urlImage = await getImagen();

    expect(typeof urlImage).toBe('string');
  });

  //   it('should getImagen return an  error if the url is invalid', async () => {
  //    const urlImage = await getImagen();

  //    console.log(urlImage);

  //    expect(urlImage).toMatch(/not found/i);
  //   })
});
