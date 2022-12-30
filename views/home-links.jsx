const { Link } = ReactRouterDOM

export function HomeLinks() {
  return (
    <article className="home-links">
      <section className="home-hero-container">
        <h1 className="home-links-title">Choose your app!</h1>
        <h3 className="home-links-hero">
          All the apps you need integrated and in one place
        </h3>
      </section>

      <section className="home-links-container">
        <Link className="home-links-email" to="/mail">
          {/* <label htmlFor="mail">Mail</label> */}
          <div className="fa-solid fa-envelope-open-text apps-links"></div>
          {/* <img className="mail-logo home-links" src="./assets/img/home/icons/mail-icon.png" /> */}
        </Link>
        <Link className="home-links-notes" to="/note">
          {/* <label htmlFor="mail">Notes</label> */}
          <div className="fa-solid fa-clipboard apps-links"></div>
          {/* <img className="note-logo home-links" src="./assets/img/home/icons/note-icon.png" /> */}
        </Link>
        {/* <label htmlFor="mail">Books</label> */}
        <Link className="home-links-books" to="/book">
          <div className="fa-solid fa-book apps-links"></div>
        </Link>
      </section>
    </article>
  )
}
