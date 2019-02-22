const MachineStock = require("../src/machine-stock");

describe("state of stocking machine", () => {
  const test = {};

  test.slots = 5;

  test.initialStock = [
    {
      productId: 1,
      productName: "Honey Butter Chips",
      productQuantity: 10
    },
    {
      productId: 2,
      productName: "Ruts Candy",
      productQuantity: 10
    },
    {
      productId: 3,
      productName: "Sugarpova",
      productQuantity: 10
    },
    {
      productId: 4,
      productName: "Nerds",
      productQuantity: 10
    },
    {
      productId: 5,
      productName: "Hersheys",
      productQuantity: 10
    }
  ];


test.object = MachineStock( test.initialStock, test.slots);

describe("inventory", () => {
  beforeEach(() => {
    test.inventory = {
      1: {
        productId: 1,
        productName: "Honey Butter Chips",
        productQuantity: 10
      },
      2: {
        productId: 2,
        productName: "Ruts Candy",
        productQuantity: 10
      },
      3: {
        productId: 3,
        productName: "Sugarpova",
        productQuantity: 10
      },
      4: {
        productId: 4,
        productName: "Nerds",
        productQuantity: 10
      },
      5: {
        productId: 5,
        productName: "Hersheys",
        productQuantity: 10
      }
    };
  });
  it( 'machine object to match machine inventory', () => {
    expect( test.object ).toEqual( test.inventory );
  });
});
});

