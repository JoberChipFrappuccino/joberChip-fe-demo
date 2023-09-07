import { BlockWith } from '@/models/space'
import styles from './EmbedBlock.module.scss'
type Props = {
  block: BlockWith<'embed'>
  mode: SpaceMode
}
export function EmbedBlock({ block, mode }: Props) {
  return (
    <div className={styles.container}>
      <iframe
        className={mode === 'view' ? styles.view : styles.edit}
        src={block.src}
        allowFullScreen
        ng-show="showvideo"
      />
      <p className={styles.loading}>Loading...</p>
    </div>
  )
}
