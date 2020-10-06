import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  popModal = false;
  products;
  constructor() { }

  ngOnInit(): void {
  }

  product:Array<any>=[
    { ProductId:1,ProductName:"Nike Running shies" ,image:'./assets/nike.jpg', Category:"Shoe", price:1200 },
    { ProductId:1,ProductName:"Jacket" ,image:'./assets/jacket.jpg', Category:"jacket", price:1000 },
    { ProductId:1,ProductName:"Shirt" ,image:'https://images-eu.ssl-images-amazon.com/images/I/41xCWDx-OyL._SX342_QL70_ML2_.jpg', Category:"Shirts", price:800 },
  ];


  onGetData(productid){
   var prod  =  this.product?.filter(value=>{
      value.ProductId == productid
    });
    this.products= prod;
   this.popModal = true;
  }

  onHandlePopup(){
    this.popModal =false;
  }

}
