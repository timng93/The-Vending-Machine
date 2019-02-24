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
      .reduce((accumulator, product) => {
        accumulator.push(`${product[1].quantity} ${product[1].name}`);
        return accumulator;
      }, [])
      .join(", ");
  }

  restockInventory() {
    const inventory = Object.entries(this.data.selections);
    let restock = 0;
    inventory.map(product => {
      if (product[1].quantity < 15) {
        product[1].quantity = 15;
      }
      restock += product[1].quantity;
    });
    return restock;
  }

  printCoinsInventory() {
    const coinsInventory = Object.entries(this.data.coins);
    return coinsInventory
      .reduce((accumulator, coinType) => {
        accumulator.push(`${coinType[1].count} ${coinType[1].name}`);
        return accumulator;
      }, [])
      .join(", ");
  }

  refillCoins() {
    const coins = Object.entries(this.data.coins);
    let refill = 0;
    coins.map(coinType => {
      if (coinType[1].count < 15) {
        coinType[1].count = 15;
      }
      refill += coinType[1].count;
    });
    return refill;
  }

  invalidPayment(payment) {
    if (payment > 10) {
      return "Payment exceeds 10 dollars. Please try again with smaller bills";
    }
  }

  emptyInventory(product) {
    let name = this.data.selections[product].name;
    let quantity = this.data.selections[product].quantity;

    let inventory = {
      name: "",
      quantity: ""
    };

    inventory.name = name;
    inventory.quantity = quantity - quantity;

    if (inventory.quantity === 0) {
      return "No more products. Please make a different selection";
    }
  }

  getChange(product, payment) {
    let price = this.data.selections[product].price;
    let balance = payment - price;
    let changes = {};
   
    Object.entries(this.data.coins).forEach(([key, value]) => {
      let amountNeeded = Math.floor(balance / value.value);
      if (value.count !== 0) {
        value.count -= amountNeeded;
        balance -= amountNeeded * value.value;
        if (amountNeeded) {
          changes = Object.assign(changes, {
            [key]: amountNeeded
          });
        }
      }
    });

    let changesAmount = Object.entries(changes);
    let coinChanges = [];
    changesAmount.map((coin) => {
      coinChanges.push(coin.join(": "));
    });
    return ` ${coinChanges.join(" ")}`;
  }
}

module.exports = VendingMachine;
