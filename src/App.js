import './App.css';
import Person from './components/Person';

function App() {

  return (
    <div className="App">
      <h1 className="header" data-testid="appName">Form </h1>
      <Person />
    </div>
  );
}

export default App;
