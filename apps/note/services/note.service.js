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
    // getDefaultReview,
    // saveReview,
    // removeReview
}

function query() {
    return storageService.query(STORAGE_KEY)
    .then(books=>{return books})
}


function getDefaultFilter() {
    return { type: '' }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(STORAGE_KEY)
    if (!notes || !notes.length) {
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
