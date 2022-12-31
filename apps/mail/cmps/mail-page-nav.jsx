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
      setCurrentPage(totalPages - 1)
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

  function changeToFirst() {
    setCurrentPage(0)
  }

  function changeToLast() {
    setCurrentPage(totalPages - 1)
  }

  return (
    <article className="mail-page-nav-container">
      <a className="fa-solid fa-angles-left" onClick={changeToFirst}></a>
      <a className="fa-solid fa-angle-left" onClick={() => changePage(-1)}></a>
      <h3>
        Page {currentPage + 1} of {totalPages}
      </h3>
      <a className="fa-solid fa-angle-right" onClick={() => changePage(1)}></a>
      <a className="fa-solid fa-angles-right" onClick={changeToLast}></a>
    </article>
  )
}
