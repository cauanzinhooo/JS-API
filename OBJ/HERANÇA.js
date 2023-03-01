function Product (name,price){
    this.name = name,
    this.price = price;
}
Product.prototype.more = function(increase) {
    this.price += (increase);
}
Product.prototype.less = function(suck){
    this.price -= (suck);
}
const p1 = new Product('Mug', 50);
console.log(p1);
function Shirt (name,price,color){
    Product.call(this,name,price);
}
Shirt.prototype = Object.create(Product.prototype);
const p2 = new Shirt('t-shirt', 100);
p2.more(100);
console.log(p2);