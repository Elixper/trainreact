import * as React from "react";
//
import "./styles.css";
const {useEffect, useState} = React;
const axios = require('axios').default;

const fetchSomeData = () => {
  return axios.get ('https://randomuser.me/api')
  .then(({data})=> {
    // handle success
     //console.log(data.name.first);
    return JSON.stringify(data,null,2)
    
  })
  .catch(err => {
    // handle error
    console.log(err);
  });
}

export default function App() {
  const [counter, setCounter] = useState(0);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState('');

  useEffect(() => {
    fetchSomeData().then(someData => {
      setRandomUserDataJSON(someData || 'no user data found')
      setUserInfos(someData.results)
    })
  }, []);
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p> Counter is now at:   
        {counter}
      </p>
      <p>
        Here is the Random Data Fetched:
      {randomUserDataJSON}
        </p>
      <button onClick={()=>
      setCounter(counter+1)
      }>Increase Counter</button>
      <button onClick={()=> (
        setCounter(counter-1)
      )}>Decrease Counter</button>

    </div>
  );