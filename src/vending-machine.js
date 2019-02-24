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

  getTransaction(product, payment) {
    let item = this.data.selections[product].name;
    let price = this.data.selections[product].price;
    let quantity = this.data.selections[product].quantity;

    let transaction = {
      name: "",
      change: "",
      quantity: ""
    };

    if (payment === price || payment > price) {
      transaction.change = payment - price;
      transaction.name = item;
      transaction.quantity = quantity -= 1;
    } else {
      transaction.change = payment;
      transaction.name = item;
      transaction.quantity = quantity;
    }
    return transaction;
  }

  printInventory() {
    const inventory = Object.entries(this.data.selections);
    return inventory
      .reduce((accumulator, selection) => {
        accumulator.push(`${selection[1].quantity} ${selection[1].name}`);
        return accumulator;
      }, [])
      .join(", ");
  }
  // getChange() {

  // }
}

module.exports = VendingMachine;
