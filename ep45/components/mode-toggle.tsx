'use client'

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './icons'
import { useTheme } from 'next-themes'

export const ModeToggle = () => {

    const { theme, setTheme } = useTheme();

    const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

    useEffect(()=> {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setSystemTheme(mediaQuery.matches ? 'dark' : 'light');


        const handleChange = (e: MediaQueryListEvent) => {
            setSystemTheme(e.matches ? 'dark' : 'light')
        }

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    },[])

    const SWITCH_THEME = () => {
        switch (theme) {
            case 'light': {
                setTheme('dark')
                return;
            }
            case 'dark': {
                setTheme('light')
                return;
            }
            case 'system': {
                setTheme(systemTheme === 'dark' ? 'light' : 'dark');
                return;
            }
        }
    }

    return (
        <button
            onClick={SWITCH_THEME}
            className='absolute flex items-center justify-center top-4 right-4'>
            <SunIcon />
            <MoonIcon />
        </button>
    )
}
