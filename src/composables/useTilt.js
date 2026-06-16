import { gsap } from 'gsap'
import { onMounted, onBeforeUnmount, unref } from 'vue'
import { prefersReducedMotion } from './useScrollAnimation'

/**
 * Pointer-driven 3D tilt + spotlight for cards.
 * Wires every descendant matching `selector` (default `[data-tilt]`).
 * Sets CSS vars --spot-x / --spot-y for an optional radial highlight.
 */
export function useTilt(containerRef, options = {}) {
  const { max = 7, selector = '[data-tilt]' } = options
  const reduced = prefersReducedMotion()
  const cleanups = []

  onMounted(() => {
    if (reduced) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const container = unref(containerRef)
    if (!container) return

    container.querySelectorAll(selector).forEach((el) => {
      gsap.set(el, { transformPerspective: 1000, transformStyle: 'preserve-3d' })
      const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' })
      const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' })

      const onMove = (e) => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        rotY((px - 0.5) * max * 2)
        rotX(-(py - 0.5) * max * 2)
        el.style.setProperty('--spot-x', `${(px * 100).toFixed(1)}%`)
        el.style.setProperty('--spot-y', `${(py * 100).toFixed(1)}%`)
      }
      const onLeave = () => {
        rotX(0)
        rotY(0)
        el.style.setProperty('--spot-x', '50%')
        el.style.setProperty('--spot-y', '130%')
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
