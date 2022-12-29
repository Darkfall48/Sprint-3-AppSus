const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailDetails } from '../cmps/mail-details.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailPreview } from '../cmps/mail-preview.jsx'
import { Loader } from '../../../cmps/loader.jsx'

//? DONE: • Gets the right emails from service (async)
// TODO: • Renders the list and the filters (both top filter with search, and side filter for different folders)

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

  useEffect(() => {
    loadMails()
  }, [filterBy])

  function loadMails() {
    mailService
      .query(filterBy)
      .then((mails) => {
        console.log('Mails loaded:', mails)
        setMails((lastMails) => (lastMails = mails))
      })
      .catch((err) => console.log('Error with Mail List:', err))
  }

  function onRemoveMail(mailId) {
    mailService.remove(mailId).then(() => {
      const updatedMails = mails.filter((mail) => mail.id !== mailId)
      setMails(updatedMails)
      showSuccessMsg('Mail Removed!')
    })
  }

  function onSetFilter(filterByFromFilter) {
    setFilterBy(filterByFromFilter)
  }

  if (!mails) return <Loader />

  return (
    <section className="mail-index">
      <MailCompose />
      <MailFilter onSetFilter={onSetFilter} />
      <MailFolderList onSetFilter={onSetFilter} />
      <MailList
        mails={mails}
        loadMails={loadMails}
        onRemoveMail={onRemoveMail}
      />
    </section>
  )
}
