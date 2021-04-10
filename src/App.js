import logo from './logo.svg';
import './App.css';
import View from './components/View';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <View />

      </header>
    </div>
  );
}

export default App;
