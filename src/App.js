import { useEffect, useState } from 'react';
import Form from './Form';
import './App.css';
import { supabase } from './client.js';
import Intro from './Intro';
import music from './assets/happybirthdaysong.mp3'
import musicNotes from './assets/music.png'
import musicNotesOff from './assets/stop_music.png'

function App() {
  // State that holds an array of all posts
  const [posts, setPosts] = useState([]);
  const [toggleMusic, setToggleMusic] = useState(true)

  //rerender the page when the posts state gets updated
  useEffect(() => {
    getData();
  }, [posts]);

  useEffect(()=>{

    console.log("playing")
    if(toggleMusic){

      const x = document.getElementById("audio").play()
      
    } else{
      
      const x = document.getElementById("audio").pause()
    }

  },[toggleMusic])

  const turnOnOffMusic = ()=>{
    setToggleMusic(!toggleMusic)
  }
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
      <img onClick={turnOnOffMusic} alt="music notes" src={toggleMusic ? musicNotes : musicNotesOff} className="musicControl"/>
      <audio id="audio" alt="happy birthday music">
        <source src={music} type="audio/mp3"/>
      </audio>
      <Intro />
      {posts ? mappedPosts : <></>}
      <Form posts={posts} getData={getData} />
    </div>
  );
}

export default App;


// It's Your Birthday! by Monk Turner + Fascinoma 
// Music promoted by https://www.chosic.com/free-music/all/
// Licensed under Creative Commons: Attribution 3.0 Unported (CC BY 3.0)
// https://creativecommons.org/licenses/by/3.0/ 