const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full">
        <Link to="/">
            <h3>APPSUS</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/note">Note</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
}
