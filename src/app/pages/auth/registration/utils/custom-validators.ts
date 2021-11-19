import { FormGroup } from '@angular/forms';

type PasswordControlsKeys = {
  password: 'password';
  passwordRepeat: 'passwordRepeat';
};

export const PasswordRepeatValidator = (
  form: FormGroup,
  keys?: PasswordControlsKeys
): Record<string, boolean> | null | never => {
  const password = form.get(keys?.password || 'password');
  const passwordRepeat = form.get(keys?.passwordRepeat || 'passwordRepeat');

  if (!password || !passwordRepeat) {
    throw new Error('cannot get password controls');
  }

  return password.value && password.value !== passwordRepeat.value
    ? { repeat: true }
    : null;
};
