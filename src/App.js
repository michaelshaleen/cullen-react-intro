import logo from './logo.svg';
import './App.css';
//client side (REACT) equivalent of import
//and assigning to variables
import HelloCullen from './HelloCullen';

//APP IS A COMPONENT
// REACT IS COMPOSED OF COMPONENTS
//COMPONENTS ARE FUNCTIONS THAT RETURN JSX
//YOU CAN NEST COMPONENTS
function App() {
  let bigName = 'self';
  let myH1 = <h1>Go home, {bigName}, you're drunk?????</h1>;

  //"HTML" is actually "JSX"
  //"JAVASCRIPT EXTENDED"
  // AS IN APP.JSX REFERS TO MYH1 SET UP
  return (
    <div className="App">
      {myH1}
      <header className="App-header">
        {/*Hello cullen is a react component. uppercamel case is convention for
        components in REACT */}
        <HelloCullen />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to win.
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
