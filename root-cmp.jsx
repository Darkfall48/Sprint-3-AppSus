const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from './cmps/app-header.jsx'
import { UserMsg } from './cmps/user-msg.jsx'
import { About } from './views/about.jsx'
import { Home } from './views/home.jsx'
import { MailIndex } from './apps/mail/views/mail-index.jsx'
import { NoteIndex } from './apps/note/views/note-index.jsx'
import { NoteEdit } from './apps/note/views/note-edit.jsx'

export function App() {
<<<<<<< Updated upstream
  return (
    <Router>
      <section className="app main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mail" element={<MailIndex />} />
          <Route path="/note" element={<NoteIndex />} />
        </Routes>
      </section>
      <UserMsg />
=======
    return <Router>
        <section className="app main-layout">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/mail" element={<MailIndex />} />
                <Route path="/note" element={<NoteIndex />} />
                <Route path="/note/edit/:noteId" element={<NoteEdit />} />
            </Routes>
        </section>
>>>>>>> Stashed changes
    </Router>
  )
}
