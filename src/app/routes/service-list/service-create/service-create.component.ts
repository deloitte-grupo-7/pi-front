import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {

  cancelService:EventEmitter<null> = new EventEmitter();
  
  newService:Produto = {
    nome:'',
    descricao:'',
    imagem:'',
  }

  constructor(
    private ps:ProdutoService,
    private router: Router,
    ) { }

  postService(newService: Produto){
    alert(JSON.stringify(newService, null, 3));
    console.log('tentando salvar')

    this.ps.postService(this.newService);
    //limpando a tela para adicionar mais um serviço.
    this.newService = {
      nome:'',
      descricao:'',
      imagem:'',
    }
  }

  cancel(){
    console.log('tentando cancelar')
    this.cancelService.emit();
    this.router.navigateByUrl('/')
  }

  // addDescricao():void{
  //   this.newService.descricao
  // }

  // removeDescricao():void{
  //   this.newService.descricao;
  // }

  ngOnInit(): void {
  }
}
