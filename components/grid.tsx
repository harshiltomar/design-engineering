import React from 'react'
import { BrainIcon, MouseBoxIcon } from './icons'
import { cn } from '@/lib/utils'

export const Grid = () => {

    return (
        <div className='max-w-5xl pt-20 mx-auto border-x border-neutral-200 bg-gray-100 min-h-screen text-black'>
            <div className='grid grid-cols-1 lg:grid-cols-2 divide-x divide-y divide-neutral-100'>
                <Card>
                    <CardHeader>
                        <BrainIcon/>
                        <CardTitle>LLM Model Selector</CardTitle>
                    </CardHeader>
                    <CardDescription>Track real-time activity of agents with detailed records of triggers, tools used, outcomes, and timestamps.</CardDescription>
                    <CardSkeleton><div className='h-full w-full bg-gray-200'></div></CardSkeleton>
                </Card>
                <Card>
                    <CardHeader>
                        <MouseBoxIcon/>
                        <CardTitle>Text to workflow builder</CardTitle>
                    </CardHeader>
                    <CardDescription>Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.</CardDescription>
                    <CardSkeleton><div className='h-full w-full bg-blue-200'></div></CardSkeleton>
                </Card>

                <Card className='lg:col-span-2'>
                    <CardHeader>
                        <MouseBoxIcon/>
                        <CardTitle>Text to workflow builder</CardTitle>
                    </CardHeader>
                    <CardDescription>Preview and debug workflow logic in a safe sandbox before deploying, helping you iterate with confidence.</CardDescription>
                    <CardSkeleton><div className='h-full w-full bg-red-200'></div></CardSkeleton>
                </Card>
            </div>
        </div>
    )
}

const CardSkeleton = ({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div
        style={{}}
        className={cn(
          "h-60 bg-gray-50 w-full my-4 rounded-lg overflow-hidden",
        //   "bg-[radial-gradient(var(--color-neutral-100)_1px,_transparent_1px)]",
        //   "[background-size:10px_10px]",
        //   "mask-radial-from-40%",
          className
        )}
      >
        {children}
      </div>
    );
  };

  const Card = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return <div className={cn("bg-white p-4 w-full", className)}>{children}</div>;
  };

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