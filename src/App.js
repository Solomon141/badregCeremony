import { useState } from 'react';
import './App.css';
import Logo from './logo/Badreg.jpg';
import { Button, CheckBox } from 'react-bootstrap';

function App() {
  const [aggreed, setAgreed] = useState(false);

  const registerUser = () => {
    console.log('first');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', rowGap: 10 }}>
            <img src={Logo} style={{ height: 120, width: 120 }} alt="logo" />
            <input placeholder="Name" className="form-control" />
            <input placeholder="Status" className="form-control" />
            <input placeholder="Telephone" className="form-control" />
            <input placeholder="Address" className="form-control" />
            <input placeholder="Email" className="form-control" />

            
            <CheckBox />
            <Button onClick={() => registerUser()}> REGISTER </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
