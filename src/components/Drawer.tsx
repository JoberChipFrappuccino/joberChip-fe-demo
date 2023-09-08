import { useFormMode } from '@/store/formMode'
import { Drawer as AntdDrawer } from 'antd'

export function Drawer() {
  const { openDrawer, setOpenDrawer } = useFormMode()

  const onClose = () => {
    setOpenDrawer(false)
  }

  return (
    <>
      <AntdDrawer title="Basic AntdDrawer" placement="right" onClose={onClose} open={openDrawer}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntdDrawer>
    </>
  )
}
