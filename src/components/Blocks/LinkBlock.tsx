import { BlockWith, Space } from '@/models/space'
import styles from './LinkBlock.module.scss'

type Props = {
  block: BlockWith<'link'>
  mode: SpaceMode
}
export default function LinkBlock({ block, mode }: Props) {
  return (
    <div className={styles.container}>
      <div className={mode === 'view' ? styles.view : styles.edit}>
        <a href={block.url}>{block.text}</a>
      </div>
    </div>
  )
}
