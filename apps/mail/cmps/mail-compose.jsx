// TODO: • Has a form with: to, subject and body
// TODO: • Use the service to send an email (add email to the list)

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
    // email is valid, proceed with sending the mail
    console.log('Sent Mail', mail)
    mailService
      .save(mail)
      .then(() => {
        setMail((prevMail) => ({ ...prevMail, isSent: true })) // update flag to indicate successful send and save
        setIsExpanded(false)
        setMail(mailService.getEmptyMail)
      })
      .then(() => showSuccessMsg('Mail sent!'))
      .catch((err) => {
        console.log('Mail not sent for the following reasons:', err)
      })
  }

  return (
    <section className="mail-compose">
      <form onSubmit={handleSubmit}>
        <label htmlFor="for">To:</label>
        <input
          type="email"
          name="to"
          value={mail.to}
          onChange={handleChange}
          placeholder="unicorn@beautiful.sky"
        />
        <br />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          value={mail.subject}
          onChange={handleChange}
          placeholder="Marshmallow"
        />
        <br />

        <label htmlFor="body">Body:</label>
        <textarea
          name="body"
          value={mail.body}
          onChange={handleChange}
          placeholder="Today..."
        />
        <br />

        <button type="submit">Save</button>
      </form>
    </section>
  )
}
