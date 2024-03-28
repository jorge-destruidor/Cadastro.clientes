import { Component } from '@angular/core';

@Component({
  selector: 'app-cadprod',
  templateUrl: './cadprod.component.html',
  styleUrls: ['./cadprod.component.css']
})
export class CadprodComponent {
  produto: any = {};

  salvarProduto() {
    console.log(this.produto);

  }
}
