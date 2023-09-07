import { BlockWith } from '@/models/space'
import styles from './SectionBlock.module.scss'
import { useEffect } from 'react'

type Props = {
  block: BlockWith<'section'>
}

export function SectionBlock({ block }: Props) {
  useEffect(() => {
    const sectionEls = document.querySelectorAll(`[data-section=section]`)
    let target: HTMLDivElement | null = null

    sectionEls.forEach((el) => {
      if (target) {
        if (el.getAttribute('data-section') === 'section') {
          const nextElRect = el.getBoundingClientRect()
          target.style.height = `${nextElRect.top - nextElRect.height - 100}px`
        }
      }
      if (el.getAttribute('data-block') === block.block_id) {
        target = el as HTMLDivElement
      }
    })
    sectionEls[sectionEls.length - 1]
    // document.querySelectorAll('.react-grid-layout > div').forEach((el) => {})
  }, [])

  return (
    <div className={styles.container}>
      <p className={styles.text}>{block.text}</p>
      <div className={styles.sectionCover} />
    </div>
  )
}
