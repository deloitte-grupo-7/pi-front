import { ValidatorFn } from "@angular/forms";

export interface FieldTemplate {
    title: string,
    name: string,
    type: string,
    validators: ValidatorFn[],
    regex?: RegExp,
}