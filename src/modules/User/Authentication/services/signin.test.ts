import AppError from '../../../../shared/error/AppError';
import SignInService from './signin';

describe('SignIn', () => {
  it('user should be able to sign in', async () => {
    const user = {
      email: 'example@email.com',
      password: '123456',
    };

    await SignInService(user);

    expect(1).toBe(1);
  });

  it('user should NOT be able to sign in without password', async () => {
    const user = {
      email: 'example@email.com',
      password: '',
    };

    await expect(SignInService(user)).rejects.toBeInstanceOf(AppError);
  });

  it('user should NOT be able to sign in without email', async () => {
    const user = {
      email: '',
      password: '123',
    };

    await expect(SignInService(user)).rejects.toBeInstanceOf(AppError);
  });
});
