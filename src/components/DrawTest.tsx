import React from 'react'

type Props = {
  children?: React.ReactNode
  open: boolean
  onClose?: () => void
}
export function DrawTest({ children, open, onClose }: Props) {
  return open && <div className="absolute top-0 right-10 w-[12rem] border-4 h-full">편집 창</div>
}
