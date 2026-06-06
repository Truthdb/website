import type { Directive } from 'vue'

// Scroll-in reveal: adds `.in` to a `.reveal` element when it enters the viewport.
// Mirrors the IntersectionObserver in the design proposal. The `.reveal` base styles
// (and the `prefers-reduced-motion` opt-out) live in truthdb.css.
const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in')
              observer?.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.12 }
      )
    : null

export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    el.classList.add('reveal')
    if (observer) observer.observe(el)
    else el.classList.add('in')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
