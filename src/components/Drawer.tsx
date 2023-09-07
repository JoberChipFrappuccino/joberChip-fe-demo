import { Drawer as AntdDrawer, Button } from 'antd'
import { useState } from 'react'

export function Drawer() {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <AntdDrawer title="Basic AntdDrawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntdDrawer>
    </>
  )
}
