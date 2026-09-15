const projects = {
  cityImus: {
    title: 'City of Imus Scholarship Program', date: 'July 3, 2024',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85',
    tools: ['HTML5', 'PHP', 'CSS3', 'MySQL', 'JavaScript', 'Bootstrap'],
    description: 'The City of Imus Scholarship is designed not only to ease the financial burden of higher education but also to invest in the future leaders, innovators, and change-makers of tomorrow. This program empowers the next generation of thinkers, builders, advocates, and leaders by supporting them financially and personally throughout their higher education journey.\n\nOur system simplifies the scholarship application process, providing users with an intuitive experience. Users can explore scholarship information, review application requirements, and monitor their scholarship status through a structured dashboard.'
  },
  smartParking: {
    title: 'Smart Parking Management System', date: 'June 18, 2024',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1400&q=85',
    tools: ['Arduino', 'C++', 'HTML5', 'CSS3'],
    description: 'A practical smart parking concept that uses connected hardware and a clear interface to help drivers find and manage available parking spaces. The project focuses on making everyday parking simpler, faster, and more organized.'
  },
  newWebProject: {
    title: 'New Web Project', date: 'Add project date',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    tools: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'Add your project description here, then replace the project link below with the live project URL.'
  },
  newArduinoProject: {
    title: 'New Arduino Project', date: 'Add project date',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    tools: ['Arduino', 'C++'],
    description: 'Add your project description here, then replace the project link below with the live project URL.'
  }
}

export function renderProjectDetailPage(project) {
  const detail = projects[project]
  return `
    <section class="project-detail page-section">
      <a class="project-back" href="/projects">← All Projects</a>
      <div class="project-detail-grid">
        <div class="detail-gallery"><img src="${detail.image}" alt="${detail.title} project preview" /></div>
        <div class="detail-copy"><h1>${detail.title}</h1><p class="detail-date">${detail.date}</p><article><h2>Description</h2>${detail.description.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('')}<a class="project-view-button" href="https://example.com" target="_blank" rel="noreferrer">View Project <span aria-hidden="true">↗</span></a></article></div>
      </div>
      <section class="detail-tools"><h2>Tools:</h2><div>${detail.tools.map((tool) => `<span>${tool}</span>`).join('')}</div></section>
    </section>
  `
}