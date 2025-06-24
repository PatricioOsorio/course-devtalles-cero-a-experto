import { getHeroeById, getHeroesByOwner } from '../testing-base-pruebas/08-imp-exp';

describe('08-imp', () => {
  it('should return a heroe by id', () => {
    const hero = getHeroeById(1);

    expect(hero).toBeTruthy();
  });

  it('should return a list of heroes depending the owner', () => {
    const heroes = getHeroesByOwner('DC');

    expect(heroes).toBeTruthy();
  });
});
