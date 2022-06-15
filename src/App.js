import { useState } from 'react';
import './App.css';
import SizeDropdown from './SizeDropdown';
import ScentDropdown from './ScentDropdown';
import GlassDropdown from './GlassDropdown';
import Candle from './candle';
import CustomerNameInput from './customerNameInput';

function App() {
  const [size, setSize] = useState(2);
  const [scent, setScent] = useState(1);
  const [glass, setGlass] = useState(2);
  const [customerName, setCustomerName] = useState(['']);

  return (
    <div className="App">
      <Candle sizeId={size} scentId={scent} glassId={glass} />
      <h1>Time to make some magic for {customerName}!</h1>
      <div className="placeholder">
        <CustomerNameInput setCustomerName={setCustomerName} />
        <section className="dropdowns">
          <SizeDropdown setSize={setSize} />
          <ScentDropdown setScent={setScent} />
          <GlassDropdown setGlass={setGlass} />
        </section>
      </div>
    </div>
  );
}

export default App;
