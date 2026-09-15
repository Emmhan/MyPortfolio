export function renderProjectsPage() {
  return `
    <section class="section-shell projects page-section featured-projects">
      <div class="section-heading centered"><h1 class="page-title">My Featured Work</h1><p>A selection of projects shaped through design, code, and curiosity.</p></div>
      <div class="project-toolbar">
        <div class="project-filters" role="group" aria-label="Project filters">
          <button class="filter-button active" type="button" data-filter="all">☰ &nbsp; All</button>
          <button class="filter-button" type="button" data-filter="web">&lt;/&gt; &nbsp; Web Development</button>
          <button class="filter-button" type="button" data-filter="arduino">∞ &nbsp; Arduino</button>
        </div>
        <label class="project-search"><span aria-hidden="true">⌕</span><input id="project-search" type="search" placeholder="Search Projects..." aria-label="Search projects" /></label>
      </div>
      <div class="featured-grid">
        <a class="featured-card" data-category="web" href="/projects/city-imus"><h2>City of Imus Scholarship Program</h2><span class="project-type web-type">&lt;/&gt; &nbsp; Web Development</span><div class="project-image scholarship-image"><span>View Project →</span></div></a>
        <a class="featured-card" data-category="arduino" href="/projects/smart-parking"><h2>Smart Parking Management System</h2><span class="project-type arduino-type">∞ &nbsp; Arduino</span><div class="project-image parking-image"><span>View Project →</span></div></a>
      </div>
      <div class="project-pagination"><span>Selected work by Emmhan Russell</span></div>
    </section>
  `
}