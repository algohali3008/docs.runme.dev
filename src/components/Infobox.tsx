import React, { ComponentType, PropsWithChildren, SVGProps } from 'react'

import BlueGhost from '../../static/svg/blue-ghost.svg'
import OrangeGhost from '../../static/svg/orange-ghost.svg'

export type InfoboxType = 'warning'|'sidenote'

interface InfoboxProps extends PropsWithChildren {
  type: InfoboxType
}

const InfoboxData: Record<InfoboxType, { 
  title: string 
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}> = {
  sidenote: {
    title: "Sidenote",
    Icon: BlueGhost
  },
  warning: {
    title: "Warning!",
    Icon: OrangeGhost
  },
}

export default function Infobox({ type, children }: InfoboxProps) {
  const { title, Icon } = InfoboxData[type]
  
  return (
    <div className={`infobox infobox-${type}`}>
      <h3 className="infobox-title">{title}</h3>
      <Icon 
        className="infobox-icon"
      />

      {children}
    </div>
  )
}