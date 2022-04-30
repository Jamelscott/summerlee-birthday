import { useState} from "react";
import { supabase } from "./client";

function Form({getData, posts}) {
  // State that holds form data
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  //post request handler
  const createData = async () => {
    // post data to DB
    const { data, error } = await supabase
      .from("Posts")
      .insert([{ name: form.name, message: form.message }]);
    setForm({
      name: "",
      message: "",
    });
    getData();
  };

  return (
    <>
      <input
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        value={form.name}
        type="text"
      ></input>
      <label htmlFor="message">Message</label>
      <input
        value={form.message}
        type="text"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      ></input>
      <button onClick={createData}>Submit</button>
    </>
  );
}

export default Form;
<></>;
