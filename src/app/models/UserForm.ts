export class SignInForm {
    username: string = '';
    password: string = '';
    constructor(form: Map<string, any>) {
        this.username = form.get('username');
        this.password = form.get('password');
    }
}

export class SignUpForm extends SignInForm {
    name: string = '';
    cpf: string = '';
    email: string = '';
    birthday: Date = new Date;

    constructor(form: Map<string, any>) {
        super(form);
        this.name = form.get('name');
        this.cpf = form.get('cpf');
        this.email = form.get('email');
        this.birthday = form.get('birthday');
    }
}

export class ProfileEditForm extends SignInForm {
    name: string = '';
    email: string = '';
    description: string = '';

    constructor(form: Map<string, any>) {
        super(form);
    }
}