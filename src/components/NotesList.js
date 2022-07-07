import React from "react"
import create from "./icons/create.svg"
import close from "./icons/close.svg"
import { nanoid } from 'nanoid'
import Draggable from "react-draggable";

const NotesNav = ({notes, setNotes}) => {

    function changeCurrentNote(obj) {
        setNotes(prevNotes => prevNotes.map(
            x => {
                if (x === obj) {return {...obj, isCurrent: true}}
                else {return {...x, isCurrent: false}}
            }
        ))
    }

    function closeNote(obj) {
        setNotes(prevNotes => prevNotes.filter(note => note !== obj))
    }

    function addNote() {
        setNotes(prevNotes => ([...prevNotes, 
            {title: "Note Title", content: "Write any useful information here!", isCurrent: false, id: nanoid()}
        ]))
    }

    function NoteNames() {
        let nameList = notes.map(obj => (
            <div key={obj.id}>
                <div className="note-list">
                    <button className="change-note" onClick={() => changeCurrentNote(obj)}>{obj.title}</button>
                    {obj.isCurrent === false && <img alt="Close" id="close" onClick={() => closeNote(obj)} src={close} />}
                    {obj.isCurrent && <div style={{height: "31px"}}></div>}
                </div>
                <hr className="note-list-hr" />
            </div>
        ))
        return nameList
    }

    return (
        <Draggable>
            <div id="display-notes">
                <h3 style={{cursor: "pointer"}}>Notes</h3>
                <hr className="note-list-hr"/>
                <NoteNames />
                <button id="create-button" onClick={addNote}><img alt="Create Note" src={create}/></button>
            </div>
        </Draggable>
    )
}

export default NotesNav