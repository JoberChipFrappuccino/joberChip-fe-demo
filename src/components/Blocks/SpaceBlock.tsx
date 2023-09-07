import { BlockWith } from '@/models/space'
import styles from './SpaceBlock.module.scss'

type Props = {
  block: BlockWith<'space'>
  mode: SpaceMode
}
export default function SpaceBlock({ block, mode }: Props) {
  return (
    <div className={styles.container}>
      <div className={mode === 'view' ? styles.view : styles.edit}>
        <a href={block.url}>{block.text}</a>
      </div>
    </div>
  )
}
