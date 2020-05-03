import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products1=[];
  constructor() { }

  ngOnInit() {
  }
    addProducts(value){
if(value !=null && value !=""){
      this.products1.push(value);
      console.log(this.products1);
       }
    }
    deleteProducts(i){
      this.products1.splice(i,1);
    }
}
