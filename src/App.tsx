import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";
type ShowType = {
  userId:number
  id:number
  title:string
  completed:boolean
}
function App() {
  const [show,setShow]=useState<ShowType[]>([])
  const showOff=()=>{
      setShow([])
  }
  const showUp=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => setShow(json))
  }
  return (
    <div className="App">
        <Button name={'ShowOff'} callback={showOff}/>
      <ul>
        {show.map(el=>{
          return(
              <li key={el.id}>
                <span>{el.title}</span>
                <span>{el.completed}</span>
              </li>
          )
        })}
      </ul>
    <Button name={'Show'} callback={showUp}/>
    </div>
  );
}

export default App;
