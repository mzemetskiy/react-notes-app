import React, {useState} from "react";
import NotesList from "./components/NotesList"
import NotesEdit from "./components/NotesEdit"
import NotesMenu from "./components/NotesMenu";
import "./App.css"
import { nanoid } from 'nanoid'

const App = () => {
  const [notes, setNotes] = useState([
    {title: "Note Title", content: "Write any useful information here!", isCurrent: true, id: nanoid()}
  ])

  const [styles, setStyles] = useState({scale: 1, align: "justify"})
  console.log(styles)

  let scaleStyle = {
    scale: `${styles.scale}`,
  }

  let alignStyle = {
    textAlign: `${styles.align}`,
  }

  return (
    <>
      <NotesMenu 
        styles={styles}
        setStyles={setStyles}
        setNotes={setNotes}
      />
      <NotesEdit  
        notes={notes}
        setNotes={setNotes}
        scaleStyle={scaleStyle}
        alignStyle={alignStyle}
      />
      <NotesList 
        notes={notes}
        setNotes={setNotes} 
      />
    </>
  )
}

export default App