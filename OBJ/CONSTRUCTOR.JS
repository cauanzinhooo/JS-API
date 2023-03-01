//function Construtora(name,surname){
//   this.name = name,
//    this.surname = surname;
//    this.completename = () => this.nome + '' + this.surname
//}
//p1 = new Construtora('Rafael','Lima');
//console.log(p1.completename);
function Product (name,price){
    this.name = name,
    this.price = price;
}
Product.prototype.less = function (suck){
    this.price = this.price - (this.price * (suck/100));
}
Product.prototype.more = function(increase){
    this.price = this.price + (this.price * (increase/100));
}
//LITERAL
const p2 = {
    name: 'Cup',
    price: '50'
}
Object.setPrototypeOf(p2, Product.prototype);
p2.less(100);
console.log(p2);
const p1 = new Product('T-Shirt', 20);
//p1.less(100);
p1.more(100);
console.log(p1);