const { Link } = ReactRouterDOM


export function Home() {

    return <section className="home main-layout">

        <article className="home-intro">
            <h1 className="logo">APPSUS</h1>
            <h2>Smart app for busy people</h2>
            <h2>You just focus on being a unicorn</h2>
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