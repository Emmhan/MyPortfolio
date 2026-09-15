export function renderLayout(page, content) {
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="Emmhan Russell home">ER<span>EMMHAN RUSSELL</span></a>
      <nav aria-label="Primary navigation">
        <a class="${page === 'home' ? 'active' : ''}" href="/">Home</a>
        <a class="${page === 'about' ? 'active' : ''}" href="/about">About</a>
        <a class="${page === 'projects' ? 'active' : ''}" href="/projects">Projects</a>
        <a class="${page === 'contact' ? 'active' : ''}" href="/contact">Contact</a>
      </nav>
        <button class="mobile-menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span><span></span></button>
    </header>
    <main>${content}</main>
    <footer><span>© 2026 Emmhan Russell.</span><span>Made with intention.</span></footer>
  `
}