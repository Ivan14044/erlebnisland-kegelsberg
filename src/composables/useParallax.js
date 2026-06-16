import { gsap } from 'gsap'
import { onMounted, onBeforeUnmount, unref } from 'vue'
import { prefersReducedMotion } from './useScrollAnimation'

/**
 * Subtle mouse-following parallax for decorative layers.
 * Any descendant with a `data-parallax="0.4"` attribute is moved relative to
 * the pointer; the value sets its depth (larger = more movement).
 *
 * @param {import('vue').Ref<HTMLElement>|HTMLElement} containerRef
 * @param {{ strength?: number }} [options]
 */
export function useParallax(containerRef, options = {}) {
  const { strength = 28 } = options
  const reduced = prefersReducedMotion()
  let handler = null
  const setters = []

  onMounted(() => {
    if (reduced) return
    const container = unref(containerRef)
    if (!container) return

    const layers = container.querySelectorAll('[data-parallax]')
    layers.forEach((el) => {
      setters.push({
        depth: parseFloat(el.dataset.parallax) || 0.2,
        xTo: gsap.quickTo(el, 'x', { duration: 0.9, ease: 'power3' }),
        yTo: gsap.quickTo(el, 'y', { duration: 0.9, ease: 'power3' }),
      })
    })

    if (!setters.length) return

    handler = (e) => {
      const dx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
      const dy = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
      setters.forEach((s) => {
        s.xTo(-dx * strength * s.depth)
        s.yTo(-dy * strength * s.depth)
      })
    }
    window.addEventListener('mousemove', handler, { passive: true })
  })

  onBeforeUnmount(() => {
    if (handler) window.removeEventListener('mousemove', handler)
  })
}
