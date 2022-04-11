import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const heros = ['Masum', 'Haque', 'Khan', 'Sharif', 'Billah'];
  const products = [
    {name: 'Photoshop', price: '$90'},
    {name: 'Illustrator', price: '$100'},
    {name: 'PDF reader', price: '$200'}
];

// name= {products[0].name} price= {products[0].price}
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          I am react Person
        </h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
          {
            products.map(product=> <li>{product.name} {product.price}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product= {pd}></Product>)
        }
        <Person></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, [])
  return(
    <div>
      <h5>Dynamic User: {users.length}</h5>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button> <button onClick={() => setCount(count + 1)}>Increase</button> 
    </div>
  )
}

function Product(props){
  const productStyle= {
    border: '1px solid blue',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '250px',
    width: '250px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return (
    <div style= {productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border: '2px solid red',
    width: '1000px',
    margin: '10px'
  }
  // console.log(props);
  return (
    <div style={personStyle}>
      <h1>My Name : {props.name}</h1>
      <h3>My Profession : {props.profession}</h3>
    </div>
  )
}

export default App;
