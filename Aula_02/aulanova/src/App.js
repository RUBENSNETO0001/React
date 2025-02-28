import './App.css';
import Helloworld from './components/helloworld';
import Meunome from './components/Meunome'
import Anime from './components/anime'
import Frase from './components/Frase'

const nono = 'joao'
function App() {
  return (
    <div className="App">
      <Helloworld/> 
      <Meunome nome="maria"/>
      <Meunome nome={nono}/>
      <span>outro componente</span>
      <Anime nome = 'Luffy' idade = '20' profissao = 'Capitão do chapel de palha' foto = 'https://sm.ign.com/ign_br/screenshot/default/imagem-2023-12-15-163503393_5d5p.jpg'/>
      <Frase />
      <Frase />
    </div>
  );
}

export default App;
