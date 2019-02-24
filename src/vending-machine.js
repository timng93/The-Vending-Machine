class VendingMachine {
  constructor(json) {
    this.data = require(json);
  }

  getProductCount(product) {
    return {
      name: this.data.selections[product].name,
      quantity: this.data.selections[product].quantity
    };
  }

  getProductPrice(product) {
    return {
      name: this.data.selections[product].name,
      price: this.data.selections[product].price
    };
  }

  getPayment(product, payment) {
    let selectedItem = this.data.selections[product].name;
    let selectedItemPrice = this.data.selections[product].price;
    let selectedItemQuantity = this.data.selections[product].quantity;

    let transaction={
        name : "",
        change : "",
        quantity : ""
    }

    if(payment === selectedItemPrice || payment > selectedItemPrice) {
      transaction.change = payment - selectedItemPrice;
      transaction.name = selectedItem;
      transaction.quantity = selectedItemQuantity -= 1;
    }
    return transaction 
  }
};

module.exports = VendingMachine;
