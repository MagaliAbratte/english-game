import './App.css'
import { IrregularVerbsGame } from './IrregularVerbs'
import backgroundImg from './assets/fondo.jpg';

function App() {
  return (
    <div className="app-background" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <IrregularVerbsGame />
    </div>
  )
}

export default App
