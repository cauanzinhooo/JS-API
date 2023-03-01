function Product(Name,price,amount) {
    this.Name = Name;
    this.price = price;
    let privateamount = amount; 
    Object.defineProperty(this,'amount',{
     enumerable:true,
     configurable: false,
     get: function(){
         return privateamount
        },
     set: function(values){
        if( typeof values !== 'number' ){
            throw new TypeError('Sexo')
        }
        privateamount = values;
     }

    });
}
const p1 = new Product ('leggins',20,100);
console.log(p1);