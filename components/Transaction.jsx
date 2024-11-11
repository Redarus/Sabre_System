import React, { useContext, useState } from 'react';
import { InventoryContext } from '../InventoryContext';

const TransactionForm = () => {
  const { performTransaction } = useContext(InventoryContext);
  const [actions, setActions] = useState([{ name: '', type: 'release', quantity: 0 }]);

  const handleChange = (index, field, value) => {
    const newActions = [...actions];
    newActions[index][field] = field === 'quantity' ? parseInt(value, 10) : value;
    setActions(newActions);
  };

  const addAction = () => {
    if (actions.length < 2) {
      setActions([...actions, { name: '', type: 'release', quantity: 0 }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performTransaction(actions);
    setActions([{ name: '', type: 'release', quantity: 0 }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Perform Transaction</h2>
      {actions.map((action, index) => (
        <div key={index}>
          <select
            value={action.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          >
            <option value="">Select Item</option>
            <option value="Dining table">Dining table</option>
            <option value="Coffee maker">Coffee maker</option>
            <option value="Aircon">Aircon</option>
          </select>
          <select
            value={action.type}
            onChange={(e) => handleChange(index, 'type', e.target.value)}
          >
            <option value="release">Release</option>
            <option value="add">Add</option>
          </select>
          <input
            type="number"
            value={action.quantity}
            onChange={(e) => handleChange(index, 'quantity', e.target.value)}
            min="0"
          />
        </div>
      ))}
      <button type="button" onClick={addAction}>Add Action</button>
      <button type="submit">Submit Transaction</button>
    </form>
  );
};

export default TransactionForm;
