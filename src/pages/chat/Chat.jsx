import React from 'react'
import Orb from '../../reactbits/orb/Orb'
import ShinyText from '../../reactbits/shinyText/ShinyTex'
import { Send } from 'lucide-react'

const Chat = () => {
  return (
    <div className='pt-[110px] min-h-screen bg-slate-900 flex flex-col items-center'>
      {/* Sarlavha */}
      <div className='text-center'>
        <ShinyText text="Auto Deals AI" disabled={false} speed={5} />
      </div>

      {/* Orb joyi */}
      <div style={{ width: '100%', height: '500px', position: 'relative' }}>
        <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>

      <div className='mb-10 w-full max-w-md px-4'>
        <div className='flex items-center bg-slate-800 border border-slate-700 rounded-full shadow-md overflow-hidden'>
          <input
            type='text'
            placeholder='Savolingizni yozing...'
            className='flex-1 bg-transparent text-white placeholder-gray-400 px-4 py-2 outline-none'
          />
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full m-1 transition'
            title='Yuborish'
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Chat)
