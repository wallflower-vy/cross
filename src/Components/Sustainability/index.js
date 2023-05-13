import React from 'react'
import sustain from '../../assets/3.jpg'
const Sustainability = () => {
  return (
    <div className='bg-cover  md:mt-[8rem] mt-[4rem] flex h-[85vh] md:h-[80vh] bg-center w-full '
    style={{ backgroundImage: `url(${sustain})` }}>
        <div className='md:px-[8rem] px-[1rem] bg-[rgba(0,0,0,0.5)] w-screen h-[85vh] md:h-[80vh] py-[5rem] flex md:flex-row flex-col justify-between '>
            <div className='w-[30%] md:py-2 py-0'>
            <h1 className='text-white font-bold text-3xl '>Sustainability</h1>
            </div>
            <div className='md:w-[70%] w-full'>
                <p className='text-white  mt-5'>At cross, we believe that sustainability and impact are critical to building a brighter future in Africa. We work to create positive social and environmental outcomes by supporting small and medium-sized enterprises (SMEs) and promoting sustainable practices throughout our value chain.</p>
                <p className='text-white  mt-5'>At cross, we believe that sustainability and impact are critical to building a brighter future in Africa. We work to create positive social and environmental outcomes by supporting small and medium-sized enterprises (SMEs) and promoting sustainable practices throughout our value chain.</p>
                <p className='text-white  mt-5'>At cross, we believe that sustainability and impact are critical to building a brighter future in Africa. We work to create positive social and environmental outcomes by supporting small and medium-sized enterprises (SMEs) and promoting sustainable practices throughout our value chain.</p>
                {/* <p className='text-white  mt-5'>At cross, we believe that sustainability and impact are critical to building a brighter future in Africa. We work to create positive social and environmental outcomes by supporting small and medium-sized enterprises (SMEs) and promoting sustainable practices throughout our value chain.</p> */}
​
            </div>

        </div>
        
    </div>
  )
}

export default Sustainability