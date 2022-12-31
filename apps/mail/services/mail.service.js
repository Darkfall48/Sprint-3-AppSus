import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import { func } from 'prop-types'

const STORAGE_MAIL_KEY = 'mailDB'
const PAGE_SIZE = 4
let gPageIdx = 0
let gMailLength = 0

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
  setPage,
  getPageSize,
  getCurrentPage,
  getDefaultFilter,
  getEmptyMail,
  getMailsLength,
}

function getPageSize() {
  return PAGE_SIZE
}

function getMailsLength() {
  return gMailLength
}

function getCurrentPage() {
  return gPageIdx
}

function setPage(pageToSet) {
  //? In case of, this code can be helpful

  // const totalPages = Math.ceil(gMailLength / gPageIdx)

  // if (pageToSet * PAGE_SIZE >= totalPages) {
  //   console.warn('Page Idx is too big!')
  //   pageToSet = pageToSet - 1
  // }

  // if (pageToSet * PAGE_SIZE < 0) {
  //   console.warn('Page Idx is too low!')
  //   pageToSet = 0
  // }

  gPageIdx = pageToSet
  console.log('gPageIdx:', gPageIdx)
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

    let pageStartIdx = gPageIdx * PAGE_SIZE
    gMailLength = mails.length
    console.log('Number of Mails:', gMailLength)
    return mails.slice(pageStartIdx, pageStartIdx + PAGE_SIZE)
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

function getEmptyMail() {
  return {
    to: '',
    subject: '',
    body: '',
    sentAt: Date.now(),
    isSent: true,
  }
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
        subject: `Don't miss the LAST WEEKEND!`,
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1672238263,
        to: 'user@appsus.com',
        from: 'labaiedhudson@enews.thebay.com',
        status: 'inbox',
        isRead: true,
        isStared: true,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e102',
        subject: 'Upcoming events!',
        body: `On January 5 at 5 p.m., meet at the Avila slope of the Saint-Sauveur Summit.
        The first 200 customers will receive a gift! If you're a little rusty, don't panic.
        There will be coffee, hot chocolate and Red Bull to get you back on track, and even a new Red Bull module to challenge you.`,
        isRead: false,
        sentAt: 1546007863,
        to: 'user@appsus.com',
        from: 'info@e.sommets.com',
        status: 'inbox',
        labels: ['important', 'romantic'],
      },
      {
        id: 'e103',
        subject: 'Miss you so much babe 💖!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'horny@sexy.foryou',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e104',
        subject: 'Available Sunday, January 1...',
        body: `The Way of the Apron Season 2 available on Sunday!
        Our favorite former yakuza is back!
        Between discount coupons and penny-pinching meals, he takes his role as a househusband very seriously.`,
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'info@mailer.netflix.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e105',
        subject: 'User, try using Uber to go shopping',
        body: `A ride for all your errands!
        With Uber, do all your shopping easily, quickly and
        without stress. Give us your time and address,
        we'll take you anywhere you want to go.`,
        isRead: false,
        sentAt: 1524085263,
        to: 'user@appsus.com',
        from: 'uber@uber.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e106',
        subject:
          'Have fun learning with these typing, language, and meditation games',
        body: `Making a New Year’s resolution to learn a new language, improve your typing, or start meditating?
        Unlock real-life achievements—and have a blast in the process—with our brand-new bundle of games!`,
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'contact@mailer.humblebundle.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e107',
        subject: 'Launch Alert | SpaceX Falcon 9 Transporter 6',
        body: `An Up-Close View of the Next Launch

        SpaceX is set to launch the Transporter 6 rideshare mission as their first launch of the new year.
        The first stage of the rocket will land at LZ-1 on Cape Canaveral Space Force Station.
        Launch viewing from the LC-39 Observation Gantry is now available online in addition to admission, or view from two other locations included with admission.
        Learn more below!`,
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'kennedyspacecenter@email.delawarenorth.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e108',
        subject: `Don't miss this new event of Copper Dragon!`,
        body: `Hey User!
 
        Copper Dragon just announced a new event and we wanted to make sure you were the first to know!`,
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'noreply@reminder.eventbrite.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e109',
        subject: 'Order 81480807 : delivery confirmed',
        body: `Delivery made
        Hello User AppSus,
        The delivery of your order 81480807 has been confirmed.
        You can see the details below.`,
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'transaction@notice.aliexpress.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
      {
        id: 'e110',
        subject: 'Last chance for our lowest price on iOS',
        body: `2023 is almost here, which means our sale is about to expire.

        Automate the things on your to do list and accomplish your resolutions in 2023.
        Save money, establish new habits, automate your business, and so much more.
        
        Get our best deal on Pro+.👇`,
        isRead: false,
        sentAt: 1524062263,
        to: 'user@appsus.com',
        from: 'mail@ifttt.com',
        status: 'inbox',
        isRead: false,
        isStared: false,
        labels: ['important', 'romantic'],
      },
    ]
    utilService.saveToStorage(STORAGE_MAIL_KEY, mails)
  }
}
