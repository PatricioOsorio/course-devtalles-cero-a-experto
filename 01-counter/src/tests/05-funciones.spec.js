import { getUser, getUsuarioActivo } from '../testing-base-pruebas/05-funciones';

describe('05-funciones', () => {
  it('should return correctly a user', () => {
    const userExpect = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(user).toEqual(userExpect);
  });

  it('should return an active user', () => {
    const name = 'peter';
    const userExpect = {
      uid: 'ABC567',
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(user).toEqual(userExpect);
  });
});
