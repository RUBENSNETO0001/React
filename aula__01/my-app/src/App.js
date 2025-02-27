
import './App.css';

function App() {
  function sum(a, b){
    return a + b;
  }
  const url = "https://www.infomoney.com.br/wp-content/uploads/2024/11/2024-11-26T012021Z_1_LYNXNPEKAP00Z_RTROPTP_4_BRAZIL-BOLSONARO.jpg?fit=2658%2C1852&quality=50&strip=all" 
  return (
    // maneira correta de declara uma class e  ClassNome
    <div className="App">
      <p>A soma é {sum(2,3)}</p>
      <img src = {url} alt="minha pica" height= "150px"/>
    </div>
  );
}

export default App;
