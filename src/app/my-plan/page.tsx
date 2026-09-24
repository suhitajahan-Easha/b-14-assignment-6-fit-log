import React from 'react'

const myplanpage = () => {
  return (
    <div className='max-w-300 mx-auto container'>
      <div className="flex flex-col gap-2 mt-6">
        <h1 className="text-xl font-bold sm:text-2xl uppercase font-oswald ">My plan</h1>
        <p className="text-xs text-[#9CA3AF] sm:text-sm">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="bg-base-100 p-6 flex justify-start gap-80 my-6 rounded-xl">
        <div >
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Exercise</h1>
          <h2 className='text-xl text-[#C2F800] font-bold sm:text-2xl uppercase font-oswald'>0</h2>
        </div>
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Minutes</h1>
          <h2 className='text-xl font-bold sm:text-2xl uppercase font-oswald'>0</h2>
        </div>
        <div>
          <h1 className="text-xs text-[#9CA3AF] sm:text-sm">Calories</h1>
          <h2 className='text-xl font-bold sm:text-2xl uppercase font-oswald'>0</h2>
        </div>
        
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border mb-5">
         <input type="radio" name="my_tabs_6" className="tab  mb-5" aria-label="Today's Plan" />
         <div className="tab-content bg-base-100 p-6">Tab content 1</div>

         <input type="radio" name="my_tabs_6" className="tab  mb-5" aria-label="Saved" defaultChecked />
         <div className="tab-content bg-base-100 border-white border border-dashed p-6">Tab content 2</div>
      </div>
    </div>
  )
}

export default myplanpage