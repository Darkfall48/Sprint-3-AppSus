const { useState, useEffect, Fragment } = React

import { utilService } from '../../../services/util.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

import { mailService } from '../services/mail.service.js'
import { MailDetails } from './mail-details.jsx'
import { MailLongTxt } from './mail-longtext.jsx'
import { Loader } from '../../../cmps/loader.jsx'

// TODO: • Present an email preview
// TODO: • Renders the subject (with text size limit)
//? DONE: • Gives visual indication for read/unread
// TODO: • Support hover state

export function MailPreview({ mail, loadMails, onRemoveMail }) {
  // console.log('Mail from Mail List', mail)
  const [isExpanded, setIsExpanded] = useState(false)

  function setReadStatus() {
    // console.log(mail.isRead)

    if (mail.isRead) return 'read'

    return ''
  }

  function setStatusToRead() {
    if (!mail.isRead && isExpanded) {
      mail.isRead = true
      mailService.save(mail).catch(console.log)
      showSuccessMsg('Mail Status set to Read!')
    }
  }

  function setStatusToUnread() {
    if (mail.isRead) {
      mail.isRead = false
      mailService.save(mail).catch(console.log)
      showSuccessMsg('Mail Status set to Unread!')
    }
  }

  function SetStar() {
    if (mail.isStared) return <p onClick={() => toggleStar(event)}>❤️</p>

    return <p onClick={() => toggleStar(event)}>🖤</p>
  }

  function toggleStar(ev) {
    ev.stopPropagation() //! Not Working
    if (mail.isStared) {
      mail.isStared = false
      showSuccessMsg('Mail Un-Starred!')
    } else {
      mail.isStared = true
      showSuccessMsg('Mail Starred!')
    }
    mailService.save(mail).catch(console.log)
    loadMails()
  }

  function SetName() {
    return <p>{mail.to.split('@', 1)}</p>
  }

  function SetSubject() {
    if (mail.subject)
      return (
        <p className="sub-body-container">
          <span className="subject"> {mail.subject}</span>
          <span>{' - '}</span>
          <MailLongTxt txt={mail.body} length={20} />
          {/* <span className="body">{mail.body}</span> */}
        </p>
      )

    return <p>{mail.body}</p>
  }

  function SetDate() {
    return <p className="date">{utilService.getDate(mail.sentAt)}</p>
  }

  if (!mail)
    return (
      <tr>
        <td>
          <Loader />
        </td>
      </tr>
    )

  return (
    <Fragment>
      <tr className={setReadStatus()}>
        <td>
          <SetStar />
        </td>
        <td>
          <SetName />
        </td>
        <td
          onClick={() => {
            setIsExpanded(!isExpanded)
            setStatusToRead()
          }}
        >
          <SetSubject />
        </td>
        <td>
          <SetDate />
        </td>
        <td>
          <button onClick={setStatusToUnread}>Unread</button>
          <button onClick={() => onRemoveMail(mail.id)}>Remove</button>
        </td>
      </tr>
      <tr hidden={!isExpanded}>
        <td className="details" colSpan="5">
          <MailDetails mail={mail} />
        </td>
      </tr>
    </Fragment>
  )
}
