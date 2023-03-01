function account (agency,user,balance){
    this.agency = agency,
    this.user = user,
    this.balance = balance;
}
account.prototype.towithdraw = function(vl){
    if(this.balance < vl){
        console.log('Insuficent Balance')
        this.seebalance();
        return;
    }
    this.balance -= vl;
    this.seebalance();
}
account.prototype.deposite = function(vl){
    this.balance += vl;
    this.seebalance();
}
account.prototype.seebalance = function(){
    console.log(`${this.user} | ${this.agency}  | R$${this.balance}`);
}
function CU(agency,user,balance,limit){
    account.call(this,agency,user,balance);
    this.limit = limit;
};
CU.prototype = Object.create(account.prototype);
CU.prototype.constructor = CU;
CU.prototype.towithdraw = function(vl){
    if( vl > (this.balance + this.limit)) return;
    this.balance -= vl;
    this.seebalance();


}
p1 = new CU(10,20,30,100);
p1.towithdraw(100);

