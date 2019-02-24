class VendingMachine {
  constructor(json) {
    this.data = require(json);
  }

  getProduct(product) {
    return {
      name: this.data.selections[product].name,
      quantity: this.data.selections[product].quantity
    };
  }



}

module.exports = VendingMachine;



