export class SignInForm {
    username: string = '';
    password: string = '';
    constructor(fields: any[]) {
        let i = 0;
        for (let prop in this) {
            prop = fields[i];
            i++;
        }
    }
}

export class SignUpForm extends SignInForm {
    name: string = '';
    cpf: string = '';
    email: string = '';
    birthday: Date = new Date;

    constructor(fields: any[]) {
        super(fields);
    }
}

export class ProfileEditForm extends SignInForm {
    name: string = '';
    email: string = '';
    description: string = '';

    constructor(fields: any[]) {
        super(fields);
    }
}