import './App.css';
import Helloworld from './components/helloworld';
import Meunome from './components/Meunome'

const nono = 'joao'
const nome = prompt('Qual e seu nome? ');
function App() {
  return (
    <div className="App">
      <Helloworld/> 
      <Meunome nome={nome}/>
      <Meunome nome="maria"/>
      <Meunome nome={nono}/>
    </div>
  );
}

export default App;
