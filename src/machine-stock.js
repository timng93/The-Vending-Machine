const MachineStock = (initialStock, totalMachineSlots) => {
  const inventory = {};
  const machineSlots = totalMachineSlots;
  for (let i = 1; i < machineSlots + 1; i++) {
    inventory[i] = initialStock[i - 1];
  }
  return inventory;
};

module.exports = MachineStock;
