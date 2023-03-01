function Product(Name,price,amount) {
    this.Name = Name;
    this.price = price; 
    Object.defineProperty(this,'amount',
    {enumerable:true,
     value: amount,
     writable: false,
     configurable: false

    })
}
const p1 = new Product('T-Shirt', 20, 500);
console.log(p1);