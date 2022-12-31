const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className="app-header main-layout full">
      <nav className=" nav-header header-layout">
        <Link to="/">
          <div className="fa-solid fa-horse logo-header">
            {/* <span className="title-header">AppSus</span> */}
          </div>
        </Link>
        <div className="links-header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/note">Note</NavLink>
          <NavLink to="/mail">Mail</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </nav>
    </header>
  )
}
