const VendingMachine = require("../src/vending-machine");

describe("vending machine", () => {
  let test = {};

  beforeEach(() => {
    test.inventory = {
      1: {
        productId: 1,
        productName: "Honey Butter Chips",
        productQuantity: 10,
        productPrice: 3.0
      },
      2: {
        productId: 2,
        productName: "Ruts Candy",
        productQuantity: 10,
        productPrice: 2.85
      },
      3: {
        productId: 3,
        productName: "Sugarpova",
        productQuantity: 10,
        productPrice: 3.6
      },
      4: {
        productId: 4,
        productName: "Nerds",
        productQuantity: 10,
        productPrice: 4.1
      },
      5: {
        productId: 5,
        productName: "Hersheys",
        productQuantity: 10,
        productPrice: 5.0
      }
    };
    test.vendingMachine = new VendingMachine(test.inventory);
  });

  describe('.printInventory', () => {
    beforeEach(() => {
      test.vendingMachine = new VendingMachine(test.inventory);
    });

    it('the machine should print out the test inventory', () => {
      const result = test.vendingMachine.printInventory()
      expect(result).toEqual(true)
    })
  });

  
});
