export function renderProjectsPage() {
  return `
    <section class="section-shell projects page-section featured-projects">
      <div class="section-heading centered"><h1 class="page-title">My Featured Work</h1><p>A selection of projects shaped through design, code, and curiosity.</p></div>
      <div class="project-toolbar">
        <div class="project-filters" role="group" aria-label="Project filters">
          <button class="filter-button active" type="button" data-filter="all">☰ &nbsp; All</button>
          <button class="filter-button" type="button" data-filter="web">&lt;/&gt; &nbsp; Web Development</button>
          <button class="filter-button" type="button" data-filter="arduino">∞ &nbsp; Arduino</button>
          <button class="filter-button" type="button" data-filter="mobile">▣ &nbsp; Mobile</button>
          <button class="filter-button" type="button" data-filter="graphic">✦ &nbsp; Graphic Design</button>
        </div>
        <label class="project-search"><span aria-hidden="true">⌕</span><input id="project-search" type="search" placeholder="Search Projects..." aria-label="Search projects" /></label>
      </div>
      <div class="featured-grid">
        <a class="featured-card" data-category="web" href="/projects/city-imus"><h2>City of Imus Scholarship Program</h2><span class="project-type web-type">&lt;/&gt; &nbsp; Web Development</span><div class="project-image scholarship-image"></div></a>
        <a class="featured-card" data-category="arduino" href="/projects/smart-parking"><h2>Smart Parking Management System</h2><span class="project-type arduino-type">∞ &nbsp; Arduino</span><div class="project-image parking-image"></div></a>
        <a class="featured-card project-placeholder-card" data-category="web" href="/projects/new-web-project"><h2>Team Porfolio</h2><span class="project-type web-type">&lt;/&gt; &nbsp; Web Development</span><div class="project-image team-portfolio-image"><span>View Project →</span></div></a>
        <a class="featured-card project-placeholder-card" data-category="mobile" href="/projects/mobile-project"><h2>Android-Based Mobile Learning Platform</h2><span class="project-type mobile-type">▣ &nbsp; Mobile</span><div class="project-image mobile-project-image"></div></a>
        <a class="featured-card project-placeholder-card" data-category="graphic" href="/projects/visual-archive"><h2>Visual Archive</h2><span class="project-type graphic-type">✦ &nbsp; Graphic Design</span><div class="project-image first-graphic-image"></div></a>
        <a class="featured-card project-placeholder-card" data-category="graphic" href="/projects/tofu-shop"><h2>Fujiwara Tofu Shop</h2><span class="project-type graphic-type">✦ &nbsp; Graphic Design</span><div class="project-image second-graphic-image"></div></a>
        <a class="featured-card project-placeholder-card" data-category="graphic" href="/projects/starbucks-campaign"><h2>Starbucks Frappuccino Campaign</h2><span class="project-type graphic-type">✦ &nbsp; Graphic Design</span><div class="project-image third-graphic-image"></div></a>
        <a class="featured-card project-placeholder-card" data-category="graphic" href="/projects/portrait-editorial"><h2>Portrait Editorial</h2><span class="project-type graphic-type">✦ &nbsp; Graphic Design</span><div class="project-image fourth-graphic-image"></div></a>
      </div>
      <div class="project-pagination"><span>Selected work by Emmhan Russell</span></div>
    </section>
  `
}