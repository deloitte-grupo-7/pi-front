export class Produto {
    id?: string = '';
    nome?: string = '';
    descricao?: string = '';
    imagem?: string = '';
    avaliacao?:number = 0;
    constructor(form: Map<string, any>){
        this.id = form.get('id');
        this.nome = form.get('nome');
        this.descricao = form.get('descricao');
        this.imagem = form.get('imagem');
        this.avaliacao = form.get('avaliacao');
    }
}