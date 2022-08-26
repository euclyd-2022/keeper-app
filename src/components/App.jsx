import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  function addItem(item) {
    setNotes((prevItem) => {
      return [...prevItem, item];
    });
  }
  return (
    <div>
      <Header />

      <CreateArea additem={addItem} />
      {notes.map((noteItem, index) => {
        console.log(index);
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            key={index}
            id={index}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
