import { gsap } from 'gsap'
import { onMounted, onBeforeUnmount, unref } from 'vue'
import { prefersReducedMotion } from './useScrollAnimation'

/**
 * Magnetic hover: elements matching `selector` (default `[data-magnetic]`)
 * drift toward the cursor while hovered, then spring back.
 */
export function useMagnetic(containerRef, options = {}) {
  const { strength = 0.3, selector = '[data-magnetic]' } = options
  const reduced = prefersReducedMotion()
  const cleanups = []

  onMounted(() => {
    if (reduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const container = unref(containerRef)
    if (!container) return

    container.querySelectorAll(selector).forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' })
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' })
      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        xTo((e.clientX - (r.left + r.width / 2)) * strength)
        yTo((e.clientY - (r.top + r.height / 2)) * strength)
      }
      const onLeave = () => {
        xTo(0)
        yTo(0)
      }
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    })
  })

  onBeforeUnmount(() => cleanups.forEach((fn) => fn()))
}
