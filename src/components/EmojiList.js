import React from 'react'

export default function EmojiList({emojis, onEmojiClick}) {
   return (
      <div className="flex justify-around">
         {emojis.map((emoji, index) => (
            <button
               key={index}
               className="text-2xl hover:scale-125 transition"
               onClick={() => onEmojiClick(emoji)}
            >
               {emoji.symbol}
            </button>
         ))}
      </div>
   )
}