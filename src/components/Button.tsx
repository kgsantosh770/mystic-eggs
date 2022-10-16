import React, { MouseEventHandler } from 'react'

interface Props {
  children: React.ReactNode,
  size?: 'small' | 'large',
  className?: string,
  variant?: 'outlined' | 'contained',
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Button(props: Props) {
  return (
    <button
      className=
      {`custom-btn font-base-bold rounded-full${props.size ? ' ' + props.size : ''}${props.variant ? ' ' + props.variant : ''}${props.className ? ' ' + props.className : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}