'use client'


import Link from 'next/link'
import './Hero.css'


const Hero = () => {
  return (
    <>
    <div className='relative '>


      {/* Large screen */}
      <div className="lg:block hidden lg:mb-[200px]">



          <div className='circle1'></div>
          <div className='circle2'></div>
          
        <div className="pt-[100px] pl-[200px] pr-[200px]">





              
            {/* Content */}
          <div className="content flex flex-col text-center">
                <span className='uppercase tracking-[1px]'>Fullstack Web Dev</span>
            <h1 className='text-2xl font-bold uppercase tracking-[2px]'> M Mudasir Chandio</h1>

            <p className='Op text-[35px] italic mt-[20px] '>Crafting seamless user experiences and pixel-perfect designs, I turn ideas into functional, responsive, and elegant web solutions. Let&apos;s build the future of the web together!</p>



          </div>
          

           


        </div>

      </div>

        {/* small screen */}
        <div className="xs:block lg:hidden">

          <div className='mt-[50px]'>

            <div className='circle1'></div>
            <div className='circle2'></div>

          {/* content */}

          <div className="cont flex flex-col text-center pr-[20px] pl-[20px]">
          <span className='uppercase tracking-[1px]'>Fullstack Web Dev</span>
            <h1 className='text-2xl font-bold uppercase tracking-[2px]'> M Mudasir Chandio</h1>

            <span className='Op text-[20px] italic mt-[20px] '>Crafting seamless user experiences and pixel-perfect designs, I turn ideas into functional, responsive, and elegant web solutions. Let&apos;s build the future of the web together!</span>

              {/* GITHUB */}
                <div className="w-full mt-[40px]">
            <Link href={'https://github.com/Mudasic1'} className='uppercase p-4 rounded-full bg-orange-500 text-white'>Github</Link>
            </div>
          </div>


      </div>


        </div>



    </div>
    
    
    </>
  )
}

export default Hero
