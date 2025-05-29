import React from 'react'

export default function EmojiPreview({emoji}) {
   if(!emoji) return <p className="text-center text-gray-500">Select an emoji</p>

   return (
      <div className="text-center">
         <p className="text-4xl">{emoji.symbol}</p>
         <p className="text-lg font-medium">{emoji.label}</p>
      </div>
   )
}

