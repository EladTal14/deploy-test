import logo from './logo.svg';
import './App.css';
import boat from './assets/images/boat-in-images.jpg'
import boatInIcons from './assets/icons/boat-in-icons.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={boat} className="App-logo" alt="logo" />
        <img src={boatInIcons} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
