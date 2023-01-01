const { useEffect, useRef } = React

const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
  const linksHeaderRef = useRef(null)

  function toggleBar() {
    if (linksHeaderRef.current.style.display === 'flex') {
      console.log('Display to none')
      linksHeaderRef.current.style.display = ''
    } else {
      linksHeaderRef.current.style.display = 'flex'
    }
  }

  return (
    <header className="app-header main-layout full">
      <nav className=" nav-header header-layout">
        <article className="nav-header-logo-section">
          <Link to="/">
            <div className="fa-solid fa-horse logo-header">
              <span className="title-header">AppSus</span>
            </div>
          </Link>
        </article>
        <article className="nav-header-links-section" ref={linksHeaderRef}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/note">Note</NavLink>
          <NavLink to="/mail">Mail</NavLink>
          <NavLink to="/book">Book</NavLink>
        </article>
        <article className="nav-header-more-section">
          <a
            title="Show more options"
            onClick={toggleBar}
            className="fa-solid fa-bars"
          ></a>
        </article>
      </nav>
    </header>
  )
}
