import AppError, { SEVERITY } from '../../../../shared/error/AppError';

interface ISignIn {
  email: string;
  password: string;
}

const LTAG = 'SignInService';

const SignInService = (data: ISignIn): Promise<string> => {
  if (!data.email) {
    throw new AppError(LTAG, SEVERITY.MEDIUM);
  }

  if (!data.password) {
    throw new AppError(LTAG, SEVERITY.MEDIUM);
  }

  return new Promise(() => {
    return data ? 'signed in' : 'not signed in';
  });
};

export default SignInService;
