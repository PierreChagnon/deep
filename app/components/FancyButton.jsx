import React from 'react'
import { bungee } from '../fonts'

export default function FancyButton({ children, onClick, disabled = false }) {
  return (
    <button disabled={disabled} onClick={onClick} className={`${bungee.className} from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center w-full max-w-96 min-w-64 disabled:opacity-50`}>{children}</button>
  )
}
