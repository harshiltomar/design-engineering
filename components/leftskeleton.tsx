import React from 'react'
import { MouseBoxIcon } from './icons'

export const LeftSkeleton = () => {
    return (
        <div className="h-full flex flex-col justify-end">
            <div className='bg-white h-3/4 w-3/4 mx-auto shadow-2xl rounded-t-xl border border-[0.2px] border-neutral-200 border-b-0'>
                <Navbar />
                <div className='px-2 divide divide-neutral-200 divide-y divide-dashed'>
                    <Modelstitle />
                    <Mainsection />
                </div>
            </div>
        </div>
    )
}

const Navbar = () => {
    return <div className='w-full flex flex-row'>
        <div className="flex gap-2 items-center px-3 py-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
        </div>
    </div>
}

const Modelstitle = () => {
    return <div className='flex pt-5 gap-2 items-center text-neutral-500 text-sm'>
        <MouseBoxIcon className='w-5 h-5'/>
        <span className='text-lg font-medium'>All Models</span>
        <button className='bg-neutral-100 text-neutral-500 px-2 py-1 rounded-xl'>69,420</button>
    </div>
}

const Mainsection = () => {
    return <div className='h-full w-full flex flex-col py-2 gap-2'>
        <div className='flex flex-row text-sm justify-between'>Claude 4 Opus <button className='bg-red-100 border border-red-500 text-red-500 px-2 py-1 rounded-sm'>Unavailable</button></div>
        <div className='flex flex-row text-sm justify-between'>ChatGPT <button className='bg-green-100 border border-green-500 text-green-500 px-2 py-1 rounded-sm'>Connected</button></div>
        <div className='flex flex-row text-sm justify-between'>Llama 3.2 <button className='bg-yellow-100 border border-yellow-500 text-yellow-500 px-2 py-1 rounded-sm'>Waiting</button></div>
    </div>
}