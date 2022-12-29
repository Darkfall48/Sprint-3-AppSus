// TODO: • Allow filtering by different folders: inbox / sent / trash/ draft

const { useState, useEffect } = React

export function MailFolderList({ onSetFilter }) {
  return (
    <section className="mail-folder-list">
      <button>Inbox</button>
      <button>Starred</button>
      <button>Sent</button>
      <button>Drafts</button>
      <button>Trash</button>
    </section>
  )
}
