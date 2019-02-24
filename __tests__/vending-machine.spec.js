const VendingMachine = require("../src/vending-machine.js");

describe("State of Vending Machine", () => {
  let MachineConstructor;
  beforeEach(() => {
    MachineConstructor = new VendingMachine("../selections.json");
  });

  describe("Products Properties", () => {
    // it("should return name and quantity as user picks an invalid slot", () => {
    //   expect(MachineConstructor.getProductCount("A3")).toThrow(
    //     "No such products exist"
    //   );
    // });
    it("should return name and quantity as user picks a valid slot", () => {
      expect(MachineConstructor.getProductCount("A1")).toEqual({
        name: "Honey Butter Chips",
        quantity: 15
      });
    });
    it("should return name and price as user picks a slot", () => {
      expect(MachineConstructor.getProductPrice("B1")).toEqual({
        name: "Nerds",
        price: 4.5
      });
    });
  });

  describe("Current Inventory", () => {
    it("should return products' name and amounts in inventory", () => {
      expect(MachineConstructor.printInventory()).toEqual(
        "15 Honey Butter Chips, 15 Sugarpova, 15 Nerds, 15 Hersheys"
      );
    });
  });

  describe("Refill Inventory", () => {
    it("should restock all products in Inventory", () => {
      expect(MachineConstructor.restockInventory()).toBe(60);
    });
  });

  describe("Refill Coins", () => {
    it("should refill all coins types", () => {
      expect(MachineConstructor.refillCoins()).toBe(75);
    });
  });



  describe("Payment", () => {
    it("should return change and quantity remains static as payment is less than price", () => {
      expect(MachineConstructor.getTransaction("A2", 2.0)).toEqual({
        name: "Sugarpova",
        change: 2.0,
        quantity: 15
      });
    });
    it("should dispense item and update quantity as payment is equal to price", () => {
      expect(MachineConstructor.getTransaction("A1", 3.0)).toEqual({
        name: "Honey Butter Chips",
        change: 0.0,
        quantity: 14
      });
    });
    it("should dispense item and update quantity as payment is larger than price", () => {
      expect(MachineConstructor.getTransaction("B2", 7.0)).toEqual({
        name: "Hersheys",
        change: 2.0,
        quantity: 14
      });
    });
  });

  //   describe("Coins Return", () => {
  //     it("should return change as payment is larger than price")
  //     expect(MachineConstructor.getChange("A2", 5.0)).toEqual({
  //     change: 1.5,
  //     toonies: 1,
  //     quarters: 2
  //     })
  // })
});
