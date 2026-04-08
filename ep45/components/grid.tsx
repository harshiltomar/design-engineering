import { cn } from '@/lib/utils'
import React from 'react'
import { BrainIcon } from './icons'

export const Grid = () => {

    return (
        <div className='max-w-5xl pt-20 mx-auto border-x border-neutral-200 bg-gray-100 min-h-screen'>
            <div className='grid grid-cols-2'>
                <Card>
                    <CardHeader>
                        <BrainIcon/>
                        <CardTitle>LLM Model Selector</CardTitle>
                    </CardHeader>
                    <CardDescription>Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.</CardDescription>
                </Card>
            </div>
        </div>
    )
}

const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={cn('bg-white p-4')}>

        </div>
    )
}

const CardHeader = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex items-center gap-2">{children}</div>;
};

const CardTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h2 className={cn("font-medium text-lg tracking-tight", className)}>
            {children}
        </h2>
    );
};

const CardDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p className={cn("text-base text-neutral-400", className)}>{children}</p>
    );
};