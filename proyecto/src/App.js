import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacto from './components/Home/Contacto';
import SobreNosotros from './components/Home/SobreNosotros';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sobre-nosotros" component={SobreNosotros} />
        <Route path="/contacto" component={Contacto} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
}

export default App;
