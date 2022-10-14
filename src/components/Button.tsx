import React, { MouseEventHandler } from 'react'
import '../scss/components/button.scss';

interface Props {
  children: React.ReactNode,
  size?: string,
  className?: string,
  variant?: 'outlined' | 'contained',
  onClick: MouseEventHandler<HTMLButtonElement>,
}

export default function Button(props: Props) {
  return (
    <button
      className=
      {`button${props.size ? ' ' + props.size : ''}${props.variant ? ' ' + props.variant : ''}${props.className ? ' ' + props.className : ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}