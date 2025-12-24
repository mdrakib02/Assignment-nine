import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
    <div className='flex items-center flex-col gap-y-4 py-16'>
        <h1 className='text-3xl font-bold text-center'>Bring Nature Home with GreenNest</h1>
        <p className='text-base text-gray-400 text-center w-3/6 mx-auto'>GreenNest helps you choose, grow, and care for beautiful indoor plants that purify your air and elevate your everyday living.</p>
        <button className='btn mx-auto border-[1px] border-green-500 text-green-500'><ShoppingBagIcon></ShoppingBagIcon> Shop Indoor Plants</button>
    </div>
  )
}
