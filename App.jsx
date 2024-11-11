import React from 'react';
import InventoryProvider from './InventoryContext';
import InventoryList from './components/InventoryList';
import TransactionForm from './components/TransactionForm';

const App = () => (
  <InventoryProvider>
    <div className="app">
      <h1>Furniture Inventory System</h1>
      <InventoryList />
      <TransactionForm />
    </div>
  </InventoryProvider>
);

export default App;
