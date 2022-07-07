import React from "react"

const NotesEdit = ({notes, setNotes, scaleStyle, alignStyle}) => {
    let currentNote = notes.find(x => x.isCurrent === true)

    function handleChange(event) {
        let {name, value} = event.target
        setNotes(prevNotes => prevNotes.map(obj => {
            if (obj.isCurrent) {return {...obj, [name]: value}}
            else {return obj}
        }))
    }

    let chars = currentNote.content.length + currentNote.title.length
    
    let words = currentNote.content.split(" ").length + currentNote.title.split(" ").length

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    let date = new Date()
    let currentDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    
    return (
        <div id="note" style={scaleStyle}>
            <input style={alignStyle} id="title" type="text" name="title" value={notes[notes.indexOf(currentNote)].title} onChange={handleChange} />
            <textarea style={alignStyle} id="content" name="content" value={notes[notes.indexOf(currentNote)].content} onChange={handleChange} />
            <div id="information"><span>Chars {chars}, Words {words}</span><span>{currentDate}</span></div>
        </div>
    )
}

export default NotesEdit