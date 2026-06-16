import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onBeforeUnmount, unref } from 'vue'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Build a small set of reusable, reduced-motion-aware animation helpers.
 */
function makeHelpers(reduced) {
  /** Fade + slide a single element / selector up as it enters the viewport. */
  const reveal = (target, opts = {}) => {
    if (reduced) {
      gsap.set(target, { opacity: 1, y: 0 })
      return
    }
    gsap.from(target, {
      opacity: 0,
      y: opts.y ?? 48,
      duration: opts.duration ?? 1.1,
      ease: opts.ease ?? 'power3.out',
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? target,
        start: opts.start ?? 'top 82%',
        once: true,
      },
    })
  }

  /** Staggered reveal for a group of elements (cards, list items, ...). */
  const stagger = (targets, opts = {}) => {
    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }
    gsap.from(targets, {
      opacity: 0,
      y: opts.y ?? 42,
      duration: opts.duration ?? 0.95,
      ease: opts.ease ?? 'power3.out',
      stagger: opts.stagger ?? 0.12,
      scrollTrigger: {
        trigger: opts.trigger ?? targets,
        start: opts.start ?? 'top 80%',
        once: true,
      },
    })
  }

  /** Continuous scroll-linked parallax (scrub) on an element. */
  const parallax = (target, opts = {}) => {
    if (reduced) return
    gsap.fromTo(
      target,
      { yPercent: opts.from ?? 0 },
      {
        yPercent: opts.to ?? -18,
        ease: 'none',
        scrollTrigger: {
          trigger: opts.trigger ?? target,
          start: 'top bottom',
          end: 'bottom top',
          scrub: opts.scrub ?? true,
        },
      }
    )
  }

  return { reveal, stagger, parallax }
}

/**
 * Run GSAP animations scoped to a component with automatic cleanup on unmount.
 *
 * @param {(ctx: object) => void} setup  Receives { gsap, ScrollTrigger, reduced, reveal, stagger, parallax, self }
 * @param {import('vue').Ref<HTMLElement>|HTMLElement} [scope]  Scope element for selector queries
 */
export function useScrollAnimation(setup, scope) {
  let ctx = null
  const reduced = prefersReducedMotion()

  onMounted(() => {
    const scopeEl = unref(scope) || undefined
    ctx = gsap.context((self) => {
      const helpers = makeHelpers(reduced)
      setup({ ...helpers, gsap, ScrollTrigger, reduced, self })
    }, scopeEl)
    // Recalculate triggers once fonts / images settle.
    requestAnimationFrame(() => ScrollTrigger.refresh())
  })

  onBeforeUnmount(() => {
    if (ctx) ctx.revert()
  })

  return { gsap, ScrollTrigger }
}
