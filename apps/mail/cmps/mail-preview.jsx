const { useState, useEffect, Fragment } = React

import { utilService } from '../../../services/util.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

import { mailService } from '../services/mail.service.js'
import { MailDetails } from './mail-details.jsx'
import { MailLongTxt } from './mail-longtext.jsx'
import { Loader } from '../../../cmps/loader.jsx'

// TODO: • Renders the subject (with text size limit)
//? DONE: • Present an email preview
//? DONE: • Gives visual indication for read/unread
//? DONE: • Support hover state

export function MailPreview({
  mail,
  loadMails,
  onRemoveMail,
  toggleStarStatus,
  toggleReadStatus,
}) {
  // console.log('Mail from Mail List', mail)
  const [isExpanded, setIsExpanded] = useState(false)

  // function updateMails() {
  //   loadMails()
  // }

  function toggleDetails() {
    setIsExpanded(!isExpanded)
    setStatusToRead()
  }

  function setReadStatus() {
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

  function SetStar() {
    if (mail.isStared)
      return (
        <a className="star" onClick={() => toggleStarStatus(mail.id)}>
          ❤️
        </a>
      )

    return (
      <a className="star" onClick={() => toggleStarStatus(mail.id)}>
        🖤
      </a>
    )
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
        <td onClick={toggleDetails}>
          <SetName />
        </td>
        <td onClick={toggleDetails}>
          <SetSubject />
        </td>
        <td onClick={toggleDetails}>
          <SetDate />
        </td>
        <td className="action-btn">
          <a
            className="fa-solid fa-check action-btn-read"
            onClick={() => toggleReadStatus(mail.id)}
            title="Toggle Mail Read Status"
          ></a>
          <a
            className="fa-solid fa-xmark action-btn-remove"
            onClick={() => onRemoveMail(mail.id)}
            title="Remove Mail"
          ></a>
          <a
            className="fa-solid fa-reply action-btn-reply"
            title="Reply to the Mail"
          ></a>
        </td>
      </tr>
      <tr className="details-tr" hidden={!isExpanded}>
        <td className="details" colSpan="5">
          <MailDetails mail={mail} />
        </td>
      </tr>
    </Fragment>
  )
}
