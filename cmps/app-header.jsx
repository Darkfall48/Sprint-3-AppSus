const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full">
        <Link to="/">
            <div className="fa-solid fa-horse logo-header"></div>
            {/* <img src="./assests/img/audi.jpg" alt="" /> */}
            {/* <h3 className="logo-header">APPSUS</h3> */}
        </Link>
        <span className="header-space"></span>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/note">Note</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
}
