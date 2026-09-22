const projects = {
  cityImus: {
    title: 'City of Imus Scholarship Program', date: 'November 17, 2024',
    url: 'https://example.com',
    image: '/Images/imused.png',
    tools: ['HTML5', 'PHP', 'CSS3', 'MySQL', 'JavaScript', 'Bootstrap'],
    description: 'The City of Imus Scholarship is designed not only to ease the financial burden of higher education but also to invest in the future leaders, innovators, and change-makers of tomorrow. This program empowers the next generation of thinkers, builders, advocates, and leaders by supporting them financially and personally throughout their higher education journey.\n\nOur system simplifies the scholarship application process, providing users with an intuitive experience. Users can explore scholarship information, review application requirements, and monitor their scholarship status through a structured dashboard.'
  },
  smartParking: {
    title: 'Smart Parking Management System', date: 'June 18, 2024',
    url: 'https://example.com',
    image: '/Images/smartparking.jpg',
    tools: ['Arduino', 'C++', 'HTML5', 'CSS3'],
    description: 'A practical smart parking concept that uses connected hardware and a clear interface to help drivers find and manage available parking spaces. The project focuses on making everyday parking simpler, faster, and more organized.'
  },
  newWebProject: {
    title: 'Team Porfolio', date: 'Febuary 1, 2025',
    url: 'https://innobit.vercel.app',
    image: '/Images/teamportfolio.png',
    tools: ['React.js', 'Tailwind', 'Node.js'],
    description: 'A team portfolio for InnoBit, a student team from Cavite State University - Imus Campus united by a passion for technology, innovation, and meaningful impact. The website introduces the team, shares its vision and mission, highlights its projects, and provides a space for collaboration and connection.'
  },
  mobileProject: {
    title: 'AN ANDROID-BASED MOBILE LEARNING PLATFORM FOR DCIT-21 INTRODUCTION TO COMPUTING COURSE WITH 2D SIMULATION AND PERFORMANCE MONITORING', date: 'July 18, 2025',
    url: 'https://example.com',
    image: '/Images/mobile.png',
    tools: ['Unity', 'C#', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description: 'An Android-based mobile learning platform designed to enhance the learning experience of DCIT-21: Introduction to Computing students at Cavite State University–Imus Campus. The system provides interactive lessons, assessments, and 2D simulations of computer hardware activities, allowing students to practice concepts such as computer assembly, disassembly, and basic hardware servicing in a virtual environment. The platform also includes performance monitoring to help students track their progress while giving instructors a way to monitor and evaluate learning performance. By combining mobile learning, interactive simulations, and progress tracking, the project aims to provide students with accessible hands-on practice beyond the traditional classroom and laboratory setting.'
  }
}

const toolIcons = {
  HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  MySQL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  Unity: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  Arduino: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  Tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
}

export function renderProjectDetailPage(project) {
  const detail = projects[project]
  return `
    <section class="project-detail page-section">
      <a class="project-back" href="/projects">← All Projects</a>
      <div class="project-detail-grid">
        <div class="detail-gallery"><img src="${detail.image}" alt="${detail.title} project preview" /></div>
        <div class="detail-copy"><h1>${detail.title}</h1><p class="detail-date">${detail.date}</p><article><h2>Description</h2>${detail.description.split('\n\n').map((paragraph) => `<p>${paragraph}</p>`).join('')}${project === 'newWebProject' ? `<a class="project-view-button" href="${detail.url}" target="_blank" rel="noreferrer">View Project <span aria-hidden="true">↗</span></a>` : ''}</article></div>
      </div>
      <section class="detail-tools"><h2>Tools:</h2><div class="detail-tools-grid">${detail.tools.map((tool) => `<div class="skill-card detail-tool-card"><img src="${toolIcons[tool]}" alt="" /><span>${tool}</span></div>`).join('')}</div></section>
    </section>
  `
}