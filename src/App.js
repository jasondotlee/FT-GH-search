import './App.css';
import logo from'./img/logo.png'
import View from './components/View';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className={['App-logo']} src={logo} />
      </header>
      <View />
    </div>
  );
}

export default App;
