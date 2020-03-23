import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import MenuSuperior from './components/MenuSuperior';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <MenuSuperior />
        {<Routes />}
      </BrowserRouter>
    </div>
  );
}

export default App;
