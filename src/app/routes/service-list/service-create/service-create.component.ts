import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private ps:ProdutoService) { }
  
  cancel(){
    console.log('tentando cancelar')
    this.cancelService.emit();
  }

  save(){
    console.log('tentando salvar')
    this.ps.addService(this.newService);
    
    //limpando a tela para adicionar mais um serviço.
    this.newService = {
      nome:'',
      descricao:'',
      imagem:'',
    }
  }

  addService():void{
  }

  removeService():void{
    this.newService.descricao;
  }

  ngOnInit(): void {
  }
}
