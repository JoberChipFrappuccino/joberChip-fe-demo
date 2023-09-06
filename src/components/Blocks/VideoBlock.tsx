import { BlockWith } from '@/models/space'
import styles from './VideoBlock.module.scss'

type Props = {
  block: BlockWith<'video'>
}
export function VideoBlock({ block }: Props) {
  return (
    <div className={styles.container}>
      <video className={styles.video} src={block.src} controls autoPlay></video>
      <div className={styles.loading}>Loading...</div>
    </div>
  )
}
