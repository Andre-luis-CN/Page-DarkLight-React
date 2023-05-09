import { useState } from 'react';
import './App.css';
import Topo from './components/Topo';
import SecaoBanner from './components/SecaoBanner';
import SecaoExperiencias from './components/SecaoExperiencias';
import Rodape from './components/Rodape';

function App() {
  const [ temaEscuro, setTemaEscuro ] = useState(false)

  const AlterarCor = () => {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <div className="App">
      <Topo clickAlterarCor = { AlterarCor } temaEscuro = { temaEscuro } setTemaEscuro = { setTemaEscuro } />
      <SecaoBanner temaEscuro = { temaEscuro }/>
      <SecaoExperiencias temaEscuro = { temaEscuro }/>
      <Rodape temaEscuro = { temaEscuro }/>
    </div>
  );
}

export default App;
