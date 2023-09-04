import { BlockWith } from '@/models/space'
import styles from './EmbedBlock.module.scss'
type Props = {
  block: BlockWith<'embed'>
}
export function EmbedBlock({ block }: Props) {
  return (
    <div className={styles.container}>
      <iframe className={styles.viewer} src={block.src} allowFullScreen ng-show="showvideo" />
      {/* {block.caption && <p>{block.caption}</p>} */}
    </div>
  )
}
