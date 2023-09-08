import { useSpaceModeStore } from '@/store/spaceMode'
import styles from './SpaceActionBar.module.scss'

export default function SpaceActionBar() {
  const { mode } = useSpaceModeStore()

  return (
    <div className={[styles.container, `${mode === 'view' ? styles.hidden : styles.visible}`].join(' ')}>
      <button className={styles.item}>Page</button>
      <button className={styles.item}>Template</button>
      <button className={styles.item}>Block</button>
    </div>
  )
}
