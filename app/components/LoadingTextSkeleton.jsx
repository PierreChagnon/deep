import React from 'react'

export default function LoadingTextSkeleton() {
    return (
        <div className='flex animate-pulse flex-col gap-2 w-full'>
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/3' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-1/2' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-4/5' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-1/2' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-3/4' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/5' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/3' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-5/6' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-4/5' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-1/2' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-3/4' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/5' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-2/3' />
            <span className='h-4 bg-gradient-to-r from-white via-white/20 to-white/50 opacity-20 rounded-full w-5/6' />
        </div>
    )
}
