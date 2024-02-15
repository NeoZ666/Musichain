
function Features() {
  return (
    <div className="my-[50px] md:my-[200px]">
      <p className="text-slate-200/50 text-center">How MusiChain works</p>
      <h1 className="text-4xl font-bold text-slate-200 text-center md:text-6xl md:mb-10">
        Write & share your Music
      </h1>
      <div className="relative">
        <div className="h-[200px] w-56 gradient-02 -z-10"></div>
      </div>

      <div className="mt-5 mx-5 grid grid-cols-1 md:grid-cols-3 gap-y-5 md:-mt-52 md:flex-row md:mx-auto md:gap-x-5 md:w-[80%]">
        <div className="bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10">
          <img
            className="w-[100px]"
            src="./images/LOCK.png"
            alt="Write about your placemnt experiences"
          />
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Own Your License
          </h2>
          <p>
            Blockchain-driven 'Own Your License' transforms music licensing,
            giving artists control. Smart contracts ensure fair royalties,
            fostering direct artist-fan connections. Goodbye intermediaries,
            hello transparent music industry.
          </p>
        </div>

        <div className="absolute">
          <div className="h-[500px] w-[500px] gradient-03 -z-10"></div>
        </div>

        <div className="bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10">
          <img
            className="w-[110px] -mt-2"
            src="./images/accessLayer.png"
            alt="Write about your placemnt experiences"
          />
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            Access Control Layering
          </h2>
          <p>
            Access Control Layering revolutionizes security by implementing a
            robust, multi-tiered system to safeguard data and resources. This
            approach ensures authorized user access, fortifies digital
            environments, and enhances cybersecurity integrity.
          </p>
        </div>

        <div className="bg-light_gray p-5 rounded-2xl flex flex-col items-center gap-y-4 text-center md:gap-y-10 md:py-10">
          <img
            className="w-[100px]"
            src="./images/IPFS.png"
            alt="Write about your placemnt experiences"
          />
          <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
            IPFS for Smart & Secure
          </h2>
          <p>
            IPFS (InterPlanetary File System): Smart, secure decentralized
            storage reshaping information storage and retrieval. Distributing
            files globally for reliability, data integrity, and resilient
            security.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
