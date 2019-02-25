const VendingMachine = require("../src/vending-machine.js");

describe("The Vending Machine", () => {
  let MachineConstructor;
  beforeEach(() => {
    MachineConstructor = new VendingMachine("../selections.json");
  });

  describe("Select Products", () => {
    it("should return name and quantity as user picks a valid slot", () => {
      expect(MachineConstructor.getProductCount("A1")).toEqual({
        name: "Honey Butter Chips",
        quantity: 10
      });
    });
    it("should return name and price as user picks a valid slot", () => {
      expect(MachineConstructor.getProductPrice("B1")).toEqual({
        name: "Nerds",
        price: 4.5
      });
    });
  });

  describe("Current Inventory", () => {
    it("should return products' names and amounts in inventory", () => {
      expect(MachineConstructor.printInventory()).toEqual(
        "10 Honey Butter Chips, 12 Sugarpova, 11 Nerds, 8 Hersheys"
      );
    });
    it("should return error as inventory for a particular product is empty", () => {
      expect(MachineConstructor.emptyInventory("A1")).toEqual(
        "No more products. Please make a different selection"
      );
    });
  });

  describe("Refill Inventory", () => {
    it("should restock 15 for each product in machine", () => {
      expect(MachineConstructor.restockInventory()).toBe(60);
    });
  });

  describe("Current Coins Inventory", () => {
    it("should return coins' names and amounts in inventory", () => {
      expect(MachineConstructor.printCoinsInventory()).toEqual(
        "30 Nickles, 20 Dimes, 25 Quarters, 34 Loonies, 12 Toonies"
      );
    });
  });

  describe("Refill Coins", () => {
    it("should refill 50 coins for each coin type", () => {
      expect(MachineConstructor.refillCoins()).toBe(250);
    });
  });

  describe("Payment", () => {
    it("should return error as payment exceeds 10 dollars", () => {
      expect(MachineConstructor.invalidPayment(15)).toEqual(
        "Payment exceeds 10 dollars. Please try again with smaller bills"
      );
    });
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

  describe("Coins Return", () => {
    it("return coins for changes as user picks a valid slot", () => {
      expect(MachineConstructor.getChange("A2", 5.0)).toEqual(" nickles: 30");
    });
  });
});
