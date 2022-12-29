const { Link } = ReactRouterDOM


export function Home() {

    return <section className="home full main-layout">

        <article className="home-intro full">
            <h1 className="logo">APPSUS</h1>
            <h2 >Smart app for busy people <br />You just focus on being a unicorn</h2>
            <a className="a-btn" href="#">Check Out Our Apps!</a>
        </article>

        <article className="home-app">
        </article>

        <article className="home-links">
            <h1 className="home-links-header">Choose your app!</h1>
            <h3 className="home-links-sub">All the apps you need integrated and in one place</h3>
            <Link className="home-links-email" to="/mail">
                {/* <label htmlFor="mail">Mail</label> */}
                <div className="fa-solid fa-envelope-open-text apps-links"></div>
                {/* <img className="mail-logo home-links" src="./assets/img/home/icons/mail-icon.png" /> */}
            </Link>
            <Link className="home-links-notes" to="/note">
                {/* <label htmlFor="mail">Notes</label> */}
                <div className="fa-solid fa-clipboard apps-links"></div>
                {/* <img className="note-logo home-links" src="./assets/img/home/icons/note-icon.png" /> */}
            </Link >
            {/* <label htmlFor="mail">Books</label> */}
            <Link className="home-links-books" to="/book">

                <div className="fa-solid fa-book apps-links"></div>
            </Link>
        </article>

        <article className="home-about full">
            <h1 className="about-header"> About Us</h1>

            <div className="team-member">

                <div className="general-info">
                    {/* <a href="https://www.linkedin.com/in/sidneysebban/" target="_blank"
                        ><img
                                class="mx-auto rounded-circle"
                                src="img/team/2.jpg"
                                alt="That's me"
                            /></a> */}
                    <h4>Sidney Sebban</h4>
                    <p className="text-muted">Full Stack Developer</p>
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/darkfall48/" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.youtube.com/@Darkfall48" target="_blank">
                                <i className="fa fa-youtube-play"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com/sidneysebban" target="_blank">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/Darkfall48" target="_blank">
                                <i className="fa fa-github"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href="https://www.linkedin.com/in/sidneysebban/"
                                target="_blank"
                            >
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>


                <p className="about-description">
                    Since my childhood, I have always been passionate about new
                    technologies. I started with website and video game development as
                    well as arduino and robotics projects. <br /><br />
                    I also managed a youtube channel until 2018. <br /><br />
                    Thanks to my 3 years in the army, I was able to deepen my knowledge
                    and to put it into practice. I also had the opportunity to learn how
                    to work in a team and how to lead people. <br /><br />
                    After finishing the army in 2021, I decided to undertake a
                    professional training in Computer Engineering. <br /><br />
                    And now I am learning Full Stack Development.
                </p>

            </div>
            <div className="team-member">
                <div className="general-info">

                    {/* <img class="mx-auto rounded-circle" src="img/team/2.png" alt=""> */}
                    <h4>Keren Siebner</h4>
                    <p className="text-muted">Olympian, Engineer and Mother</p>
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="https://en.wikipedia.org/wiki/Keren_Siebner">
                                <i className="fa fa-wikipedia-w"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href="https://www.facebook.com/profile.php?id=100063468005792&paipv=0&eav=AfZc9iwC46CVug6rhX-xysz353TjTeNVxf8NZ2Hy4BanitPzNCeALGkrZDEFEn_sog0&_rdr">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/keren-siebner-b589a5a7/">
                                <i className="fa fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.instagram.com/kerensiebner/?hl=en&__coig_restricted=1">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>


                <p className="about-description">I was born and raised in Israel, to parents Miron and Osnat.
                    When I was 9 I discovered a passion for swimming. Dealing with ADHD and social difficulties at school,
                    swimming was my where I found my place.
                    When I was 18, straight after highschool, I moved to the USA to University of Georgia Tech where I got a full
                    scholarship, competed for division 1 conference and graduated with highest honors bachlors in Industrial
                    Engineering.
                    At 2012 I returned to Israel, joined the IDF inteligence force and continued swimming. During those years I
                    broke the national record in 200 fly and 200 back and represented Israel in European and World championships
                    and 2016 Rio Olympic games.
                    In perallel to swimming, I worked at Biopahrmax, from 2019 was promoted to COO.
                    At 2017 I married Gilad Zilberman and two years later I became a mother to Emma. And later, 2021, Dani joined
                    our family.
                    Recently I've decided to make a career change of path and persue coding.</p>

            </div>
        </article>


    </section>
}