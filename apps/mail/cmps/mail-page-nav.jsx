const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'
import { showErrorMsg } from '../../../services/event-bus.service.js'

export function MailPageNav({ loadMails }) {
  const [currentPage, setCurrentPage] = useState(mailService.getCurrentPage)

  const pageSize = mailService.getPageSize()
  const mailsLength = mailService.getMailsLength()
  const totalPages = Math.ceil(mailsLength / pageSize)

  console.log('Current Page:', currentPage)
  console.log('Number of pages:', mailsLength)
  console.log('Total Pages', totalPages)

  useEffect(() => {
    if (currentPage >= totalPages) {
      showErrorMsg('Too big!')
      setCurrentPage((lastPage) => lastPage - 1)
      mailService.setPage(currentPage)
      return
    }
    if (currentPage < 0) {
      showErrorMsg('Too small!')
      setCurrentPage(0)
      mailService.setPage(currentPage)
      return
    }

    mailService.setPage(currentPage)
    loadMails()
  }, [currentPage])

  function changePage(value) {
    setCurrentPage((page) => page + value)
  }

  return (
    <article>
      <a onClick={() => changePage(-1)}>{'<'}</a>
      <h1> {currentPage + 1} </h1>
      <a onClick={() => changePage(1)}>{'>'}</a>
    </article>
  )
}
