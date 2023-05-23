import { Injectable } from '@angular/core';
import { Product } from 'src/app/Shared/Models/Product';
import { Tag } from 'src/app/Shared/Models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProductById(id:number): Product{
    return this.getAll().find(product => product.id == id)! //we add ! at end because it does not return undefinded
  }
  getAllTags():Tag[]{
    return[
      {name:'All',count:6},
      {name:'Wooden',count:1},
      {name:'Home-appliance',count:3},
      {name:'Electronics',count:2},
      {name:'Sport',count:1},
      {name:'Vehicle',count:1},

    ]
  }
  getAllProductsByTag(tag: string): Product[]{
    return tag == "All" ? this.getAll():
    this.getAll().filter(product => product.tags?.includes(tag))
  }
  getAll():Product[]{
    return [
      {
        id:1,
        name:"Television",
        price:1000,
        tags:['Home-appliance','Electronics'],
        favorite:false,
        stars:4.0,
        imageUrl:'assets/images/img1.jpg',
        estimatedDeliveryTime:'15 days to 1 Month '
      },
      {
        id:2,
        name:"Chair",
        price:10,
        tags:['Home-appliance','Wooden'],
        favorite:false,
        stars:3.0,
        imageUrl:'assets/images/img2.jpg',
        estimatedDeliveryTime:'10 days'
      },
      {
        id:3,
        name:"Bicycle",
        price:150,
        tags:['Sport','Vehicle'],
        favorite:true,
        stars:4.0,
        imageUrl:'assets/images/img3.jpg',
        estimatedDeliveryTime:'15 days to 1 Month '
      },
      {
        id:4,
        name:"Watch",
        price:100,
        tags:['Accessory','Electronics'],
        favorite:true,
        stars:5.0,
        imageUrl:'assets/images/img4.jpg',
        estimatedDeliveryTime:'15 days'
      },
      {
        id:5,
        name:"Air Conditioner",
        price:999,
        tags:['Home-appliance','Electronics'],
        favorite:false,
        stars:2.0,
        imageUrl:'assets/images/img5.jpg',
        estimatedDeliveryTime:'15 days to 1 Month '
      },
      {
        id:6,
        name:"Phone",
        price:1000,
        tags:['Accessories','Electronics'],
        favorite:false,
        stars:1.0,
        imageUrl:'assets/images/img6.jpg',
        estimatedDeliveryTime:'5 days'
      }
    ]
  }
}
