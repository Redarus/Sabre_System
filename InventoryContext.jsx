import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

const initialInventory = [
  { code: 'Item1', name: 'Dining table', quantity: 20 },
  { code: 'Item2', name: 'Coffee maker', quantity: 20 },
  { code: 'Item3', name: 'Aircon', quantity: 20 },
];

const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(initialInventory);
  const [transactions, setTransactions] = useState([]);

  const performTransaction = (actions) => {
    if (actions.length > 2) {
      alert('Error: Maximum of 2 actions allowed per transaction.');
      return;
    }

    const itemNames = actions.map(action => action.name);
    if (itemNames.includes('Dining table') && itemNames.includes('Coffee table')) {
      alert('Error: Cannot release Dining table and Coffee table at the same time.');
      return;
    }

    setInventory(newInventory);
    setTransactions([...transactions, actions]);
  };

  return (
    <InventoryContext.Provider value={{ inventory, performTransaction }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
