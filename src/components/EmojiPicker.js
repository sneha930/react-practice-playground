import React, { useState } from 'react'
import EmojiList from './EmojiList';
import EmojiPreview from './EmojiPreview';

const emojis = [
  { symbol: "😎", label: "Cool Face" },
  { symbol: "😂", label: "Laughing" },
  { symbol: "😢", label: "Crying" },
  { symbol: "🤩", label: "Starstruck" },
  { symbol: "🥳", label: "Party Face" }
];

export default function EmojiPicker() {
   const[selectedEmoji, setSelectedEmoji] = useState(null);

   return (
      <div className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4">
      <h1 className="text-xl font-bold text-center">Emoji Picker 😍</h1>
      <EmojiList emojis={emojis} onEmojiClick={setSelectedEmoji} />
      <EmojiPreview emoji={selectedEmoji} />
      </div>
   )
}