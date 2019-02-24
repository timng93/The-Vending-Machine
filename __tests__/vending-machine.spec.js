const VendingMachine = require("../src/vending-machine.js");

describe("State of Vending Machine", () => {
  let MachineConstructor;
  beforeEach(() => {
    MachineConstructor = new VendingMachine("../selections.json");
  });

  describe("Products Properties", () => {
    it("should return name and quantity as user picks a slot", () => {
      expect(MachineConstructor.getProductCount("A1")).toEqual({
        name: "Honey Butter Chips",
        quantity: 10
      });
    });
    it("should return name and price as user picks a slot", () => {
      expect(MachineConstructor.getProductPrice("B1")).toEqual({
        name: "Nerds",
        price: 4.5
      });
    });
  });

  describe("Products Inventory", () => {
    it("should return products' name and amounts in inventory", () => {
      expect(MachineConstructor.printInventory()).toEqual(
        "10 Honey Butter Chips, 5 Sugarpova, 15 Nerds, 20 Hersheys"
      );
    });
  });

  describe("Payment", () => {
    it("should return change and quantity remains static as payment is less than price", () => {
      expect(MachineConstructor.getTransaction("A2", 2.0)).toEqual({
        name: "Sugarpova",
        change: 2.0,
        quantity: 5
      });
    });
    it("should dispense item and update quantity as payment is equal to price", () => {
      expect(MachineConstructor.getTransaction("A1", 3.0)).toEqual({
        name: "Honey Butter Chips",
        change: 0.0,
        quantity: 9
      });
    });
    it("should dispense item and update quantity as payment is larger than price", () => {
      expect(MachineConstructor.getTransaction("B2", 7.0)).toEqual({
        name: "Hersheys",
        change: 2.0,
        quantity: 19
      });
    });
    // test('Vending machine undefined inventory', () => {
    //   vendingMachine.inventory = undefined;
    //   expect(() => vendingMachine.getInventory()).toThrow('Empty inventory');
    // });
  });
});
