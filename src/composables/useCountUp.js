import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onBeforeUnmount, unref } from 'vue'
import { prefersReducedMotion } from './useScrollAnimation'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger)

/**
 * Count numbers up from 0 to `data-count` when they enter the viewport.
 * Optional `data-suffix` appended to the value.
 */
export function useCountUp(containerRef, options = {}) {
  const { selector = '[data-count]' } = options
  const reduced = prefersReducedMotion()
  let ctx

  onMounted(() => {
    const container = unref(containerRef)
    if (!container) return
    ctx = gsap.context(() => {
      container.querySelectorAll(selector).forEach((el) => {
        const target = parseFloat(el.dataset.count)
        const suffix = el.dataset.suffix || ''
        if (Number.isNaN(target)) return
        if (reduced) {
          el.textContent = Math.round(target) + suffix
          return
        }
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.v) + suffix
          },
        })
      })
    }, container)
  })

  onBeforeUnmount(() => ctx && ctx.revert())
}
