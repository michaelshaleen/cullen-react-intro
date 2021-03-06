//import logo from './logo.svg';
import './App.css';
//fancy import syntax

// import React from 'react';
// const useState = React.useState;
// //

//OBJECT DESTRUCTURING
import { useState } from 'react';
//client side (REACT) equivalent of import
//and assigning to variables
//import HelloCullen from './HelloCullen';

//APP IS A COMPONENT
// REACT IS COMPOSED OF COMPONENTS
//COMPONENTS ARE FUNCTIONS THAT RETURN JSX
//YOU CAN NEST COMPONENTS
function App() {
  //wouldn't render
  //let Count = 0;

  //useState is a 'hook'
  // tool used inside react components
  //variables kittyKat to start
  //use when changing values of name
  const [name, setName] = useState('Luca');
  //let Name = 'Luca';
  //let myH1 = <h1>Go home, {Name}, you're drunk?????</h1>;
  //setDrinkCount function to change drinkCount
  //drinkCount is current val of state

  //ARRAY DESTRUCTURING
  const returnValOfUseState = useState(1);
  const currentState = returnValOfUseState[0];
  const setCount = returnValOfUseState[1];
  const [drinkCount, setDrinkCount] = useState(1);

  //"HTML" is actually "JSX"
  //"JAVASCRIPT EXTENDED"
  // AS IN APP.JSX REFERS TO MYH1 SET UP
  const soberUP = () => {
    // pass this in onClick
    setDrinkCount(0);
  };

  return (
    <div>
      <h1>Cullen Training Hour!</h1>
      <p>
        {name} has had {drinkCount} trainings today
      </p>

      <button onClick={() => setDrinkCount(drinkCount + 1)}>Train up</button>

      <button onClick={soberUP}>Rest Day</button>

      <input
        placeholder="Name please"
        onChange={(event) => {
          console.log('changing name', event.target.value);
          setName(event.target.value);
        }}
      />
    </div>
  );
}
// event.target === $(this)
//event.target.value === $(this).val();
export default App;
