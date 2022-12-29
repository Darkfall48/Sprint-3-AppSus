import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const STORAGE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    get,
    // remove,
    // save,
    // getEmptyBook,
    getDefaultFilter,
    saveNote,
    getDefaultNote,
    save,
    remove,
    pinNote,
    changeNoteBackground
    // getDefaultReview,
    // saveReview,
    // removeReview
}

function query() {
    return storageService.query(STORAGE_KEY)
    // .then(notes => { 
    //     notes = notes.filter(note => note.isPinned === true)
    //     // const unPinnedNotes = notes.filter(note => note.isPinned === false)
    //     // notes.push(unPinnedNotes)
    //     return notes })
        // return updatedNotes })
}

function save(note) {
    if (note.id) {
        return storageService.put(STORAGE_KEY, note)
    } else {
        return storageService.postToStart(STORAGE_KEY, note)
    }
}

function get(noteId){
    return storageService.get(STORAGE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(STORAGE_KEY, noteId)
}

function saveNote(noteToSave) {
    const notes = _loadNotesFromStorage()
    console.log('notes', notes)
    const newNote = _createNote(noteToSave)
    notes.unshift(newNote)
    console.log('notes', notes)
    _saveNotesToStorage(notes)
    return Promise.resolve(newNote)
}

function getDefaultNote() {
    return {
        id: '',
        type: 'note-txt',
        isPinned: false,
        // txt: '' ,
        info: { txt: '' },
        bgColor:'default'
    }
}

function changeNoteBackground(chosenColor, selectedNote){
    selectedNote.bgColor = chosenColor
    console.log('selectedNote', selectedNote)
    return storageService.put(STORAGE_KEY,selectedNote) 

}

function pinNote(noteToPin) {
    console.log('noteToPin', noteToPin)
    noteToPin.isPinned = !noteToPin.isPinned
    return storageService.put(STORAGE_KEY, noteToPin)

    // .then(query)
    // .then((notes)=>{
    //     console.log('notes', notes)
    //     let pinnedNotes = notes.filter(note => note.isPinned === true)
    //     console.log('pinnedNotes', pinnedNotes)
    //     const unPinnedNotes = notes.filter(note => note.isPinned === false)
    //     console.log('unPinnedNotes', unPinnedNotes)
    //     const updatedNotes = pinnedNotes.concat(unPinnedNotes)
    //     console.log('updatedNotes', updatedNotes)
    //     return updatedNotes
    // })
}

function postToStart(note){
    return storageService.postToStart(STORAGE_KEY, note)
}

function _createNote(noteToSave) {
    return {
        id: utilService.makeId(),
        ...noteToSave,
    }
}

function _loadNotesFromStorage() {
    return utilService.loadFromStorage(STORAGE_KEY)
}
function _saveNotesToStorage() {
    return utilService.saveToStorage(STORAGE_KEY)
}

function getDefaultFilter() {
    return { type: '' }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(STORAGE_KEY)
    if (!notes || !notes.length) {

        notes = [
            {
                "id": "n101",
                "type": "note-txt",
                "isPinned": false,
                "info": { "txt": "Fullstack Me Baby!" },
                "bgColor": "default"
            }, {
                "id": "n102",
                "type": "note-txt",
                "isPinned": false,
                "info": { "txt": "Need to work on my react skill!" },
                "bgColor": "default"
            }, {
                "id": "n103",
                "type": "note-txt",
                "isPinned": false,
                "info": { "txt": "Practice promises" },
                "bgColor": "default"
            },
            // {
            //     "id": "n104",
            //     "type": "note-todos",
            //     "info": {
            //         "label": "Get my stuff together", 
            //         "todos": [{ "txt": "Driving liscence", "doneAt": null },
            //             { "txt": "Coding power", "doneAt": 187111111 }]
            //     }
            // }, {
            //     "id": "n105",
            //     "type": "note-img",
            //     "info": {
            //         "url": "http://some-img/me",
            //         "title": "Bobi and Me"
            //     },
            //     "style": { "backgroundColor": "#00d" }
            // }
        ]
    }
    // console.log('notes', notes)
    utilService.saveToStorage(STORAGE_KEY, notes)
}

        // notes = [
        //     {
        //         id: "n101",
        //         type: "note-txt",
        //         isPinned: true,
        //         info: { txt: "Fullstack Me Baby!" },
        //     },
        //     {
        //         id: "n103",
        //         type: "note-todos",
        //         info: {
        //             label: "Get my stuff together", todos: [
        //                 { txt: "Driving liscence", doneAt: null },
        //                 { txt: "Coding power", doneAt: 187111111 }]
        //         }
        //     }, {
        //         id: "n102",
        //         type: "note-img",
        //         info: {
        //             url: "http://some-img/me",
        //             title: "Bobi and Me"
        //         },
        //         style: { backgroundColor: "#00d" }
        //     }
        // ]
        // function pinNote(noteToPin){
//     console.log('noteToPin', noteToPin)
//     const noteId = noteToPin.id
//     return storageService.remove(STORAGE_KEY, noteId)
//     // .then(console.log)
//     .then(()=>{storageService.postToStart(STORAGE_KEY, noteToPin)})
// }
// function _createNote(noteToSave) {
//     return {
//         id: utilService.makeId(),
//         ...noteToSave,
//     }
// }