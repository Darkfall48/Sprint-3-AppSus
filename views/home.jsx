const { Link } = ReactRouterDOM


export function Home() {

    return <section className="home">
        <h1>Welcome to APSUS!</h1>
        <Link to="/mail">
            <img className="mail-logo home-links" src="./assets/img/home/icons/mail-icon.png" />
        </Link>
        <Link to="/note">
        <img className="note-logo home-links" src="./assets/img/home/icons/note-icon.png" />
        </Link>
    </section>
}