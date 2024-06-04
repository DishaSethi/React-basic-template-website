import React,{useState} from 'react';
import "./home.css";

export const Home = () => {
  //Counter state initialised to 0
const [counter,setCounter] =useState(0);

//Function is called everytimme increment button is clicked
const handleClick1=()=>{
  //Counter state is incremented
  setCounter(counter+1);


};
//Function is called everytime decrement button is clicked
const handleClick2=()=>{
  setCounter(counter-1);
};

const handleClick=()=>{
  alert('Button Clicked!');
}
  
  return (
    <div>
     <div className='Container'>
      <div className='jumbotron-container'>
      <h1>Welcome to My React App</h1>
      <p>
      This is a Basic Jumbotron. You can personalize it <strong >however</strong> you want!
      </p>
<p>
This is a simple React app with a navbar, jumbotron, sign-in (using Firebase), and about pages
      </p>

      <button className='btn' onClick={handleClick}>
        Click Me!
      </button>
     </div>
     </div>

     <div className='Container'>
<div className='counter-container'>
<h1>
  Counter:{counter}</h1>
  <div className='btn-container'>
    <button className='btn-2' onClick={handleClick1}>Increment</button>
    <button className='btn-2' onClick={handleClick2}>Decrement</button>
  </div>

</div>
     </div>
    </div>
  );
}

// export default Home;
