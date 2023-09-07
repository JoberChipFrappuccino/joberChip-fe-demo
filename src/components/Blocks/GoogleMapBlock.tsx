import { BlockWith } from '@/models/space'
import styles from './GoogleMapBlock.module.scss'

type Props = {
  block: BlockWith<'googleMap'>
  mode?: SpaceMode
}

export default function GoogleMapBlock({ block, mode = 'view' }: Props) {
  return (
    <div className={styles.container}>
      <iframe
        className={mode === 'view' ? styles.view : styles.edit}
        referrerPolicy="no-referrer-when-downgrade"
        src={block.src}
      />
      <p className={styles.loading}>Loading...</p>
    </div>
  )
}
