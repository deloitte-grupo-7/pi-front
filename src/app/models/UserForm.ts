export class SignInForm {
    username: string = '';
    password: string = '';
    constructor(form: Map<string, any>) {
        Object.keys(this).forEach(
            (prop) => Object.defineProperty(this,prop, { value: form.get(prop), writable: false })
        );
    }
}

export class SignUpForm extends SignInForm {
    name: string = '';
    cpf: string = '';
    email: string = '';
    birthday: Date = new Date;

    constructor(form: Map<string, any>) {
        super(form);
        Object.keys(this).forEach(
            (prop) => Object.defineProperty(this,prop, { value: form.get(prop), writable: false })
        );
    }
}

export class ProfileEditForm extends SignInForm {
    name: string = '';
    email: string = '';
    description: string = '';
    image: string = '';

    constructor(form: Map<string, any>) {
        super(form);
        Object.keys(this).forEach(
            (prop) => Object.defineProperty(this,prop, { value: form.get(prop), writable: false })
        );
    }
}