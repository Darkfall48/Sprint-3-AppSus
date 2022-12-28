import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const STORAGE_MAIL_KEY = 'mailDB'
_createMails()

// TODO: Connect User to Mails
const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

// TODO: Connect Criteria to Mails
const criteria = {
  status: 'inbox/sent/trash/draft',
  txt: 'puki', // no need to support complex text search
  isRead: true, // (optional property, if missing: show all)
  isStared: true, // (optional property, if missing: show all)
  labels: ['important', 'romantic'], // has any of the labels
}

export const mailService = {
  query,
  get,
  remove,
  save,
  getDefaultFilter,
  getEmptyBook: getEmptyMail,
}

function query(filterBy = getDefaultFilter()) {
  return storageService.query(STORAGE_MAIL_KEY).then((mails) => {
    // TODO: Adapt to mail service
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      mails = mails.filter((mail) => regex.test(mail.title))
    }
    if (filterBy.maxPrice) {
      mails = mails.filter((mail) => mail.listPrice.amount <= filterBy.maxPrice)
    }

    return mails
  })
}

function get(mailId) {
  return storageService.get(STORAGE_MAIL_KEY, mailId)
}

function remove(mailId) {
  return storageService.remove(STORAGE_MAIL_KEY, mailId)
}

function save(mail) {
  if (mail.id) {
    return storageService.put(STORAGE_MAIL_KEY, mail)
  } else {
    return storageService.post(STORAGE_MAIL_KEY, mail)
  }
}

function getEmptyMail(title = '', amount = '') {
  // TODO: Adapt to mail service
  return { title, listPrice: { amount } }
}

function getDefaultFilter() {
  // TODO: Adapt to mail service
  return {
    txt: '',
    maxPrice: '',
    lang: '',
    author: '',
    date: '',
    page: '',
    categories: '',
  }
}

function _createMails() {
  let mails = utilService.loadFromStorage(STORAGE_MAIL_KEY)
  if (!mails || !mails.length) {
    mails = [
      {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: true,
        labels: ['important', 'romantic'],
      },
    ]
    utilService.saveToStorage(STORAGE_MAIL_KEY, mails)
  }
}
