const portrait = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=85'

export function renderHomePage() {
  return `
    <section class="hero section-shell landing-hero">
      <div class="hero-copy">
          <h1>Hello, Im <span>Emmhan!</span></h1>
        <p class="hero-lede">Passionately creating innovative digital experiences, rooted in user needs.</p>
        <a class="button button-dark" href="/about">Get Started</a>
      </div>
      <div class="portrait-wrap"><img class="portrait" src="${portrait}" alt="Portrait of Emmhan Russell" /></div>
    </section>
  `
}