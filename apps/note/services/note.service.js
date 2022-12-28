import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const STORAGE_KEY = 'noteDB'
_createNotes()

export const noteService = {
    query,
    // get,
    // remove,
    // save,
    // getEmptyBook,
    getDefaultFilter,
    saveNote,
    getDefaultNote,
    save
    // getDefaultReview,
    // saveReview,
    // removeReview
}

function query() {
    return storageService.query(STORAGE_KEY)
        .then(books => { return books })
}

function save(note) {
    if (note.id) {
        return storageService.put(STORAGE_KEY, note)
    } else {
        return storageService.post(STORAGE_KEY, note)
    }
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
    }
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
                "isPinned": true,
                "info": { "txt": "Fullstack Me Baby!" },
            },
            // {
            //     "id": "n103",
            //     "type": "note-todos",
            //     "info": {
            //         "label": "Get my stuff together", 
            //         "todos": [{ "txt": "Driving liscence", "doneAt": null },
            //             { "txt": "Coding power", "doneAt": 187111111 }]
            //     }
            // }, {
            //     "id": "n102",
            //     "type": "note-img",
            //     "info": {
            //         "url": "http://some-img/me",
            //         "title": "Bobi and Me"
            //     },
            //     "style": { "backgroundColor": "#00d" }
            // }
        ]
    }
    console.log('notes', notes)
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