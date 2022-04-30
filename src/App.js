import { useEffect, useState } from 'react';
import Form from './Form';
import './App.css';
import {supabase} from './client.js'

function App() {
// State that holds an array of all posts
const [posts, setPosts]= useState([])

//rerender the page when the posts state gets updated
useEffect(()=>{
  getData()
},[posts])

// get request from the db with all posts
const getData = async ()=>{
  const { data, error } = await supabase
  .from('Posts')
  .select()
  setPosts(data)
}

  const mappedPosts = posts.map((element, idx)=>{
  return(
    <div key={`post-${idx}`}>
      <h2>Name: {element.name}</h2>
      <h2>Message: {element.message}</h2>
    </div>
  )
})


  return (
    <div className="App">
        <label htmlFor='name'>
            Name
        </label>
        <Form posts={posts} getData={getData}/>
        {posts ? mappedPosts : <></>}
    </div>
  );
}

export default App;
