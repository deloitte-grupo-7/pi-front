import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {
    static validateCPF(control: AbstractControl): ValidationErrors | null {
        const cpf: string = control.value;
        if (cpf && cpf.length == 11) {
            const nums: number[] = Array.from(cpf).map(n => Number(n));
            const tmp: number[] = new Array();
            for (let i = 0; i < 2; i++) {
                tmp.push(nums.slice(0, 9 + i)
                             .map((n, j) => n * j)
                             .reduce((total, current) => total + current)
                             % 11 % 10);
            }
            const res = tmp.toString().replace(/\s|,/, '');
            console.log(res);
            return cpf.endsWith(res) ? null : { invalidCPF: true };
        }
        return null;
    }

    static validateBirthday(control: AbstractControl): ValidationErrors | null {
        const eighteen: Date = new Date(control.value);
        eighteen.setFullYear(eighteen.getFullYear() + 18);
        const today: Date = new Date();
        return (today > eighteen) ? null : { minor: true };
    }

    static checkPasswords(control: AbstractControl): ValidationErrors | null {
        const form: FormArray = <FormArray>control;
        const password = form.value[form.length - 2];
        const passconf = form.value[form.length - 1];
        const err: ValidationErrors | null = (password === passconf) ? null : { passwordsDontMatch: true };
        form.controls[form.length - 1].setErrors(err);
        return null;
      }
}