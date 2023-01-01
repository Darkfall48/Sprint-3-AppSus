const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/app-header.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { Home } from './views/home.jsx'
import { HomeAbout } from './views/home-about.jsx'
import { MailIndex } from './apps/mail/views/mail-index.jsx'
import { NoteIndex } from './apps/note/views/note-index.jsx'
import { NoteEdit } from './apps/note/views/note-edit.jsx'
import { BookIndex } from './apps/book/views/book-index.jsx'
import { BookEdit } from './apps/book/views/book-edit.jsx'
import { BookDetails } from './apps/book/views/book-details.jsx'

export function App() {
  return (
    <Router>
      <section className="app main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<HomeAbout />} />
          <Route path="/mail" element={<MailIndex />} />
          <Route path="/note" element={<NoteIndex />} />
          <Route path="/note/edit/:noteId" element={<NoteEdit />} />
          <Route path="/book" element={<BookIndex />} />
          <Route path="/book/edit" element={<BookEdit />} />
          <Route path="/book/edit/:bookId" element={<BookEdit />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
        </Routes>
      </section>
      <UserMsg />
    </Router>
  )
}
