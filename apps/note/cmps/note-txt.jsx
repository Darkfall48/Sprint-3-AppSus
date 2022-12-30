const { useState } = React

// export function MailLongTxt({ txt, length = 50 }) {
export function NoteTxt({ txt , length }) {
  const [isLongTxtShown, setLongTxtShown] = useState(false)

  function getTxtToShow(isLongTxtShown, txt) {
    console.log('txt', txt)
    return txt.length < length || isLongTxtShown
      ? txt
      : txt.substring(0, length + 1) + '...'
  }

  return <span>{getTxtToShow(isLongTxtShown, txt, length)}</span>
}
