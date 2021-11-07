export class SignInForm {
    username!: string;
    password!: string;
    
    constructor(form: Map<string, any>) {
        init(this, form);
    }
}

export class SignUpForm extends SignInForm {
    name!: string;
    cpf!: string;
    email!: string;
    birthday: Date = new Date;

    constructor(form: Map<string, any>) {
        super(form);
        init(this, form);
    }
}

export class ProfileEditForm extends SignInForm {
    name!: string;
    tagline!: string;
    email!: string;
    description!: string;
    address?: string;
    image?: string;

    constructor(form: Map<string, any>) {
        super(form);
        init(this, form);
    }
}

export class User {
    id: string = '';
    username: string = '';
    name: string = '';
    email: string = '';
    tagline: string = '';
    description: string = '';
    imgURL: string = '';
    ratings: Rating[] = [];

    constructor (form: Map<string, any>) {
        init(this, form);
    }
}

export class Rating {
    author!: string;
    score!: number;
    text!: string;
    constructor (form: Map<string, any>) {
        init(this, form);
    }
}

export class Post {
    id?:string;
    title?: string;
    description?: string;
    imgUrl?: string;
    rating?:number;
    constructor(form: Map<string, any>){
        init(this, form);
    }
}

const init = (obj: any, form: Map<string, any>) => {
    Object.keys(obj).forEach(
        (prop) => Object.defineProperty(obj, prop, { value: form.get(prop), writable: false })
    );
}