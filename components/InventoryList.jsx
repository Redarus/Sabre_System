import React, { useContext } from 'react';
import { InventoryContext } from '../InventoryContext';

const InventoryList = () => {
  const { inventory } = useContext(InventoryContext);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.code}>
            {item.name}: {item.quantity} in stock
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
