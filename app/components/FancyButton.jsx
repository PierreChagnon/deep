import React from 'react'
import { bungee } from '../fonts'

export default function FancyButton({ children, onClick, disabled = false }) {
  return (
    <button disabled={disabled} onClick={onClick} className={`${bungee.className} hover:-translate-y-1 hover:shadow-hot from-[#7944F0] via-[#ED5C8A] to-[#FF922A] bg-gradient-to-r px-6 py-4 3xl:py-6 rounded-full shadow-md transition-all duration-500 ease-in-out flex items-center justify-center w-full max-w-96 min-w-64 3xl:min-w-96 disabled:opacity-50 3xl:text-2xl`}>{children}</button>
  )
}
