// TODO: • Allow filtering by different folders: inbox / sent / trash/ draft

const { useState, useEffect } = React

export function MailFolderList({ onSetFilter }) {
  return (
    <section className="mail-folder-list">
      <a className="fa-solid fa-inbox" title="Inbox"></a>
      <a className="fa-solid fa-star" title="Starred Mails"></a>
      <a className="fa-solid fa-arrow-right" title="Sent Mails"></a>
      <a className="fa-solid fa-pencil" title="Drafts"></a>
      <a className="fa-solid fa-trash" title="Trash"></a>
    </section>
  )
}
