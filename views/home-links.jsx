const { Link } = ReactRouterDOM

export function HomeLinks() {
  return (
    <article className="home-links">
      <section className="home-hero-container">
        <h1 className="home-links-title">Choose our app!</h1>
        <h3 className="home-links-hero">
          All the apps you need integrated and in one place
        </h3>
      </section>

      <section className="home-links-container">
        <Link className="home-links-notes" to="/note">
          <img
            className="note-logo home-links"
            title="Note App"
            src="./assets/img/home/icons/note-icon.png"
          />
        </Link>

        <Link className="home-links-email" to="/mail">
          <img
            className="mail-logo home-links"
            title="Mail App"
            src="./assets/img/home/icons/mail-icon.png"
          />
        </Link>

        <Link className="home-links-books" to="/book">
          <img
            className="book-logo home-links"
            title="Book App"
            src="./assets/img/home/icons/book-icon.png"
          />
        </Link>
      </section>
    </article>
  )
}
