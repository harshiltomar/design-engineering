import { cn } from '@/lib/utils'
import React from 'react'

export const Form = () => {
  return (
    <div className='h-full w-full bg-gray-50 px-8 py-14'>
      <h1 className='mx-auto text-center text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-900'>
        This is a <span className={cn('inline-block  after:content-[""] after:w-full after:h-full after:bg-red-500 after:-z-10 relative z-10 text-white after:absolute after:inset-0 after:-rotate-10 after:-skew-2')}>crazy</span> good form
      </h1>

      <div className='my-4 flex flex-col gap-8 text-black max-w-sm mx-auto pt-10'>

      <Group>
          <Label htmlFor='first-name'>First Name</Label>
          <Input name='first-name' id='first-name' type="text" placeholder='Enter your first name' />
        </Group>


        <Group>
          <Label htmlFor='last-name'>Last Name</Label>
          <Input name='last-name' id='last-name' type="text" placeholder='Enter your last name' />
        </Group>


        <Group>
          <Label htmlFor='phone-number'>Phone Number</Label>
          <Input name='phone-number' id='phone-number' type="tel" placeholder='Enter your phone number' />
        </Group>

        <Group>
          <Label htmlFor='email'>Email Address</Label>
          <Input name='email' id='email' type="email" placeholder='Enter your email' />
        </Group>
        <button className='bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-neutral-800 transition-all-duration-200 active:scale-95 after:content-[""] after:w-1/2 after:h-[400px] after:absolute after:bg-white/20 relative overflow-hidden after:-left-10 after:-top-20 after:rotate-20 after:animate-pulse after:duration-1000 after:ease-in-out after:delay-0 after:opacity-0 hover:after:opacity-100'>
          Send now !
        </button>
      </div>
    </div>
  )
} 

const Label = ({children, className, ...props}: {children: React.ReactNode, className?: string, [key: string]: any}) => {
  return (
    <label {...props} htmlFor='email' className={cn('after:content-["*"] after:text-red-500 after:ml-1', className)}>
      {children}
    </label>
  )
}

const Input = ({className, ...props}: { className?: string, [key: string]: any}) => {
  return (
    <input
    {...props}
    className={cn('focus:outline-none focus:ring-1 focus:ring-blue-200 focus:bg-neutral-100 focus:ring-offset-2 p-4 bg-white shadow-input rounded-sm transition-all-duration-200 placeholder:text-neutral-400', className)}/>
  )
}

const Group = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col gap-2'>
      {children}
    </div>
  )
}

Group.Label = Label;
Group.Input = Input;