import React from 'react'

const Pipeline = () => {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>

      <div
        className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
      >
        <ol className="relative -z-[10] flex flex-wrap justify-between text-sm font-medium text-gray-500">
          <li className="flex items-center gap-2 bg-white p-2">
            <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white"> 1 </span>

            <span> Pre-Production </span>
          </li>

          <li className="flex items-center gap-2 bg-white p-2">
            <span
              className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white"
            >
              2
            </span>

            <span> Recording </span>
          </li>

          <li className="flex items-center gap-2 bg-white p-2">
            <span className="size-6 rounded-full bg-blue-600 text-center text-[10px] font-bold text-white"> 3 </span>

            <span> Post-Production </span>
          </li>

          <li className="flex items-center gap-2 bg-white p-2">
            <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">4</span>

            <span> Marketing </span>
          </li>

          <li className="flex items-center gap-2 bg-white p-2">
            <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">5</span>

            <span> Legal Consulation </span>
          </li>
          <li className="flex items-center gap-2 bg-white p-2">
            <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">6</span>

            <span> Touring & Merchandising</span>
          </li>
        </ol>
      </div>
    </div>

  )
}

export default Pipeline