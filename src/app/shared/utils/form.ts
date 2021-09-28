import { FormControl, FormGroup } from '@angular/forms';

export const markFormGroupTouched = (formGroup: FormGroup) => {
  (Object as any).values(formGroup.controls).forEach((control: FormControl) => {
    control.markAsTouched();
  });
};
