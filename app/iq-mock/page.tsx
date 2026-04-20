import React from 'react'
import MockHeadder from './components/MockHeadder'
import Gauge from './components/Gauge'

export default function page() {
  return (
    <div className="bg-[linear-gradient(182deg,rgba(227,240,252,1)_0%,rgba(217,226,243,1)_100%)] h-full">
        <MockHeadder />
        <div className="grid grid-cols-2 gap-2 md:px-10 py-6">
            <div className="bg-[linear-gradient(182deg,rgba(255,255,255,1)_0%,rgba(233,243,253,1)_100%)] rounded-[30px] p-3">
                <div className="grid grid-cols-2">
                    <div>
                        <Gauge />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
