import React from "react";

interface Props {
    children: React.ReactNode,
}

export default function Widget(props: Props) {
  return (
    <div className="crypto-rate shadow-lg p-5 rounded-xl">
        {props.children}
    </div>
  )
}
