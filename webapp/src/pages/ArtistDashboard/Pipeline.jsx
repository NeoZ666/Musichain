import React from 'react'

const Pipeline = () => {
  return (
    // <div>
    //   <h2 className="text-3xl text-white">Steps</h2>

    //   <div
    //     className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
    //   >
    //     <ol className="relative flex flex-wrap justify-between text-sm font-medium text-gray-500">
    //       <li className="flex items-center gap-2 p-2">
    //         <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white"> 1 </span>

    //         <span> Pre-Production </span>
    //       </li>

    //       <li className="flex items-center gap-2 p-2">
    //         <span
    //           className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white"
    //         >
    //           2
    //         </span>

    //         <span> Recording </span>
    //       </li>

    //       <li className="flex items-center gap-2 p-2">
    //         <span className="size-6 rounded-full bg-blue-600 text-center text-[10px] font-bold text-white"> 3 </span>

    //         <span> Post-Production </span>
    //       </li>

    //       <li className="flex items-center gap-2 p-2">
    //         <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">4</span>

    //         <span> Marketing </span>
    //       </li>

    //       <li className="flex items-center gap-2 p-2">
    //         <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">5</span>

    //         <span> Legal Consulation </span>
    //       </li>
    //       <li className="flex items-center gap-2 p-2">
    //         <span className="size-6 rounded-full bg-blue-600 text-center text-[10px]/6 font-bold text-white">6</span>

    //         <span> Touring & Merchandising</span>
    //       </li>
    //     </ol>
    //   </div>
    // </div>

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:-mt-20 lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div className="lg:py-6 lg:pr-16">

          {/* STEP 1 */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Pre-Production</p>
              <p className="text-gray-700">
                Planning and groundwork for creative projects before production.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Recording</p>
              <p className="text-gray-700">
                Bringing artistic visions to life through studio performances.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Post-Production</p>
              <p className='text-gray-700'>
                Fine-tuning and enhancing creations for a polished outcome.
              </p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Marketing</p>
              <p className="text-gray-700">
                Building a fan base and promoting artistic work effectively.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Touring and Merchandising</p>
              <p className="text-gray-700">
                Taking creations live and connecting through merchandise.
              </p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-4 text-gray-600"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line
                      fill="none"
                      strokeMiterlimit="10"
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="22"
                    />
                    <polyline
                      fill="none"
                      strokeMiterlimit="10"
                      points="19,15 12,22 5,15"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="pt-1 pb-8">
              <p className="mb-2 text-lg font-bold">Legal Consulation</p>
              <p className='text-gray-700'>
                Navigating legal complexities to protect artistic endeavors.
              </p>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg
                    className="w-6 text-gray-600"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polyline
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="6,12 10,16 18,8"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <p className="mb-2 text-lg font-bold">Success</p>
              <p className="text-gray-700" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
      </div>
    </div>

  )
}

export default Pipeline