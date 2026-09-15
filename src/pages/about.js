export function renderAboutPage() {
  return `
    <section class="section-shell about page-section">
      <div class="about-content">
        <div class="about-image-frame"><img class="about-image" src="/Images/aboutmeprofile.jpg" alt="Emmhan Russell" /></div>
        <div class="about-copy">
          <h2>About Me</h2>
          <p>I’m currently an undergraduate IT student passionate about technology and software development. Through my academic journey and OJT internship, I’ve been developing my skills in various programming languages and technologies.</p>
          <p>I enjoy building web applications, solving complex problems, and continuously learning new technologies. My goal is to become a skilled software developer and contribute to innovative projects.</p>
          <a class="button button-dark" href="/BANTOLIN_RESUME.pdf" download="Emmhan-Russell-Resume.pdf">Download Resume <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div class="skills-heading"><h2>Skills &amp; Technologies</h2><p>Tools I use to turn ideas into reality.</p></div>
      <div class="skills-grid">
        <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="" /><span>HTML</span></div>
        <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="" /><span>CSS</span></div>
        <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="" /><span>Figma</span></div>
        <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="" /><span>Unity</span></div>
        <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="" /><span>JavaScript</span></div>
        <div class="skill-card"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="" /><span>React</span></div>
      </div>
    </section>
  `
}