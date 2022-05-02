import { useState, useEffect } from 'react';
import { supabase } from './client';
import './Form.css';

function Form({ getData, posts }) {
  // State that holds form data
  const colors = ['#ffb4b4', '#e1c693', '#8dd0b3', '#d9b0b0', '#e4d3ff'];
  const [colorNum, setColorNum] = useState(0);
  const [form, setForm] = useState({
    name: '',
    message: '',
    bg_color: colors[colorNum],
  });


  //post request handler
  const createData = async () => {
    // post data to DB
    const { data, error } = await supabase
      .from('Posts')
      .insert([
        { name: form.name, message: form.message, bg_color: form.bg_color },
      ]);
    setForm({
      name: '',
      message: '',
      bg_color: '',
    });
    setColorNum(0)
    getData();
  };

  useEffect(()=>{

  console.log("CHANGE")
  setForm({...form, bg_color: colors[colorNum]})

  },[colorNum])

  const colorChange = (e) => {
    if(colorNum <= 3){
      setColorNum(colorNum+1);
    } else{
      
      setColorNum(0);
    }
    
  };

  return (
    <div className="form">
      <p className="divider">➳➳➳➳➳➳➳ ⚘ ➳➳➳➳➳➳➳</p>
      <div className="formMessage">
        <label className="text" htmlFor="message">
          Message:
        </label>
        <textarea
          style={{ backgroundColor: colors[colorNum] }}
          className="formMessageTextBox"
          value={form.message}
          type="text"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="formName">
          <label htmlFor="name" className="text">
            Name:
          </label>
          <textarea
            style={{ backgroundColor: colors[colorNum] }}
            className="formNameTextBox"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            value={form.name}
            type="text"
          />
        </div>
        <div className="colorSelect">
        <label htmlFor="name" className="text">
            Colour:
          </label>
          <button
            onClick={(e) => colorChange(e)}
            style={{ backgroundColor: colors[colorNum] }}
            className="select"
          ></button>
        </div>
        <div className="submitDiv">
          <button className="submit" onClick={createData}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Form;
