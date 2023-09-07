import { BlockWith } from '@/models/space'
import styles from './TextBlock.module.scss'

type Props = {
  block: BlockWith<'text'>
  mode: SpaceMode
}
export default function TextBlock({ block, mode }: Props) {
  return (
    <div className={styles.container}>
      <p className={mode === 'view' ? styles.view : styles.edit}>{block.text}</p>
    </div>
  )
}
