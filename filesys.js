const fs = require('fs');


const addNote = (title, body) => {
    const notes = listNotes();
    notes.push({
        title,
        body
    });
    saveNote(notes);
}


const listNotes = () => {
    const data = JSON.parse(fs.readFileSync("./notes.json").toString());
    return data;
    
}

const saveNote = (notes) => {
    fs.writeFileSync("./notes.json", JSON.stringify(notes));
}


// addNote("note2", "hello there!");
module.exports = {
    addNote
}