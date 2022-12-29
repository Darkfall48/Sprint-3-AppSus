const { useState, useEffect, Fragment } = React

import { utilService } from '../../../services/util.service.js'

import { MailDetails } from './mail-details.jsx'
import { Loader } from '../../../cmps/loader.jsx'

// TODO: • Present an email preview
// TODO: • Renders the subject (with text size limit)
// TODO: • Gives visual indication for read/unread
// TODO: • Support hover state

export function MailPreview({ mail }) {
  // console.log('Mail from Mail List', mail)
  const [isExpanded, setIsExpanded] = useState(false)

  function setReadStatus() {
    // console.log(mail.isRead)
    if (mail.isRead) return 'read'

    return ''
  }

  function SetStar() {
    if (mail.isStared) return <p>❤️</p>

    return <p>🖤</p>
  }

  function SetName() {
    return <p>{mail.to.split('@', 1)}</p>
  }

  function SetSubject() {
    if (mail.subject)
      return (
        <p className="sub-body-container">
          <span className="subject"> {mail.subject}</span>
          <span className="body">{mail.body}</span>
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
      <tr
        className={setReadStatus()}
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
      >
        <td>
          <SetStar />
        </td>
        <td>
          <SetName />
        </td>
        <td>
          <SetSubject />
        </td>
        <td>
          <SetDate />
        </td>
      </tr>
      <tr hidden={!isExpanded}>
        <td colSpan="4">
          <MailDetails mail={mail} />
        </td>
      </tr>
    </Fragment>
  )
}
