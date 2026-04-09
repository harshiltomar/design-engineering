import React from 'react'
import { NotionLogo, SupabaseLogo, SlackLogo, OpenAILogo } from './icons'

export const Bottomskeleton = () => {
    return (
        <div className="relative mx-auto my-12 hidden h-full max-h-70 min-h-80 max-w-[67rem] grid-cols-2 p-4 lg:grid">
            {/* Left column */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-10">
                    {/* Meeting Summarizer */}
                    <div className="relative flex items-center gap-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 3.1665H2.66659C1.93021 3.1665 1.33325 3.76346 1.33325 4.49984V12.4998C1.33325 13.2362 1.93021 13.8332 2.66659 13.8332H13.3333C14.0696 13.8332 14.6666 13.2362 14.6666 12.4998V4.49984C14.6666 3.76346 14.0696 3.1665 13.3333 3.1665Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 5.8335H4.00583" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66675 5.8335H6.67258" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.33325 5.8335H9.33909" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm font-medium text-black">Meeting Summarizer</span>
                        <svg width="312" height="33" viewBox="0 0 312 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 -right-84">
                            <line x1="0.5" y1="1" x2="311.5" y2="1" stroke="var(--color-line)" strokeLinecap="round" />
                            <line x1="311.5" y1="1" x2="311.5" y2="32" stroke="var(--color-line)" strokeLinecap="round" />
                            <line x1="0.5" y1="1" x2="311.5" y2="1" stroke="url(#line-one-gradient)" strokeLinecap="round" />
                            <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" id="line-one-gradient" x1="105%" x2="120%" y1="1" y2="0">
                                    <stop stopColor="var(--color-line)" />
                                    <stop offset="0.33" stopColor="#F17463" />
                                    <stop offset="0.66" stopColor="#F17463" />
                                    <stop offset="1" stopColor="var(--color-line)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Code Reviewer */}
                    <div className="relative flex items-center gap-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6667 12.5L14.6667 8.5L10.6667 4.5" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.33325 4.5L1.33325 8.5L5.33325 12.5" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm font-medium text-neutral-700">Code Reviewer</span>
                        <svg width="323" height="2" viewBox="0 0 323 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 -right-84">
                            <line x1="0.5" y1="1" x2="322.5" y2="1" stroke="var(--color-line)" strokeLinecap="round" />
                            <line x1="0.5" y1="1" x2="322.5" y2="1" stroke="url(#line-two-gradient)" strokeLinecap="round" />
                            <defs>
                                <linearGradient gradientUnits="userSpaceOnUse" id="line-two-gradient" x1="105%" x2="120%" y1="1" y2="0">
                                    <stop stopColor="var(--color-line)" />
                                    <stop offset="0.33" stopColor="var(--color-blue-500)" />
                                    <stop offset="0.66" stopColor="var(--color-blue-500)" />
                                    <stop offset="1" stopColor="var(--color-line)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    {/* Customer Support */}
                    <div className="relative flex items-center gap-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.22125 11.5453C9.35894 11.6085 9.51405 11.6229 9.66105 11.5862C9.80804 11.5495 9.93814 11.4638 10.0299 11.3433L10.2666 11.0333C10.3908 10.8677 10.5518 10.7333 10.737 10.6407C10.9221 10.5481 11.1263 10.4999 11.3333 10.4999H13.3333C13.6869 10.4999 14.026 10.6404 14.2761 10.8904C14.5261 11.1405 14.6666 11.4796 14.6666 11.8333V13.8333C14.6666 14.1869 14.5261 14.526 14.2761 14.7761C14.026 15.0261 13.6869 15.1666 13.3333 15.1666C10.1507 15.1666 7.09841 13.9023 4.84797 11.6519C2.59753 9.40143 1.33325 6.34918 1.33325 3.16659C1.33325 2.81296 1.47373 2.47382 1.72378 2.22378C1.97382 1.97373 2.31296 1.83325 2.66659 1.83325H4.66659C5.02021 1.83325 5.35935 1.97373 5.60939 2.22378C5.85944 2.47382 5.99992 2.81296 5.99992 3.16659V5.16659C5.99992 5.37358 5.95173 5.57773 5.85915 5.76287C5.76658 5.94801 5.63218 6.10906 5.46658 6.23325L5.15458 6.46725C5.0322 6.5607 4.94593 6.69364 4.91045 6.84349C4.87496 6.99333 4.89244 7.15084 4.95992 7.28925C5.87104 9.13983 7.36953 10.6364 9.22125 11.5453Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-sm font-medium text-neutral-700">Customer Support</span>
                        <svg width="326" height="32" viewBox="0 0 326 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -right-84 bottom-2">
                            <line y1="31" x2="325" y2="31" stroke="var(--color-line)" />
                            <line x1="325.5" y1="31" x2="325.5" y2="1" stroke="var(--color-line)" strokeLinecap="round" />
                            <line y1="31" x2="325" y2="31" stroke="url(#line-three-gradient)" />
                            <defs>
                                <linearGradient id="line-three-gradient" gradientUnits="userSpaceOnUse" x1="105%" x2="120%" y1="1" y2="0">
                                    <stop stopColor="var(--color-line)" />
                                    <stop offset="0.33" stopColor="var(--color-yellow-500)" />
                                    <stop offset="0.66" stopColor="var(--color-yellow-500)" />
                                    <stop offset="1" stopColor="var(--color-line)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Central animated icon box */}
                <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-200 p-px shadow-xl">
                    <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%)] [animation-duration:2s]" />
                    <div className="absolute inset-0 scale-[1.4] animate-spin rounded-full [background-image:conic-gradient(at_center,transparent,var(--color-brand)_20%,transparent_30%)] [animation-delay:1s] [animation-duration:2s]" />
                    <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[5px] bg-white">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                            <path d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Right column */}
            <div className="relative flex h-full w-full items-center justify-start">
                {/* Left horizontal line */}
                <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="var(--color-line)" strokeLinecap="round" />
                    <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="url(#horizontal-line-gradient-left)" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="horizontal-line-gradient-left" gradientUnits="userSpaceOnUse" y1="0" y2="1" x1="110%" x2="120%">
                            <stop stopColor="var(--color-line)" />
                            <stop offset="0.5" stopColor="var(--color-blue-500)" />
                            <stop offset="1" stopColor="var(--color-line)" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Connected badge + icon columns */}
                <div className="relative flex flex-col items-center gap-2">
                    <span className="relative z-20 rounded-sm border border-blue-500 bg-blue-50 px-2 py-0.5 text-xs text-blue-500">
                        Connected
                    </span>

                    {/* Left icon column (above) */}
                    <div className="absolute inset-x-0 -top-30 flex h-full flex-col items-center">
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md">
                            <NotionLogo className="size-6" />
                        </div>
                        <svg width="1" height="81" viewBox="0 0 1 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="var(--color-line)" />
                            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="url(#vertical-line-gradient-a)" />
                            <defs>
                                <linearGradient id="vertical-line-gradient-a" gradientUnits="userSpaceOnUse" x1="0" x2="2" y1="64.83502%" y2="81.04377%">
                                    <stop stopColor="var(--color-line)" />
                                    <stop offset="0.5" stopColor="#F17463" />
                                    <stop offset="1" stopColor="var(--color-line)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg width="1" height="81" viewBox="0 0 1 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="var(--color-line)" />
                            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="url(#vertical-line-gradient-b)" />
                            <defs>
                                <linearGradient id="vertical-line-gradient-b" gradientUnits="userSpaceOnUse" x1="0" x2="2" y1="64.83502%" y2="81.04377%">
                                    <stop stopColor="var(--color-line)" />
                                    <stop offset="0.5" stopColor="#F17463" />
                                    <stop offset="1" stopColor="var(--color-line)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md">
                            {/* Arc browser icon */}
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
                                <path d="M0.435287 17.7181C0.373 17.4525 0.689403 17.2853 0.882285 17.4782L11.1053 27.7021C11.2981 27.895 11.1309 28.2114 10.8653 28.1491C5.70614 26.9386 1.6453 22.8773 0.435287 17.7181ZM0.092903 13.6206C0.0879588 13.7 0.117779 13.7774 0.173973 13.8336L14.7497 28.4108C14.8059 28.467 14.8834 28.4969 14.9627 28.4919C15.6261 28.4506 16.277 28.3631 16.9122 28.2327C17.1262 28.1888 17.2006 27.9258 17.0461 27.7713L0.813742 11.5373C0.659228 11.3828 0.396218 11.4571 0.352246 11.6712C0.221759 12.3064 0.134254 12.9573 0.092903 13.6206ZM1.27167 8.80927C1.22505 8.91393 1.24879 9.03623 1.3298 9.11727L19.4662 27.2554C19.5472 27.3365 19.6695 27.3602 19.7742 27.3136C20.2743 27.0909 20.759 26.8397 21.2262 26.5622C21.3808 26.4703 21.4046 26.2579 21.2775 26.1308L2.45467 7.30609C2.32753 7.17893 2.11511 7.20278 2.02326 7.35736C1.74567 7.8245 1.49445 8.30917 1.27167 8.80927ZM3.63721 5.55259C3.53358 5.44896 3.52718 5.28275 3.62482 5.17344C6.19119 2.3006 9.92421 0.492182 14.0795 0.492385C21.819 0.492765 28.0927 6.76711 28.0923 14.5065C28.0921 18.6619 26.2833 22.3947 23.4102 24.9608C23.301 25.0584 23.1347 25.052 23.0311 24.9484L3.63721 5.55259Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    {/* Right icon column */}
                    <div className="absolute -top-4 right-30 flex h-full flex-col items-center">
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md">
                            <SupabaseLogo className="size-6" />
                        </div>
                        <svg width="1" height="81" viewBox="0 0 1 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="var(--color-line)" />
                            <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(0 -1 -1 0 0 80.5)" stroke="url(#vertical-line-gradient-c)" />
                            <defs>
                                <linearGradient id="vertical-line-gradient-c" gradientUnits="userSpaceOnUse" x1="0" x2="2" y1="64.83502%" y2="81.04377%">
                                    <stop stopColor="var(--color-line)" />
                                    <stop offset="0.5" stopColor="#F17463" />
                                    <stop offset="1" stopColor="var(--color-line)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md">
                            <SlackLogo className="size-6" />
                        </div>
                    </div>
                </div>

                {/* Right horizontal line */}
                <svg width="314" height="2" viewBox="0 0 314 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="var(--color-line)" strokeLinecap="round" />
                    <line x1="0.5" y1="1" x2="313.5" y2="1" stroke="url(#horizontal-line-gradient-right)" strokeLinecap="round" />
                    <defs>
                        <linearGradient id="horizontal-line-gradient-right" gradientUnits="userSpaceOnUse" y1="0" y2="1" x1="110%" x2="120%">
                            <stop stopColor="var(--color-line)" />
                            <stop offset="0.5" stopColor="var(--color-blue-500)" />
                            <stop offset="1" stopColor="var(--color-line)" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* OpenAI icon */}
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md">
                    <OpenAILogo className="size-6" />
                </div>
            </div>
        </div>
    )
}
