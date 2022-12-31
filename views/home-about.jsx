export function HomeAbout() {
  return (
    <article className="home-about">
      <section className="about-title-container">
        <h1 className="about-title">Our Team</h1>
      </section>

      <section className="team-member-container">
        <article className="team-member">
          <article className="general-info">
            <a href="https://www.linkedin.com/in/sidneysebban/" target="_blank">
              <img
                className="avatar-team-member"
                src="assets/img/home/Team/sidney.jpg"
                alt="Sidney Sebban"
              />
            </a>
            <h2 className="name-title">Sidney Sebban</h2>
            <p className="job-title">
              Surfer, Video Maker and Full Stack Developer
            </p>
            <div className="social-links-container">
              <a
                className="fa fa-instagram social-link"
                href="https://www.instagram.com/darkfall48/"
                target="_blank"
              ></a>
              <a
                className="fa fa-youtube-play social-link"
                href="https://www.youtube.com/@Darkfall48"
                target="_blank"
              ></a>
              <a
                className="fa fa-facebook social-link"
                href="https://www.facebook.com/sidneysebban"
                target="_blank"
              ></a>
              <a
                className="fa fa-github social-link"
                href="https://github.com/Darkfall48"
                target="_blank"
              ></a>
              <a
                className="fa fa-linkedin social-link"
                href="https://www.linkedin.com/in/sidneysebban/"
                target="_blank"
              ></a>
            </div>
          </article>

          <article className="about-description">
            Since my childhood, I have always been passionate about new
            technologies. I started with website and video game development as
            well as arduino and robotics projects. <br />
            <br />
            I also managed a youtube channel until 2018. <br />
            <br />
            Thanks to my 3 years in the army, I was able to deepen my knowledge
            and to put it into practice. I also had the opportunity to learn how
            to work in a team and how to lead people. <br />
            <br />
            After finishing the army in 2021, I decided to undertake a
            professional training in Computer Engineering. <br />
            <br />
            And now I am learning Full Stack Development.
          </article>
        </article>

        <article className="team-member">
          <article className="general-info">
            <img
              className="avatar-team-member"
              src="assets/img/home/Team/Keren.png"
              alt="Keren Siebner"
            />
            <h2 className="name-title">Keren Siebner</h2>
            <p className="job-title">Olympian, Engineer and Mother</p>
            <div className="social-links-container">
              <a
                className="fa fa-wikipedia-w social-link"
                href="https://en.wikipedia.org/wiki/Keren_Siebner"
              ></a>
              <a
                className="fa fa-facebook social-link"
                href="https://www.facebook.com/profile.php?id=100063468005792&paipv=0&eav=AfZc9iwC46CVug6rhX-xysz353TjTeNVxf8NZ2Hy4BanitPzNCeALGkrZDEFEn_sog0&_rdr"
              ></a>
              <a
                className="fa fa-linkedin social-link"
                href="https://www.linkedin.com/in/keren-siebner-b589a5a7/"
              ></a>
              <a
                className="fa fa-instagram social-link"
                href="https://www.instagram.com/kerensiebner/?hl=en&__coig_restricted=1"
              ></a>
            </div>
          </article>

          <article className="about-description">
            Born and raised in Israel. I started swimming at age 9. At age 18, I
            moved to University of Georgia Tech where I got a scholarship,
            competed for division 1, and graduated with highest honors B.A. in
            Industrial Engineering.
            <br /> <br />
            At 2012 I joined the IDF inteligence force. During those years I
            broke the swimming national records and represented Israel in
            European and World championships and 2016 Rio Olympic games.
            <br />
            <br />
            In perallel to swimming, I worked at Biopahrmax group, from 2019 was
            promoted to COO.
            <br />
            <br />
            At 2017 I married Gilad Zilberman and became a mother to Emma and
            Dani.
            <br />
            <br />
            Recently I've decided to make a career change of path and persue my
            passion for coding.
          </article>
        </article>
      </section>
    </article>
  )
}
