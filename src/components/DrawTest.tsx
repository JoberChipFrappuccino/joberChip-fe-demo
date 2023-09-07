import React from 'react'

type Props = {
  children?: React.ReactNode
  open: boolean
  onClose?: () => void
}
export function DrawTest({ children, open, onClose }: Props) {
  return open && <div className=" w-[12rem] border-4 h-screen border-black">편집 창</div>
}
