import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExtrenalUsers></ExtrenalUsers>
    </div>
    );
}

function ExtrenalUsers(){
  const [users, setUsers] = useState([])
  // useEffect(() =>{},[])
  useEffect(() =>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h1>Extrenal Users</h1>
      <p>{users.length}</p>

      {
        users.map(user => <User name={user.name} users ={user.email}></User>)
      }
    </div>
  );
}
function User(props){
  return (
    <div style={{border: '2px solid red', margin:'20px'}}>
       <h3>Name: {props.name}</h3>
       <p>Email:{props.users}</p>
  </div>
  )
}


function Counter(){
  const[count, setCount]= useState(83)
   
  const increaseCount = () => setCount(count + 1);
  const decreesh = () => setCount(count - 1);




  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
   <di>
    <h1>conut: {count}</h1>
    <button onClick={increaseCount}>increase</button>
   <button onClick={decreesh}>decresh</button>
   </di>

  )
}

/*
  const products = [
    {name: 'laptop', price: '53333'},
    {name: 'phone', price: '64333'},
    {name: 'watch', price: '744'},
    {name: 'tablet', price: '70000'},
  ]

 */

// {
  // products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// {/* <Product name="laptop" price="55000"></Product>
// <Product name="phone" price="64400"></ Product> */}


function Product(props){
  return (
    <div className='products'>
      <h3>Name: {props.name} </h3>
      <p>Price: {props.price} </p>
    </div>
  )
}


export default App;
