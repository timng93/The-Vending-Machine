const VendingMachine = require("../src/vending-machine.js");

describe("State of Vending Machine", () => {
  let MachineConstructor;
  beforeEach(() => {
    MachineConstructor = new VendingMachine("../selections.json");
  });


describe("Products Properties", () => {
  it("Machine to return name and quantity of selected items", () => {
    expect(MachineConstructor.getProduct("Honey Butter Chips")).toEqual({
      name: "Honey Butter Chips",
      quantity: 10
    });
  });
});

});

