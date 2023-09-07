export function useResizeSection(sectionId: string) {
  const resizeSection = () => {
    const sectionEls = document.querySelectorAll(`[data-section=section]`)
    let target: HTMLDivElement | null = null

    sectionEls.forEach((el) => {
      if (target) {
        if (el.getAttribute('data-section') === 'section') {
          const nextElRect = el.getBoundingClientRect()
          target.style.height = `${nextElRect.top - nextElRect.height - 100}px`
        }
      }
      if (el.getAttribute('data-block') === sectionId) {
        target = el as HTMLDivElement
      }
    })
  }
  return { resizeSection }
}
