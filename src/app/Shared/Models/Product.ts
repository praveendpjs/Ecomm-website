export class Product{
    //id:number // This gives an error because it has no initializer. constructor(id:number){this.id = id;} should be added above so that it does not give error. But there is a easy way to tackle the problem.
    id!:number; //! means you must have it
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    estimatedDeliveryTime!:string;
}