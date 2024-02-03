'use client'

import * as React from 'react'

// import { useSidebar } from '@/lib/hooks/use-sidebar'
// import { cn } from '@/lib/utils'

// export interface SidebarProps extends React.ComponentProps<'div'> { }

const SideBar = ({ className, children }) => {
    // const { isSidebarOpen, isLoading } = useSidebar()

    return (
        <div
            // data-state={isSidebarOpen && !isLoading ? 'open' : 'closed'}
            className={(className, 'h-full flex-col dark:bg-zinc-950')}
        >

            {children}
        </div>
    )
}
export default SideBar;