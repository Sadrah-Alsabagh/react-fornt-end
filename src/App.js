import './App.css';
import Person from './components/Person';

function App() {

  return (
    <div className="App">
      <h1 className="header" data-testid="appName"> Identity Form App </h1>
      <Person />
    </div>
  );
}

export default App;
