export class SignInForm {
    username: string = '';
    name: string = '';
    constructor(arr: any[]) {
        let i = 0;
        for (let prop in this) {
            prop = arr[i];
            i++;
        }
    }
}

export class SignUpForm extends SignInForm {
    name: string = '';
    cpf: string = '';
    email: string = '';
    birthday: Date = new Date;

    constructor(arr: any[]) {
        super(arr);
    }
}