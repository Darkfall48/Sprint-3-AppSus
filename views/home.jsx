import { HomeIntro } from './home-intro.jsx'
import { HomeLinks } from './home-links.jsx'
import { HomeAbout } from './home-about.jsx'

export function Home() {
  return (
    <section className="home full main-layout">
      <article className="home-intro-section full">
        <HomeIntro />
      </article>

      <article className="home-links-section full">
        <HomeLinks />
      </article>

      <article className="home-about-section full">
        <HomeAbout />
      </article>
    </section>
  )
}
