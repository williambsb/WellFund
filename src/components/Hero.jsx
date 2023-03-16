const Hero = () => {
  return (
    <div className="py-24 px-6 text-center bg-white">
    
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            <span className="capitalize">Bring Creative Projects to life on</span>
            <br />
            <span className="text-green-600">WellFund</span>
        </h1>
        
        <div className="flex justify-center items-center space-x-2">
            <button type='button' className='inline-block bg-green-600 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700'>Add New Project</button>
            
            <button type='button' className='inline-block border border-green-500 px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded-full shadow-md bg-transparent text-green-600 hover:text-white hover:bg-green-600'>Fund Existing Project</button>
        </div>

        <div className="flex justify-evenly space-x-2 items-center mt-10">
            <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-sm w-full rounded-md">
                <span className="text-lg font-bold text-green-900 leading-5">{0}</span>
                <span>Projects</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-sm w-full rounded-md">
                <span className="text-lg font-bold text-green-900 leading-5">{0}</span>
                <span>Backings</span>
            </div>
            <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-sm w-full rounded-md">
                <span className="text-lg font-bold text-green-900 leading-5">{0} ETH</span>
                <span>Donated</span>
            </div>
        </div>

    </div>
  )
}

export default Hero