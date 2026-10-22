const order = {
    items: [
        {name: `laptop` , price: 1000000, quantity:1},
        {name: "soap", price: 11000, quantity: 2},
        {name: "bread", price:18000, quantity: 1}
    ],
    calculatetotalcost() {
        let total = 0;
        for (let i =0; i < this.items.length; i++) {
            total += this.items[i].price * this.items[i].quantity;
    
        }
        return total;
    }
   
};
console.log(order.calculatetotalcost());