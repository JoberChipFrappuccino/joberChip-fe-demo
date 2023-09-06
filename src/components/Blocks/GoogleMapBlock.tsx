import { BlockWith } from '@/models/space'
import styles from './GoogleMapBlock.module.scss'

type Props = {
  block: BlockWith<'googleMap'>
}

export function GoogleMapBlock({ block }: Props) {
  return (
    <div className={styles.container}>
      <iframe className={styles.viewer} referrerPolicy="no-referrer-when-downgrade" src={block.src} />
      <p className={styles.loading}>Loading...</p>
    </div>
  )
}
