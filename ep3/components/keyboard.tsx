import React from 'react'

export const Keyboard = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='w-1/2 h-1/2 bg-neutral-200 rounded-xl p-4 text-black border-3 border-neutral-100'>
            <div className="grid grid-cols-13 grid-rows-6 gap-1 w-full h-full">
                {Array.from({ length: 6 * 13 }).map((_, idx) => (
                    <button
                        key={idx}
                        className="aspect-square bg-neutral-100 border border-neutral-300 rounded-md flex items-center justify-center shadow-md/30 inset-shadow-sm inset-shadow-white"
                    >
                        <p className='text-neutral-500 text-sm'>*</p>
                    </button>
                ))}
            </div>
            </div>
        </div>
    )
}