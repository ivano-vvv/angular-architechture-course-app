import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';

type PasswordControlsKeys = {
  password: 'password';
  passwordRepeat: 'passwordRepeat';
};

export const initPasswordRepeatValidator = (form: FormGroup) => {
  return (_: AbstractControl): ValidationErrors | null => {
    const password = form.get('password');
    const passwordRepeat = form.get('passwordRepeat');

    if (!password || !passwordRepeat) {
      throw new Error('cannot get password controls');
    }

    return password.value && password.value !== passwordRepeat.value
      ? { repeat: true }
      : null;
  };
};
