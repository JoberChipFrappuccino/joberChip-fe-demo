import { BlockWith } from '@/models/space'
import styles from './VideoBlock.module.scss'

type Props = {
  block: BlockWith<'video'>
  mode: SpaceMode
}
export default function VideoBlock({ block, mode }: Props) {
  return (
    <div className={styles.container}>
      <video className={mode === 'view' ? styles.view : styles.edit} src={block.src} controls autoPlay></video>
      <div className={styles.loading}>Loading...</div>
    </div>
  )
}
