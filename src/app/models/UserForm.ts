export interface SignInForm {
    username: string,
    password: string,
}

export interface SignUpForm extends SignInForm {
    name: string,
    cpf: string,
    email: string, 
    birthday: string,
};

export interface EditForm extends SignInForm {
    name: string,
    email: string, 
    description: string,
}