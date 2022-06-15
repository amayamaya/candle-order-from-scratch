import { useState } from 'react';
import './App.css';
import SizeDropdown from './SizeDropdown';
import ScentDropdown from './ScentDropdown';
import GlassDropdown from './GlassDropdown';
import Candle from './candle';

function App() {
  const [size, setSize] = useState(2);
  const [scent, setScent] = useState(1);
  const [glass, setGlass] = useState(2);

  return (
    <div className="App">
      <Candle sizeId={size} scentId={scent} glassId={glass} />
      <h1>Hello You! Time to make some magic.</h1>
      <div className="placeholder">
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
