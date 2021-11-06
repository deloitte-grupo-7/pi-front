export class NewService {
  id?: string;
  nome?: string;
  titulo?: string;
  bio?: string;
  descricao?: string;
  imagem?: string;
  avaliacao?:number;
  constructor(form: Map<string, any>) {
    this.titulo = form.get('titulo');
    this.descricao = form.get('descricao');
}
}
