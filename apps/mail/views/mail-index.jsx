const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'

import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailDetails } from '../cmps/mail-details.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailPreview } from '../cmps/mail-preview.jsx'
import { Loader } from '../../../cmps/loader.jsx'

// TODO: • Gets the right emails from service (async)
// TODO: • Renders the list and the filters (both top filter with search, and side filter for different folders)

export function MailIndex() {
  const [mails, setMails] = useState(null)

  useEffect(() => {
    loadMails()
  }, [])

  function loadMails() {
    mailService
      .query()
      .then((mails) => {
        console.log('Mails loaded:', mails)
        setMails((lastMails) => (lastMails = mails))
      })
      .catch((err) => console.log('Error with Mail List:', err))
  }

  function Log() {
    console.log('New mails', mails)
  }

  if (!mails) return <Loader />

  return (
    <section>
      <Log />
      <MailCompose />
      <MailFilter />
      <MailFolderList />
      <MailList mails={mails} />
    </section>
  )
}
