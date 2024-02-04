import React from 'react'

const filter = () => {
    return (
        <>
            <div className="flex">
                {/* Left Component (Filter) */}
                <div className="w-3/5 p-4">
                    {/* Your filter content goes here */}
                    <div className="bg-gray-200 p-4">
                        <h2 className="text-xl font-bold mb-4">Filter</h2>
                        {/* Add your filter components here */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default filter