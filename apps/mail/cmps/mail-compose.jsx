//? DONE: • Has a form with: to, subject and body
//? DONE: • Use the service to send an email (add email to the list)

const { useState, useEffect } = React
import { mailService } from '../services/mail.service.js'
import { showSuccessMsg } from '../../../services/event-bus.service.js'

export function MailCompose({ setIsExpanded }) {
  const [mail, setMail] = useState(mailService.getEmptyMail)

  function handleChange({ target }) {
    const { name, value } = target
    setMail((prevMail) => ({ ...prevMail, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log('To:', mail.to)
    console.log('Sent Mail', mail)

    mailService
      .save(mail)
      .then(() => {
        setMail((prevMail) => ({ ...prevMail, isSent: true }))
        setIsExpanded(false)
        setMail(mailService.getEmptyMail)
      })
      .then(() => showSuccessMsg('Mail sent!'))
      .catch((err) => {
        console.log('Mail not sent for the following reasons:', err)
      })
  }

  return (
    <section className="mail-compose-container">
      <form className="input-container" onSubmit={handleSubmit}>
        <h1 className="mail-compose-title">New Mail</h1>
        <label htmlFor="from">From:</label>
        <input
          required
          type="email"
          id="from"
          name="from"
          value={mail.from}
          onChange={handleChange}
          placeholder="sad@pando.babu"
        />
        <br />

        <label htmlFor="to">To:</label>
        <input
          required
          type="email"
          id="to"
          name="to"
          value={mail.to}
          onChange={handleChange}
          placeholder="unicorn@beautiful.sky"
        />
        <br />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={mail.subject}
          onChange={handleChange}
          placeholder="Marshmallow"
        />
        <br />

        <label htmlFor="body">Body:</label>
        <textarea
          className="mail-compose-body"
          name="body"
          id="body"
          value={mail.body}
          onChange={handleChange}
          placeholder="Today..."
        />
        <br />

        <button className="mail-compose-save-button" type="submit">
          Save
        </button>
      </form>
    </section>
  )
}
