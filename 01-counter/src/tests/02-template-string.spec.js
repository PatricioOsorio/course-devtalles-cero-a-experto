import { getGreeting } from '../testing-base-pruebas/02-template-string';

describe('02 template string', () => {
  it('should return correctly the greeting', () => {
    const name = 'duck';

    const message = getGreeting(name);

    expect(message).toBe(`Hello ${name}`);
  });
});
