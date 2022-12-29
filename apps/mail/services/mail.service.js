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
  getEmptyMail,
}

function query(queryParams = {}) {
  return storageService.query(STORAGE_MAIL_KEY).then((mails) => {
    // TODO: Adapt to mail service
    // if (filterBy.subject) {
    //   const regex = new RegExp(filterBy.subject, 'i')
    //   mails = mails.filter((mail) => regex.test(mail.subject))
    // }

    // if (filterBy.readStatus) {
    //   if (filterBy.readStatus === 'unread') {
    //     mails = mails.filter((mail) => !mail.isRead)
    //   } else if (filterBy.readStatus === 'read') {
    //     mails = mails.filter((mail) => mail.isRead)
    //   }
    // }

    if (queryParams.subject) {
      const regex = new RegExp(queryParams.subject, 'i')
      mails = mails.filter((mail) => regex.test(mail.subject))
    }

    if (queryParams.readStatus) {
      if (queryParams.readStatus === 'unread') {
        mails = mails.filter((mail) => !mail.isRead)
      } else if (queryParams.readStatus === 'read') {
        mails = mails.filter((mail) => mail.isRead)
      }
    }

    // if (queryParams.isStared !== undefined) {
    //   if (queryParams.isStared === 'true') {
    //     mails = mails.filter((mail) => mail.isStared)
    //   } else if (queryParams.isStared === 'false') {
    //     mails = mails.filter((mail) => !mail.isStared)
    //   }
    // }

    // if (filterBy.maxPrice) {
    //   mails = mails.filter((mail) => mail.listPrice.amount <= filterBy.maxPrice)
    // }

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
    subject: '',
    readStatus: 'all',
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
        sentAt: 1672238263,
        to: 'user@appsus.com',
        from: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: true,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e102',
        subject: 'Miss you too!',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at animi vitae! Non consectetur, labore, vero architecto aperiam enim nostrum deleniti consequuntur exercitationem nam tenetur sed animi nemo ratione et.
        Maiores aspernatur modi molestias quam similique sit, laudantium, dolor repellendus, ratione autem deserunt? Possimus inventore voluptas beatae praesentium officia facere quibusdam quia soluta voluptates sapiente aliquam excepturi, ratione, aut rem!
        Recusandae officiis ullam vel possimus quam qui quisquam corrupti, laborum delectus deleniti repudiandae doloribus laudantium ratione aut beatae excepturi error hic inventore dicta tempora rerum quo voluptatibus quod. Impedit, ab!
        Quidem suscipit quis hic, dolore tenetur ipsum soluta odio animi ex laboriosam reprehenderit inventore esse sit similique tempora ducimus repellat doloribus impedit facilis repellendus officiis. Rerum fugit perferendis qui consequatur.
        Error in tenetur rem, autem laborum incidunt aspernatur, quos harum ea magnam quod labore dolorem. Doloribus perspiciatis, facilis vitae enim expedita, reprehenderit officia libero architecto, maiores tempore ullam accusamus blanditiis.`,
        isRead: false,
        sentAt: 1546007863,
        to: 'user@appsus.com',
        from: 'momo@momo.com',
        status: 'inbox',
        labels: ['important', 'romantic'],
      },
      {
        id: 'e103',
        subject: 'Miss you loulou!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'momo@momo.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e104',
        subject: 'Popi',
        body: 'Koki',
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'momo@momo.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
    ]
    utilService.saveToStorage(STORAGE_MAIL_KEY, mails)
  }
}
