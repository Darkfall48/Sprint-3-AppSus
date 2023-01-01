// TODO: • Allow filtering by different folders: inbox / sent / trash/ draft

const { useState, useEffect } = React
import { showErrorMsg } from '../../../services/event-bus.service.js'

export function MailFolderList({ onSetFilter }) {
  return (
    <section className="mail-folder-list-container">
      <a
        onClick={() => showErrorMsg('Not implemented yet!:(')}
        className="fa-solid fa-inbox"
        title="Inbox"
      ></a>
      <a
        onClick={() => showErrorMsg('Not implemented yet!:(')}
        className="fa-solid fa-star"
        title="Important Mails"
      ></a>
      <a
        onClick={() => showErrorMsg('Not implemented yet!:(')}
        className="fa-solid fa-arrow-right"
        title="Sent Mails"
      ></a>
      <a
        onClick={() => showErrorMsg('Not implemented yet!:(')}
        className="fa-solid fa-pencil"
        title="Drafts"
      ></a>
      <a
        onClick={() => showErrorMsg('Not implemented yet!:(')}
        className="fa-solid fa-trash"
        title="Trash"
      ></a>
    </section>
  )
}
