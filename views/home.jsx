const { Link } = ReactRouterDOM


export function Home() {

    return <section className="home main-layout">

        <article className="home-intro">
            <h1>APPSUS! (logo)</h1>
            <h2>Intro Machu</h2>
            <h2>Intro Machu 2</h2>
        </article>

        <article className="home-app">
            <h1>Choose your app!</h1>
            <a className="a-btn" href="#">Check Out Our Apps!</a>
        </article>

        <article className="home-links">
            <Link to="/mail">
                <img className="mail-logo home-links" src="./assets/img/home/icons/mail-icon.png" />
            </Link>
            <Link to="/note">
                <img className="note-logo home-links" src="./assets/img/home/icons/note-icon.png" />
            </Link>
        </article>

        <article className="home-about">About</article>


    </section>
}