import './style.css'

const portrait = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85'

const layout = (page, content) => `
  <header class="site-header">
    <a class="brand" href="/" aria-label="Emmhan Russell home">ER<span>EMMHAN RUSSELL</span></a>
    <nav aria-label="Primary navigation">
      <a class="${page === 'home' ? 'active' : ''}" href="/">Home</a>
      <a class="${page === 'about' ? 'active' : ''}" href="/about">About</a>
      <a class="${page === 'projects' ? 'active' : ''}" href="/projects">Projects</a>
      <a class="${page === 'contact' ? 'active' : ''}" href="/contact">Contact</a>
    </nav>
  </header>
  <main>${content}</main>
  <footer><span>© 2026 Emmhan Russell.</span><span>Made with intention.</span></footer>
`

const pages = {
  home: () => `
    <section class="hero section-shell">
      <div class="hero-copy">
        <h1>Hello, Im <span>Emmhan!</span></h1>
        <p class="hero-lede">Passionately creating innovative digital experiences, rooted in user needs.</p>
        <a class="button button-dark" href="/projects">Get Started</a>
      </div>
      <div class="portrait-wrap"><img class="portrait" src="${portrait}" alt="Portrait of Emmhan Russell" /></div>
    </section>
  `,
  about: () => `
    <section class="section-shell about page-section">
      <div class="section-heading"><p class="eyebrow">01 / About</p><h1 class="page-title">About Me</h1></div>
      <div class="about-content">
        <div class="image-placeholder about-image" role="img" aria-label="Workspace image"></div>
        <div class="about-copy">
          <p>I’m currently an undergraduate IT student passionate about technology and creatively designing. Through my academic journey and personal projects, I’ve developed a strong foundation in web development, user experience, and visual design.</p>
          <p>I enjoy turning complex ideas into simple, meaningful experiences. My goal is to create digital products that feel thoughtful, useful, and uniquely human.</p>
          <a class="button button-dark" href="/contact">Download Resume <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div class="skills-heading"><h2>Skills &amp; Technologies</h2><p>Tools I use to turn ideas into reality.</p></div>
      <div class="skills-grid"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Figma</span><span>Tailwind</span><span>Git</span><span>Node.js</span></div>
    </section>
  `,
  projects: () => `
    <section class="section-shell projects page-section">
      <div class="section-heading centered"><p class="eyebrow">02 / Selected work</p><h1 class="page-title">My Projects</h1><p>Ideas brought to life through design and code.</p></div>
      <div class="project-grid">
        <a class="project-card project-one" href="/contact"><div><small>01 / Web design</small><h3>Studio Archive</h3></div><span>↗</span></a>
        <a class="project-card project-two" href="/contact"><div><small>02 / Development</small><h3>Local Spaces</h3></div><span>↗</span></a>
        <a class="project-card project-three" href="/contact"><div><small>03 / Branding</small><h3>Forma Objects</h3></div><span>↗</span></a>
        <a class="project-card project-four" href="/contact"><div><small>04 / Concept</small><h3>Daylight Journal</h3></div><span>↗</span></a>
      </div>
    </section>
  `,
  contact: () => `
    <section class="section-shell contact page-section">
      <div class="section-heading"><p class="eyebrow">03 / Contact</p><h1 class="page-title">Let’s work<br><span>together.</span></h1></div>
      <div class="contact-content">
        <p>Have a project in mind, or just want to say hello? Send me a message and I’ll get back to you soon.</p>
        <form id="contact-form">
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@email.com" /></label>
          <label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about your project"></textarea></label>
          <button class="button button-dark" type="submit">Send message <span aria-hidden="true">↗</span></button>
          <p class="form-status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `,
}

function currentPage() {
  const path = window.location.pathname.replace(/\/$/, '')
  return path === '/about' || path === '/projects' || path === '/contact' ? path.slice(1) : 'home'
}

function render() {
  const page = currentPage()
  document.querySelector('#app').innerHTML = layout(page, pages[page]())
  const form = document.querySelector('#contact-form')
  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    event.currentTarget.querySelector('.form-status').textContent = 'Thanks! Your message is ready to send.'
    event.currentTarget.reset()
  })
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a')
  if (!link || link.origin !== window.location.origin || !link.pathname.startsWith('/')) return
  event.preventDefault()
  window.history.pushState({}, '', link.pathname)
  render()
  window.scrollTo(0, 0)
})

window.addEventListener('popstate', render)
render()
