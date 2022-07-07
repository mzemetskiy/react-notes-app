import React from "react"
import center from "./icons/align-center.svg"
import justify from "./icons/align-justify.svg"
import left from "./icons/align-left.svg"
import right from "./icons/align-right.svg"
import clear from "./icons/clear.svg"
import minimize from "./icons/minimize.svg"
import trash from "./icons/trash.svg"
import zoom from "./icons/zoom.svg"
import { nanoid } from 'nanoid'

const NotesMenu = ({styles, setStyles, setNotes}) => {

    function handleStyle(name, value) {
        setStyles(prevStyles => ({...prevStyles, [name]: value}))
    }

    return (
        <ul id="menu">
            <li title="Scale Note Up" onClick={() => handleStyle("scale", (styles.scale * 1.25))}><img alt="Zoom" className="menu-icon" src={zoom}/></li>
            <li title="Scale Note Down" onClick={() => handleStyle("scale", (styles.scale * 0.8))}><img alt="Minimize" className="menu-icon" src={minimize}/></li>
            <div className="menu-break"></div>
            <li title="Text Align Center" onClick={() => handleStyle("align", "center")}><img alt="Align Center" className="menu-icon" src={center}/></li>
            <li title="Text Align Left" onClick={() => handleStyle("align", "left")}><img alt="Align Left" className="menu-icon" src={left}/></li>
            <li title="Text Align Right" onClick={() => handleStyle("align", "right")}><img alt="Align Right" className="menu-icon" src={right}/></li>
            <li title="Text Align Justify" onClick={() => handleStyle("align", "justify")}><img alt="Align Justify" className="menu-icon" src={justify}/></li>
            <div className="menu-break"></div>
            <li title="Clear Formatting" onClick={() => setStyles({scale: 1, align: "justify"})}><img alt="Clear Styles" className="menu-icon" src={clear}/></li>
            <li
                title="Reset Notes" 
                onClick={() => setNotes([{title: "Note Title", content: "Write any useful information here!", isCurrent: true, id: nanoid()}])} 
                id="trash"
            >
                <img alt="Trash" className="menu-icon" src={trash}/>
            </li>
        </ul>
    )
}

export default NotesMenu