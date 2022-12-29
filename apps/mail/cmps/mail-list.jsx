// TODO: • Renders a list of <mail-preview> pass down an email prop

import { mailService } from '../services/mail.service.js'

import { MailPreview } from './mail-preview.jsx'
import { Loader } from '../../../cmps/loader.jsx'

export function MailList({ mails }) {
  console.log('Mails from mail-index', mails)

  if (!mails)
    return (
      <table>
        <Loader />
      </table>
    )
  return (
    <table className="mail-list" border="1">
      <thead>
        <tr>
          <th>Starred</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {mails.map((mail) => (
          <MailPreview key={mail.id} mail={mail} />
        ))}
      </tbody>
    </table>
  )
}
