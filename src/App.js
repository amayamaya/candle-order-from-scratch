import { useState } from 'react';
import './App.css';
import SizeDropdown from './SizeDropdown';
import ScentDropdown from './ScentDropdown';
import GlassDropdown from './GlassDropdown';
import Candle from './candle';
import CustomerNameInput from './customerNameInput';
import RequestList from './RequestList';
import RequestForm from './RequestForm';

function App() {
  const [size, setSize] = useState(1);
  const [scent, setScent] = useState(1);
  const [glass, setGlass] = useState(1);
  const [customerName, setCustomerName] = useState(['someone special']);
  const [requests, setRequests] = useState(['List Requests Here!']);
  const [requestInput, setRequestInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setRequests([...requests, requestInput]);
    setRequestInput('');
  }

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
        <section className="requests">
          <RequestForm
            handleSubmit={handleSubmit}
            requestInput={requestInput}
            setRequestInput={setRequestInput}
          />
          <RequestList requests={requests} />
        </section>
      </div>
    </div>
  );
}

export default App;
