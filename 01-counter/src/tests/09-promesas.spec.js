import { getHeroeByIdAsync } from '../testing-base-pruebas/09-promesas';

describe('09-promesas', () => {
  it('should getHeroeByIdAsync return a hero', async () => {
    const heroExpect = {
      id: 1,
      name: 'Batman',
      owner: 'DC',
    };

    const hero = await getHeroeByIdAsync(1);

    expect(hero).toEqual(heroExpect);
  });

  it('should getHeroeByIdAsync retrun an error if the hero isnt found', async () => {
    try {
      await getHeroeByIdAsync(100);
    } catch (error) {
      expect(error).toBe('No se pudo encontrar el heroe');
    }
  });
});
