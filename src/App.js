import logo from './logo.svg';
import './App.css';
import Routing from './Routing';
import Contextapi from './Contextapi';

function App() {
  return (
    <div className="App">
      <h5>this project shows how you can add a product home page to cart page and how cart iteam and ammount changes</h5>
      <Contextapi>
        <Routing/>
      </Contextapi>
    </div>
  );
}

export default App;
