import React from 'react'

type IconProps = {
  icon: { viewBox: string; path: string }
}

const Icon: React.VFC<IconProps> = ({ icon }) => (
  <svg className="h-l w-l fill-current" viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
)

export default Icon
