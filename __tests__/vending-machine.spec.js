const VendingMachine = require("../src/vending-machine.js");

describe("State of Vending Machine", () => {
  let MachineConstructor;
  beforeEach(() => {
    MachineConstructor = new VendingMachine("../selections.json");
  });


describe("Products Properties", () => {
  it("Machine to return name and quantity of selected items", () => {
    expect(MachineConstructor.getProductCount("Honey Butter Chips")).toEqual({
      name: "Honey Butter Chips",
      quantity: 10
    });
  });
  it("Machine to return name and price of selected items", () => {
    expect(MachineConstructor.getProductPrice("Honey Butter Chips")).toEqual({
      name: "Honey Butter Chips",
      price: 3.0
  })
});
});

describe("Payment", () => {
  it("should return item as payment is equal to price", () => {
    expect(MachineConstructor.getPayment("Honey Butter Chips", 3.00)).toEqual({
      name: "Honey Butter Chips", change: 0, quantity: 9
    })
  })
  it("should return change as payment is more than price", () => {
  expect(MachineConstructor.getPayment("Honey Butter Chips", 4.00)).toEqual({
    name: "Honey Butter Chips", change: 1.0, quantity: 9
  })
});
})

});

