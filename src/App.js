import { useEffect, useState } from 'react';
import Form from './Form';
import './App.css';
import { supabase } from './client.js';
import Intro from './Intro';

function App() {
  // State that holds an array of all posts
  const [posts, setPosts] = useState([]);

  //rerender the page when the posts state gets updated
  useEffect(() => {
    getData();
  }, [posts]);

  // get request from the db with all posts
  const getData = async () => {
    const { data, error } = await supabase.from('Posts').select();
    setPosts(data);
  };


  const mappedPosts = posts.map((element, idx) => {
    return (
      <div className="postDiv" key={`post-${idx}`}>
        <p className="divider">➳➳➳➳➳➳➳ ⚘ ➳➳➳➳➳➳➳</p>

        <p  style={{backgroundColor: element.bg_color}}  className="subMessage">{element.message}</p>
        <div className='subNameDiv'>

        <h4  style={{backgroundColor: element.bg_color}}  className="subName">{element.name}</h4>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <Intro />
      {posts ? mappedPosts : <></>}
      <Form posts={posts} getData={getData} />
    </div>
  );
}

export default App;
