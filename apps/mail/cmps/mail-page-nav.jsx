const { useState, useEffect } = React

import { mailService } from '../services/mail.service.js'
import { showErrorMsg } from '../../../services/event-bus.service.js'

export function MailPageNav({ loadMails }) {
  const [currentPage, setCurrentPage] = useState(mailService.getCurrentPage)

  const pageSize = mailService.getPageSize()
  const mailsLength = mailService.getMailsLength()
  const totalPages = Math.ceil(mailsLength / pageSize)

  // console.log('Current Page:', currentPage)
  // console.log('Number of pages:', mailsLength)
  // console.log('Total Pages', totalPages)

  useEffect(() => {
    mailService.setPage(currentPage)
    if (currentPage >= totalPages || currentPage < 0) {
      showErrorMsg('There is nothing there :(')
      setCurrentPage(Math.max(0, Math.min(currentPage, totalPages - 1)))
      mailService.setPage(currentPage)
      return
    }
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
      <a
        className="fa-solid fa-angles-left"
        onClick={changeToFirst}
        title="First Page"
      ></a>
      <a
        className="fa-solid fa-angle-left"
        onClick={() => changePage(-1)}
        title="Previous Page"
      ></a>
      <h3 className="page-nav-title">
        Page <span className="page-nav-current">{currentPage + 1}</span> of
        <span className="page-nav-total"> {totalPages}</span>
      </h3>
      <a
        className="fa-solid fa-angle-right"
        onClick={() => changePage(1)}
        title="Next Page"
      ></a>
      <a
        className="fa-solid fa-angles-right"
        onClick={changeToLast}
        title="Last Page"
      ></a>
    </article>
  )
}
