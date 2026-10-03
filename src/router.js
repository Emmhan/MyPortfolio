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
  '/projects/mobile-project': 'mobileProject',
  '/projects/visual-archive': 'visualArchive',
  '/projects/tofu-shop': 'tofuShop',
  '/projects/starbucks-campaign': 'starbucksCampaign',
  '/projects/portrait-editorial': 'portraitEditorial',
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
    const submittedForm = event.currentTarget
    const formData = Object.fromEntries(new FormData(submittedForm))
    const status = submittedForm.querySelector('.form-status')
    const button = submittedForm.querySelector('button[type="submit"]')
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL || 'https://myportfolio-poed.onrender.com/api/contact'
    status.textContent = 'Sending message...'
    button.disabled = true
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const result = await response.json()
        if (!response.ok) throw new Error(result.error || 'Unable to send your message.')
        status.textContent = result.message
        submittedForm.reset()
      })
      .catch((error) => {
        status.textContent = error.message
      })
      .finally(() => {
        button.disabled = false
      })
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

function setupGraphicDetailSizing() {
  const frames = [...document.querySelectorAll('.graphic-detail-frame')]
  if (!frames.length) return
  const resize = () => frames.forEach((frame) => {
    const image = frame.querySelector('img')
    if (!image?.naturalWidth || !image.naturalHeight) return
    const gallery = frame.closest('.graphic-detail-gallery')
    const availableWidth = Math.max(0, (gallery?.parentElement.clientWidth || image.naturalWidth) - 16)
    const scale = Math.min(1, window.innerHeight * .75 / image.naturalHeight, availableWidth / image.naturalWidth)
    const imageWidth = Math.round(image.naturalWidth * scale)
    const imageHeight = Math.round(image.naturalHeight * scale)
    image.style.width = `${imageWidth}px`
    image.style.height = `${imageHeight}px`
    frame.style.width = `${imageWidth + 8}px`
    if (gallery) gallery.style.width = `${imageWidth + 8}px`
  })
  frames.forEach((frame) => {
    const image = frame.querySelector('img')
    if (image.complete) resize()
    else image.addEventListener('load', resize, { once: true })
  })
  window.addEventListener('resize', resize)
}

export function renderPage() {
  const page = currentPage()
  const content = projectRoutes[window.location.pathname] ? renderProjectDetailPage(page) : pages[page]()
  document.querySelector('#app').innerHTML = renderLayout(page, content)
  setupContactForm()
  setupMobileMenu()
  setupProjectFilters()
  setupGraphicDetailSizing()
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