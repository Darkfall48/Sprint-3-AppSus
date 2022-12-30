// TODO: • Routable component (page)
// TODO: • show the entire email
// TODO: • Allow deleting an email (using the service)
//? DONE: • Allow navigating back to list

import { mailService } from '../services/mail.service.js'

const { Fragment } = React

export function MailDetails({ mail }) {
  return (
    <article className="mail-details">
      <h3 className="to">
        To: <span>{mail.to}</span>
        <img
          src={`https://robohash.org/user}`}
          alt={'Avatar - ' + mail.to}
          style={{ maxWidth: '25px', borderRadius: '25px' }}
        />
      </h3>
      <h3 className="from">
        From: <span>{mail.from}</span>
        <img
          src={`https://robohash.org/${mail.id}`}
          alt={'Avatar - ' + mail.from}
          style={{ maxWidth: '25px', borderRadius: '25px' }}
        />
      </h3>
      <h1 className="subject">{mail.subject}</h1>
      <h2 className="body">{mail.body}</h2>
    </article>
  )
}
