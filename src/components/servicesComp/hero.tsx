import React from 'react'

export const ServicesHero = () => {
  return (
    <section className="bg-[url('/services/bg-hero.jpg')] bg-[position:25%]  sm:bg-[position:20%]  lg:bg-[position:45%] bg-no-repeat bg-[size:cover] xl:mx-[40px] rounded-[25px] mt-[20px]">
        <div className='px-[20px]'>
            <div className="h-[250px] sm:h-[320px] lg:h-[400px] xl:h-[450px] flex items-center justify-center">
                <h1 className="font-be-vietnam-pro text-[30px] min-[480px]:text-[40px] sm:text-[50px] leading-[35px] min-[480px]:leading-[50px] md:text-[70px]  sm:leading-[60px] md:leading-[70px] font-[700]  text-white">Services</h1>
            </div>
        </div>
    </section>
  )
}
