import { mailService } from '../services/mail.service.js'

import { MailCompose } from '../cmps/mail-compose.jsx'
import { MailDetails } from '../cmps/mail-details.jsx'
import { MailFilter } from '../cmps/mail-filter.jsx'
import { MailFolderList } from '../cmps/mail-folder-list.jsx'
import { MailList } from '../cmps/mail-list.jsx'
import { MailPreview } from '../cmps/mail-preview.jsx'

// TODO: • Gets the right emails from service (async)
// TODO: • Renders the list and the filters (both top filter with search, and side filter for different folders)

export function MailIndex() {
  return (
    <section>
      <div>Hello from Mail Index</div>

      <MailCompose />
      <MailDetails />
      <MailFilter />
      <MailFolderList />
      <MailList />
      <MailPreview />
    </section>
  )
}
