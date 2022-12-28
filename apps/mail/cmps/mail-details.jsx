// TODO: • Routable component (page)
// TODO: • show the entire email
// TODO: • Allow deleting an email (using the service)
// TODO: • Allow navigating back to list

const { Fragment } = React

export function MailDetails({ mail }) {
  return (
    <Fragment>
      <img
        src={`https://robohash.org/${mail.id}`}
        style={{ maxWidth: '50px' }}
      />
      <p>{mail.body}</p>
    </Fragment>
  )
}
