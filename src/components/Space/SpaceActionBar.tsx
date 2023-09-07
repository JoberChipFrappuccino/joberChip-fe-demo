import { useSpaceModeStore } from '@/store/spaceMode'
import styles from './SpaceActionBar.module.scss'

export default function SpaceActionBar() {
  const { mode } = useSpaceModeStore()

  return (
    <div className={[styles.container, `${mode === 'view' ? styles.hidden : styles.visible}`].join(' ')}>
      <div className={styles.item}>Page</div>
      <div className={styles.item}>Template</div>
      <div className={styles.item}>Block</div>
    </div>
  )
}
