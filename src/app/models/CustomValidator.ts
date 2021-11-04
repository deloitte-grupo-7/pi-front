import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidator {
    static validateCPF(control: AbstractControl): ValidationErrors | null {
        const cpf: string = control.value;
        if (cpf && cpf.length == 11) {
            const nums: number[] = Array.from(cpf).map(n => Number(n));
            const tmp: number[] = new Array();
            for (let i = 0; i < 2; i++) {
                tmp[i] = nums.slice(0, 9 + i).map((n, j) => n * j)
                             .reduce((total, current) => total + current) % 11 % 10;
            }
            const res = tmp.toString().replace(/\s|,/, '');
            console.log(res);
            return cpf.endsWith(res) ? null : { invalidCPF: true };
        }
        return null;
    }
}
