import { renderLayout } from './components/layout.js'
import { renderAboutPage } from './pages/about.js'
import { renderContactPage } from './pages/contact.js'
import { renderHomePage } from './pages/home.js'
import { renderProjectsPage } from './pages/projects.js'
import { renderProjectDetailPage } from './pages/project-detail.js'

const pages = {
  home: renderHomePage,
  about: renderAboutPage,
  projects: renderProjectsPage,
  contact: renderContactPage,
}

const projectRoutes = {
  '/projects/city-imus': 'cityImus',
  '/projects/smart-parking': 'smartParking',
  '/projects/new-web-project': 'newWebProject',
  '/projects/new-arduino-project': 'newArduinoProject',
}

function currentPage() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (projectRoutes[path]) return projectRoutes[path]
  return path === '/about' || path === '/projects' || path === '/contact' ? path.slice(1) : 'home'
}

function setupContactForm() {
  const form = document.querySelector('#contact-form')
  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    event.currentTarget.querySelector('.form-status').textContent = 'Thanks! Your message is ready to send.'
    event.currentTarget.reset()
  })
}

function setupMobileMenu() {
  const button = document.querySelector('.mobile-menu-button')
  const navigation = document.querySelector('.site-header nav')
  if (!button || !navigation) return
  const close = () => {
    navigation.classList.remove('menu-open')
    button.classList.remove('menu-active')
    button.setAttribute('aria-expanded', 'false')
    button.setAttribute('aria-label', 'Open navigation')
  }
  button.addEventListener('click', () => {
    const open = navigation.classList.toggle('menu-open')
    button.classList.toggle('menu-active', open)
    button.setAttribute('aria-expanded', String(open))
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation')
  })
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', close))
}

function setupProjectFilters() {
  const cards = [...document.querySelectorAll('.featured-card')]
  const buttons = [...document.querySelectorAll('.filter-button')]
  const search = document.querySelector('#project-search')
  if (!cards.length || !search) return
  let filter = 'all'
  const update = () => {
    const query = search.value.trim().toLowerCase()
    cards.forEach((card) => {
      const matchesFilter = filter === 'all' || card.dataset.category === filter
      card.hidden = !(matchesFilter && card.textContent.toLowerCase().includes(query))
    })
  }
  buttons.forEach((button) => button.addEventListener('click', () => {
    filter = button.dataset.filter
    buttons.forEach((item) => item.classList.toggle('active', item === button))
    update()
  }))
  search.addEventListener('input', update)
}

export function renderPage() {
  const page = currentPage()
  const content = projectRoutes[window.location.pathname] ? renderProjectDetailPage(page) : pages[page]()
  document.querySelector('#app').innerHTML = renderLayout(page, content)
  setupContactForm()
  setupMobileMenu()
  setupProjectFilters()
}

export function setupRouter() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a')
    if (!link || link.hasAttribute('download') || link.origin !== window.location.origin || !link.pathname.startsWith('/')) return
    event.preventDefault()
    window.history.pushState({}, '', link.pathname)
    renderPage()
    window.scrollTo(0, 0)
  })

  window.addEventListener('popstate', renderPage)
}