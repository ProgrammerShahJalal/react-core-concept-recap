import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';

function App() {
  return (
    <div className="App container">
      <LoadUsers></LoadUsers>
      <MyComponent name="Phone" price="348563"></MyComponent>
      <MyComponent name="pen" price="10"></MyComponent>
      <MyComponent name="watch" price="3435"></MyComponent>
      <MyComponent name="laptop" price="354664"></MyComponent>
      <MyComponent name="mac pro" price="999999"></MyComponent>
      <MyComponent name="keybord" price="760"></MyComponent>
    </div>
  );
}
function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className="component">
      <h1>Users loaded: {users.length}</h1>
      <div className="users">
        {
          users.map(user => {
            return (
              <div>
                <h3>Name: {user.name}</h3>
                <p>email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function Users(props) {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}
function MyComponent(props) {
  const [points, setPoints] = useState(1);


  const hadleAddPoints = () => {
    setPoints(points * 2)
  }
  return (
    <div className="component">
      <h1>My component</h1>
      <h3>Name: {props.name}, Price: {props.price} and
        <span><br></br></span>  points {points}</h3>
      <button onClick={hadleAddPoints}>Add Points</button>
      <p className="paragraph">React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
        Released by Facebook in 2013, React is a JavaScript library for building modern applications. React is used for handling the view layer and can be used for development of both web and mobile applications.</p>
    </div>
  );
}
export default App;
