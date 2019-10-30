import { AbstractControl } from '@angular/forms';

export function ValidateGpa(control: AbstractControl) {
  const num = Number(control.value);
  if (num < 0 || num > 4.0) {
    return { invalidGpa: true };
  }
  return null;
}