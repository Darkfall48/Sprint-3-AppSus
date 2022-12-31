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
  changeNoteBackground,
}

function query(queryParams = {}) {
  return storageService
    .query(STORAGE_KEY)
    .then((notes) => {
      let pinnedNotes = notes.filter((note) => note.isPinned === true)
      if (!pinnedNotes) return notes
      const unPinnedNotes = notes.filter((note) => note.isPinned === false)
      const updatedNotes = pinnedNotes.concat(unPinnedNotes)
      return updatedNotes
    })
    .then((updatedNotes) => {
      utilService.saveToStorage(STORAGE_KEY, updatedNotes)
      return new Promise((resolve) => setTimeout(() => resolve(updatedNotes)))
    })
    .then((notes) => {
      if (queryParams.text) {
        const regex = new RegExp(queryParams.text, 'i')
        notes = notes.filter((note) => regex.test(note.info.txt))
      }
      // console.log(notes)
      return notes
    }
    )
}

function save(note) {
  if (note.id) {
    return storageService.put(STORAGE_KEY, note)
  } else {
    return storageService.postToStart(STORAGE_KEY, note)
  }
}

function get(noteId) {
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
    info: {txt:''},
    // info:{},
    bgColor: 'default',
  }
}

function changeNoteBackground(chosenColor, selectedNote) {
  selectedNote.bgColor = chosenColor
  console.log('selectedNote', selectedNote)
  return storageService.put(STORAGE_KEY, selectedNote)
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

function postToStart(note) {
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
        id: 'n101',
        type: 'note-txt',
        isPinned: false,
        info: { txt: 'Return books to the library and pick up the book Emma asked for - Good night moon. Then remember to call mom at 18:00.' },
        bgColor: 'default',
      },
      {
        id: 'n102',
        type: 'note-txt',
        isPinned: false,
        info: { txt: 'Need to work on my react skill! Finish sprint 3 with new skills and keep practicing until I master it.' },
        bgColor: 'purple',
      }, {
        id: 'n104',
        type: 'note-video',
        isPinned: false,
        info: {
          url: "https://www.youtube.com/embed/ncZmUKanfpU" ,
        bgColor: 'purple',
      }
    },
      {
        id: 'n103',
        type: 'note-txt',
        isPinned: false,
        info: { txt: 'Practice. Become a fullstack MASTER!' },
        bgColor: 'blue',
      }, {
        id: 'n105',
        type: 'note-video',
        isPinned: false,
        info: {
          url: "https://www.youtube.com/embed/C6UUJ47HCBQ" ,
        bgColor: 'default',
      }
    }, {
          id: "n106",
          type: "note-img",
          info: {
              url: "https://images.app.goo.gl/nyShzzfZhYUW4a8E6",
              title: "Bobi and Me"
          },
          bgColor: 'purple',
      }
      // ,{
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
