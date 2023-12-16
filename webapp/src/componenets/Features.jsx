import React from 'react'

function Features() {
  return (
    <div className='my-[50px] md:my-[200px]'>
    <p className='text-slate-200/50 text-center'>How MusiChain works</p>
    <h1 className='text-4xl font-bold text-slate-200 text-center md:text-6xl md:mb-10'>Write & share your Music</h1>
    <div className="relative">
        <div className='h-[200px] w-56 gradient-02 -z-10'></div>
    </div>

    <div className='mt-5 mx-5 flex flex-col gap-y-5 md:flex-row md:mx-auto md:gap-x-5 md:w-[80%]'>
      <div className='bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10'>
        <img className='w-[100px]' src="./images/LOCK.png" alt="Write about your placemnt experiences" />
        <h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Own Your License</h2>
        <p>Own Your License" revolutionizes music licensing with blockchain, granting artists true ownership and control. Smart contracts automate fair royalties, while tokenized engagement fosters direct artist-fan connections. Say goodbye to intermediaries and hello to a transparent, decentralized, and empowering future for the music industry.</p>
      </div>

      <div className="absolute">
        <div className='h-[500px] w-[500px] gradient-03 -z-10'></div>
      </div>

      <div className='bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10'>
        <img className='w-[90px]' src="./images/accessLayer.png" alt="Write about your placemnt experiences" />
        <h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>Access Control Layering</h2>
        <p>Access Control Layering transforms security by implementing a robust system that safeguards data and resources. Using a multi-tiered approach, it adds layers of protection, ensuring only authorized users access sensitive information. This innovative strategy fortifies digital environments, minimizing vulnerabilities and reinforcing the integrity of access controls for enhanced cybersecurity.</p>
      </div>

      <div className='bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10'>
        <img className='w-[100px]' src="./images/IPFS.png" alt="Write about your placemnt experiences" />
        <h2 className='text-2xl font-bold tracking-tighter md:text-3xl'>IPFS for Smart and Secure</h2>
        <p>IPFS (InterPlanetary File System) emerges as a smart and secure solution for decentralized data storage. By distributing files across a global network of nodes, it enhances reliability and resilience. IPFS's content-addressed model ensures data integrity, while cryptographic hashing bolsters security. It's a futuristic approach, reshaping how we store and retrieve information with intelligence and robust safeguards.</p>
      </div>
    </div>
  </div>
  )
}

export default Features