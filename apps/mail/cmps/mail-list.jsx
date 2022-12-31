// TODO: • Renders a list of <mail-preview> pass down an email prop

import { mailService } from '../services/mail.service.js'

import { MailPreview } from './mail-preview.jsx'
import { MailPageNav } from './mail-page-nav.jsx'
import { Loader } from '../../../cmps/loader.jsx'

export function MailList({
  mails,
  loadMails,
  onRemoveMail,
  toggleStarStatus,
  toggleReadStatus,
  onFilterBy,
}) {
  if (!mails)
    return (
      <table>
        <Loader />
      </table>
    )
  return (
    <section className="mail-list-container">
      <table className="mail-table">
        <thead className="table-head">
          <tr>
            <th onClick={() => onFilterBy('isStared')}>Starred</th>
            <th onClick={() => onFilterBy('from')}>Name</th>
            <th onClick={() => onFilterBy('subject')}>Subject</th>
            <th onClick={() => onFilterBy('sentAt')}>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {mails.map((mail) => (
            <MailPreview
              key={mail.id}
              mail={mail}
              loadMails={loadMails}
              onRemoveMail={onRemoveMail}
              toggleStarStatus={toggleStarStatus}
              toggleReadStatus={toggleReadStatus}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5">
              <MailPageNav loadMails={loadMails} />
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  )
}
