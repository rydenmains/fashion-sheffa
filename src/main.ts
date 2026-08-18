import './style.css'
import { animate, inView, scroll } from 'motion'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

type Product = { img: string; name: string }

const PRODUCTS: Product[] = [
  { img: './image1.webp', name: 'One Set Muslim' },
  { img: './image2.webp', name: 'Daster' },
  { img: './image3.webp', name: 'Daster' },
  { img: './image4.webp', name: 'Tunik' },
  { img: './image5.webp', name: 'Kemeja' },
  { img: './image7.webp', name: 'Tunik' },
  { img: './image8.webp', name: 'Daster' },
  { img: './image9.webp', name: 'Dress' },
]

const toggle = document.querySelector<HTMLButtonElement>('.nav__toggle')
const navLinks = document.querySelector<HTMLUListElement>('.nav__links')

function closeMenu(): void {
  toggle?.classList.remove('is-open')
  navLinks?.classList.remove('is-open')
  toggle?.setAttribute('aria-expanded', 'false')
}

toggle?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('is-open') ?? false
  toggle.classList.toggle('is-open', open)
  toggle.setAttribute('aria-expanded', String(open))
})

navLinks?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) closeMenu()
})

const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
const navAnchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav__links a[href^="#"]'))

const scrollSpy = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
    if (!visible) return
    const id = visible.target.id
    navAnchors.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`))
  },
  { rootMargin: '-40% 0px -55% 0px' }
)
sections.forEach((s) => scrollSpy.observe(s))

// Hero intro sequence — one authored moment
document.querySelectorAll<HTMLElement>('.hero__line, .hero__sub, .btn--wa')
  .forEach((el) => el.classList.add('is-in'))

// Hero kawung motif + parallax
const hero = document.querySelector<HTMLElement>('.hero')
const heroFabric = document.querySelector<HTMLElement>('.hero__fabric')
if (hero && heroFabric && !reduceMotion) {
  scroll(animate(heroFabric, { y: [0, 60] }), { target: hero, offset: ['start start', 'end start'] })
}

// Dark-section batik motif — kawung set in markup, only on Visi-Misi

// Scroll-linked parallax on editorial imagery (react-parallax style)
document.querySelectorAll<HTMLElement>('.about__gallery img, .vm__media img, .map iframe').forEach((el) => {
  if (reduceMotion) return
  scroll(animate(el, { y: [20, -20] }), {
    target: el.closest('section') ?? el,
    offset: ['start end', 'end start'],
  })
})

// Section reveals — CSS transition drives the single animation; stagger via transition-delay
const reveals = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
reveals.forEach((el) => {
  inView(el, () => {
    el.classList.add('is-visible')
  })
})

// Products
const grid = document.querySelector<HTMLElement>('#products-grid')
if (grid) {
  grid.innerHTML = PRODUCTS.map(
    (p, i) => `
      <button class="product" data-index="${i}" aria-label="Lihat ${p.name}">
        <span class="product__idx">${String(i + 1).padStart(2, '0')}</span>
        <span class="product__img-wrap">
          <img class="product__img" src="${p.img}" alt="${p.name}" loading="lazy" width="600" height="800">
        </span>
        <span class="product__name">${p.name}</span>
      </button>
    `
  ).join('')

  const cards = Array.from(grid.querySelectorAll<HTMLElement>('.product'))
  inView(grid, () => {
    if (reduceMotion) return
    animate(
      cards,
      { opacity: 1, y: 0 },
      { delay: (i) => 0.04 * Math.min(i, 6), duration: 0.42, ease: 'easeOut' }
    )
  })

  // react-parallax style: image drifts opposite to scroll, slower than page
  cards.forEach((card) => {
    const img = card.querySelector<HTMLElement>('.product__img')
    if (!img || reduceMotion) return
    scroll(animate(img, { y: [28, -28] }), {
      target: card,
      offset: ['start end', 'end start'],
    })
  })
}

// Lightbox
const lightbox = document.querySelector<HTMLElement>('#lightbox')
const lightboxImg = document.querySelector<HTMLImageElement>('#lightbox-img')
const lightboxCaption = document.querySelector<HTMLElement>('#lightbox-caption')
let current = 0

function show(n: number): void {
  current = (n + PRODUCTS.length) % PRODUCTS.length
  const p = PRODUCTS[current]
  if (lightboxImg) {
    lightboxImg.src = p.img
    lightboxImg.alt = p.name
  }
  if (lightboxCaption) lightboxCaption.textContent = p.name
  if (lightbox) {
    lightbox.hidden = false
    animate(lightbox, { opacity: [0, 1] }, { duration: 0.25, ease: 'easeOut' })
    if (lightboxImg) {
      lightboxImg.style.opacity = '0'
      animate(lightboxImg, { opacity: 1, scale: [0.94, 1] }, { duration: 0.4, ease: [0.16, 1, 0.3, 1] })
    }
  }
  document.body.style.overflow = 'hidden'
}

function closeLightbox(): void {
  if (lightbox) {
    animate(lightbox, { opacity: 0 }, { duration: 0.15, ease: 'easeOut' }).finished.then(() => {
      lightbox.hidden = true
    })
  }
  document.body.style.overflow = ''
}

grid?.addEventListener('click', (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>('.product')
  if (btn?.dataset.index) show(Number(btn.dataset.index))
})

document.querySelector('.lightbox__close')?.addEventListener('click', closeLightbox)
document.querySelector('.lightbox__prev')?.addEventListener('click', () => show(current - 1))
document.querySelector('.lightbox__next')?.addEventListener('click', () => show(current + 1))

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox()
})

let touchX = 0
lightbox?.addEventListener('touchstart', (e) => {
  touchX = e.touches[0].clientX
})
lightbox?.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchX
  if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1))
})

document.addEventListener('keydown', (e) => {
  if (lightbox?.hidden) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') show(current - 1)
  if (e.key === 'ArrowRight') show(current + 1)
})

// Dynamic year
const yearEl = document.querySelector<HTMLElement>('#year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())