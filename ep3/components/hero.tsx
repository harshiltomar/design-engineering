import React from 'react'

export const Hero = () => {
    return (
        <div className='my-40'>
            <div className='text-center text-7xl font-bold tracking-tight max-w-3xl leading-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>
                Unleash the power of intuitive finance
            </div>
            <p className='text-center text-lg text-neutral-400 max-w-2xl mx-auto pt-10'>Say goodbye to the outdated <span className='text-primary'>financial tools</span>. Every small business owner, regardless of the background, can now manage their business <span className='text-primary'>like a pro</span>. Simple. Intuitive. And <span className='text-primary'>never boring</span>.</p>

            <div className='mt-10 flex justify-center max-w-2xl'>
                <input
                    type='email'
                    placeholder='Enter your email'
                    className='mr-4 rounded-xl border border-neutral-600 px-4 text-white placeholder:text-neutral-500 flex-1 focus:outline-none focus:ring-2 focus:ring-sky-500'
                />
                <button className='relative cursor-pointer rounded-xl border border-neutral-700 px-4 py-2 text-white'>
                    <div className='absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent'></div>
                    Get Started</button>
            </div>
        </div>
    )
}