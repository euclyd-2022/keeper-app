import React, { useState } from "react";

function CreateArea(props) {
  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setItem((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.additem(item);
    setItem({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={item.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={item.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
