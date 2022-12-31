const { useState, useEffect, Fragment } = React

import { mailService } from '../services/mail.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { Loader } from '../../../cmps/loader.jsx'

//? DONE: • Gets the right emails from service (async)
// TODO: • Renders the list and the filters (both top filter with search, and side filter for different folders)

export function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    loadMails()
  }, [filterBy, isExpanded])

  //? For Debug
  // useEffect(() => {
  //   console.log('Changed visibility', isExpanded)
  // }, [isExpanded])

  //! Not Working
  //? Had no time to finish
  function onFilterBy(field) {
    console.log('field:', field)
    mailService.query().then(() => {
      const updatedMails = mails.sort((mail) => mail[field])
      setMails(updatedMails)
      showSuccessMsg('Mail Filtered by: ' + field)
    })
  }

  function loadMails() {
    mailService
      .query(filterBy)
      .then((mails) => {
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

  function toggleStarStatus(mailId) {
    mailService
      .get(mailId)
      .then((mail) => {
        if (mail.isStared) {
          mail.isStared = false
          showSuccessMsg('Mail Un-Starred!')
        } else {
          mail.isStared = true
          showSuccessMsg('Mail Starred!')
        }
        mailService.save(mail).then(() => loadMails())
      })
      .catch(console.log)
  }

  function toggleReadStatus(mailId) {
    mailService
      .get(mailId)
      .then((mail) => {
        if (!mail.isRead) {
          mail.isRead = true
          mailService.save(mail).catch(console.log)
          showSuccessMsg('Mail Status set to Read!')
        } else {
          mail.isRead = false
          mailService.save(mail).catch(console.log)
          showSuccessMsg('Mail Status set to Unread!')
        }
        mailService.save(mail).then(() => loadMails())
      })
      .catch(console.log)
  }

  function onSetFilter(filterByFromFilter) {
    setFilterBy(filterByFromFilter)
  }

  function ToggleAddValue() {
    if (!isExpanded)
      return (
        <Fragment>
          <span className="fa-regular fa-plus compose-button-plus"></span>
          New Mail
        </Fragment>
      )
    return 'Close'
  }

  if (!mails) return <Loader />

  return (
    <section className="mail-index">
      <article className="mail-compose-button">
        <a
          className="compose-button"
          onClick={() => {
            setIsExpanded(!isExpanded)
          }}
        >
          <ToggleAddValue />
        </a>
      </article>

      <article className="mail-folder-list">
        <MailFolderList onSetFilter={onSetFilter} />
      </article>

      <article className="mail-compose" hidden={!isExpanded}>
        <MailCompose setIsExpanded={setIsExpanded} />
      </article>

      <article className="mail-filter" hidden={isExpanded}>
        <MailFilter onSetFilter={onSetFilter} />
      </article>

      <article className="mail-list" hidden={isExpanded}>
        <MailList
          mails={mails}
          loadMails={loadMails}
          onRemoveMail={onRemoveMail}
          toggleStarStatus={toggleStarStatus}
          toggleReadStatus={toggleReadStatus}
          onFilterBy={onFilterBy}
        />
      </article>
    </section>
  )
}
