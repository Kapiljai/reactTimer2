import React, { useEffect, useState } from 'react'
import GitHubFetch from '../FetchApiColletion/GitHubFetch'


export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  
  

  // useEffect(() => {
  //   console.log(name, "name"); 
  // }, [name]);


  // useEffect(() => {
  //   console.log(count, "count");
  // }, [count]);


  // useEffect(() => {
  //   document.title = `Count: ${count}`; 
  // }, [count]);
  return (
    <div>

      {/* <h2>Count: {count}</h2>

      <div className="form-group">
        <h2 className='mt-5'>{name}</h2>
        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
      </div>

      <button className="btn btn-primary mt-3" onClick={() => setCount(count + 1)}>Increment</button> */}
      <GitHubFetch />
    </div>
  )
}
