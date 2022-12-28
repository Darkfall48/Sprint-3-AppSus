const { useState, useEffect, Fragment } = React

import { Loader } from '../../../cmps/loader.jsx'

// TODO: • Present an email preview
// TODO: • Renders the subject (with text size limit)
// TODO: • Gives visual indication for read/unread
// TODO: • Support hover state

export function MailPreview({ mail }) {
  console.log('Mail from Mail List', mail)
  const [isExpanded, setIsExpanded] = useState(false)

  function SetStar() {
    if (mail.isStared) return <p>⭐</p>
    else return <p>😉</p>
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
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
      >
        <td>
          <SetStar />
        </td>
        <td>{mail.subject}</td>
        <td>{mail.body}</td>
        <td>{mail.sentAt}</td>
      </tr>
      <tr hidden={!isExpanded}>
        <td colSpan="4">
          <img
            src={`https://robohash.org/${mail.id}`}
            style={{ maxWidth: '50px' }}
          />
          <p>Lorem ipsum dolor</p>
        </td>
      </tr>
    </Fragment>
  )
}
