const MachineStock = require("./machine-stock");

class VendingMachine {
  constructor(initialStock) {
    this.numberOfSlots = 5;

    this.coinsStock = {
      toonies: { quantity: 100, value: 2.0 },
      loonies: { quantity: 100, value: 1.0 },
      quarters: { quantity: 100, value: 0.25 },
      dimes: { quantity: 100, value: 0.1 },
      nickels: { quantity: 100, value: 0.05 }
    };
    // this.coinsStockKeys = Object.keys(this.coinsStock);

    this.inventory = MachineStock(initialStock, this.numberOfSlots);
    // this.inventoryKeys = Object.keys(this.inventory);
  }

  printInventory() {
    //this method is to console log the output for each item in the inventory
    // this.inventoryKeys.forEach( key => {
    console.log(this.inventory);
    // });
    return true;
  }
}

module.exports = VendingMachine;
