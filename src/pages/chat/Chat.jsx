import React from 'react'
import Orb from '../../reactbits/orb/Orb'
import ShinyText from '../../reactbits/shinyText/ShinyTex'

const Chat = () => {
  return (
    <div className='pt-[110px] min-h-screen bg-slate-900'>
      <ShinyText text="Auto Deals AI" disabled={false} speed={5} className='custom-class' /> 
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  )
}

export default React.memo(Chat)